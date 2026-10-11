const fs = require('fs'), path = require('path'), assert = require('node:assert/strict');
process.env.PLAYWRIGHT_BROWSERS_PATH = path.resolve('.cache/browsers');
process.env.TEMP = process.env.TMP = path.resolve('.cache/browser-temp');
const { chromium } = require('playwright-core');
const fixture = require('./fixture.cjs');
(async () => {
  const browser = await chromium.launch();
  const errors = [], checks = [];
  async function ready() {
    const p = await browser.newPage({ viewport: { width: 390, height: 844 } });
    p.on('pageerror', e => errors.push(e.stack));
    p.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
    await p.goto('http://127.0.0.1:4173');
    await p.waitForFunction(() => window.GameUI?.initialized);
    await p.waitForTimeout(600);
    await p.evaluate(() => GameIntervals.stop());
    return p;
  }
  const p = await ready();
  async function check(name, fn) { const result = await fn(); assert.ok(result, name); checks.push(name); console.log(name); }

  await check('A: Async 单批、无 then、异常 finally、嵌套倒计时', () => p.evaluate(async () => {
    let count = 0;
    await Async.run(() => count++, 3, { maxTime: 1e6 });
    if (!Async.enabled || count !== 3) return false;
    try { await Async.run(() => { throw new Error('expected'); }, 1, { maxTime: 1 }); } catch {}
    if (!Async.enabled) return false;
    const values = []; Async.enabled = false;
    Async.run(n => values.push(n), 3, {}); Async.enabled = true;
    return String(values) === '3,2,1';
  }));
  for (const mode of ['fast', 'single', 'multi', 'storedReal', 'skip', 'speedup']) {
    await p.evaluate(fixture, mode === 'storedReal' ? 'late' : 'early');
    await check(`A: 离线 ${mode} 成功后主循环、保存、进度条恢复`, () => p.evaluate(async mode => {
      const obj = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player));
      obj.lastUpdate = Date.now() - (mode === 'fast' ? 20000 : 60000);
      obj.options.offlineProgress = true; obj.options.offlineTicks = ['skip', 'speedup'].includes(mode) ? 1200 : 500;
      obj.auto.autobuyersOn = false; obj.celestials.enslaved.isStoringReal = mode === 'storedReal';
      const original = Async.runForTime; let clicked = false;
      Async.runForTime = function(fun, n, config) {
        if (['skip', 'speedup'].includes(mode) && ui.view.modal.progressBar?.buttons && !clicked) {
          ui.view.modal.progressBar.buttons[mode === 'skip' ? 1 : 0].click(); clicked = true;
          // The click changes progress.remaining; _run passed n before the click.
          n = config.progress.remaining;
        }
        return original.call(this, fun, n, { ...config, maxTime: mode === 'single' ? 1e6 : mode === 'storedReal' ? 60 : 0 });
      };
      GameStorage.offlineEnabled = undefined;
      try {
        const success = await GameStorage.import(GameSaveSerializer.serialize(obj));
        const ok = success && Async.enabled && GameIntervals.gameLoop.isStarted && GameStorage.canSave() && !ui.view.modal.progressBar;
        return ok && (!['skip', 'speedup'].includes(mode) || clicked);
      } finally { Async.runForTime = original; GameIntervals.stop(); }
    }, mode));
  }
  await p.evaluate(fixture, 'late');
  await check('A/C/D: 跨批计算异常回滚进度、持久化数据、槽号及倍率', () => p.evaluate(async () => {
    GameStorage.save(); YC.setRate('gameTime', 5);
    const old = player, raw = localStorage.getItem(GameStorage.localStorageKey), slot = GameStorage.currentSlot;
    const obj = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player));
    obj.lastUpdate = Date.now() - 60000; obj.options.offlineProgress = true;
    const original = Async.runForTime; let batch = 0;
    Async.runForTime = function(fun, n, config) {
      if (++batch === 2) throw new Error('expected async failure');
      return original.call(this, fun, n, { ...config, maxTime: 0 });
    };
    GameStorage.offlineEnabled = undefined;
    try {
      const success = await GameStorage.import(GameSaveSerializer.serialize(obj));
      return !success && player === old && GameStorage.currentSlot === slot && localStorage.getItem(GameStorage.localStorageKey) === raw && YC.selectedRate('gameTime') === 5 && Async.enabled && !ui.view.modal.progressBar;
    } finally { Async.runForTime = original; Modal.hideAll(); }
  }));
  await p.evaluate(fixture, 'late');
  await check('B: 困难薇未解锁立即返回，解锁后正常授予', () => p.evaluate(() => {
    const u = VRunUnlocks.all[8]; u.completions = 0; player.celestials.v.runRecords[8] = 6500;
    player.celestials.ra.unlockBits &= ~(1 << Ra.unlocks.unlockHardV.id);
    const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(u), 'completions'); let reads = 0;
    Object.defineProperty(u, 'completions', { configurable: true, get() { if (++reads > 100) throw new Error('non-terminating'); return descriptor.get.call(this); }, set(n) { descriptor.set.call(this, n); } });
    try { u.tryComplete(); } finally { delete u.completions; }
    if (u.completions !== 0) return false;
    player.celestials.ra.unlockBits |= 1 << Ra.unlocks.unlockHardV.id; u.tryComplete();
    return u.completions > 0 && u.completions <= u.config.values.length;
  }));
  const mutations = [
    [['eternities'], 'broken'], [['records', 'thisInfinity'], []], [['options', 'notationDigits'], null],
    [['dimensions', 'antimatter', 0, 'amount'], 'abc'], [['reality', 'glyphs', 'inventory'], [{}]],
    [['reality', 'automator', 'scripts'], { 1: { id: 1, content: null } }], [['reality', 'seed'], 0],
    [['backupTimer'], 'broken'], [['version'], 999999], [['options', 'offlineTicks'], 0]
  ];
  await p.evaluate(fixture, 'late');
  await check('C: 十类坏档均在覆盖前拒绝，当前进度与所有存储键不变', () => p.evaluate(async mutations => {
    GameStorage.save(); const old = player;
    const before = JSON.stringify(Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])));
    for (const [keys, value] of mutations) {
      const obj = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player));
      let target = obj; for (const key of keys.slice(0, -1)) target = target[key]; target[keys.at(-1)] = value;
      const text = GameSaveSerializer.serialize(obj);
      if (!GameStorage.checkImport(text) || await GameStorage.import(text) !== false || player !== old) return false;
    }
    Modal.hideAll();
    return before === JSON.stringify(Object.fromEntries(Object.keys(localStorage).map(k => [k, localStorage.getItem(k)])));
  }, mutations));
  await check('C: 正常旧版本迁移、缺失字段默认补齐、合法 Infinity 记录可加载', () => p.evaluate(async () => {
    const value = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player));
    value.version = 24; delete value.options.notationDigits; value.achievementBits[17] = 255; value.records.bestInfinity.time = 'Infinity';
    GameStorage.offlineEnabled = false;
    const text = GameSaveSerializer.serialize(value);
    if (GameStorage.checkImport(text)) return false;
    const ok = await GameStorage.import(text); GameIntervals.stop();
    return ok && player.options.notationDigits.comma === Player.defaultStart.options.notationDigits.comma;
  }));
  await check('D: 坏槽切换不改当前槽，正常槽、备份恢复成功后复位倍率', () => p.evaluate(async () => {
    GameStorage.saves[1] = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player));
    GameStorage.saves[1].options.notationDigits = null; GameStorage.save();
    const slot = GameStorage.currentSlot, old = player, raw = localStorage.getItem(GameStorage.localStorageKey);
    if (await GameStorage.loadSlot(1) !== false || player !== old || GameStorage.currentSlot !== slot || localStorage.getItem(GameStorage.localStorageKey) !== raw) return false;
    Modal.hideAll();
    GameStorage.saves[1] = undefined; GameStorage.saveToBackup(1, player.backupTimer);
    Currency.antimatter.value = new Decimal(222); YC.setRate('gameTime', 10);
    if (!await GameStorage.restoreBackup(1) || Object.keys(YC.rates).length) return false;
    GameIntervals.stop();
    if (!await GameStorage.loadSlot(1)) return false; GameIntervals.stop();
    Currency.antimatter.value = new Decimal(333); GameStorage.save(); YC.setRate('gameTime', 10);
    if (!await GameStorage.loadSlot(slot)) return false; GameIntervals.stop();
    return Object.keys(YC.rates).length === 0 && GameStorage.saves[1].antimatter.eq(333);
  }));
  await p.evaluate(fixture, 'late');
  await check('G: 坏元数据拒绝、部分备份合并、第 N 次写入异常完整回滚', () => p.evaluate(() => {
    GameStorage.saveToBackup(1, 100); GameStorage.saveToBackup(2, 200);
    const snapshot = () => JSON.stringify(Object.fromEntries(Object.keys(localStorage).sort().map(k => [k, localStorage.getItem(k)])));
    const before = snapshot(), times = JSON.stringify(GameStorage.lastBackupTimes);
    if (GameStorage.importBackupsFromFile(GameSaveSerializer.serialize({ 1: player, time: { 1: {} } })) !== false || snapshot() !== before || !Number.isFinite(player.backupTimer)) return false;
    const data = { 1: player, time: { 1: { backupTimer: 300, date: Date.now() } } };
    if (!GameStorage.importBackupsFromFile(GameSaveSerializer.serialize(data)) || GameStorage.lastBackupTimes[2].backupTimer !== 200) return false;
    const saved = snapshot(), metadata = JSON.stringify(GameStorage.lastBackupTimes), timer = player.backupTimer;
    const original = Storage.prototype.setItem;
    data[1] = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player)); data[1].antimatter = '123'; data.time[1].backupTimer = 400;
    let writes = 0; Storage.prototype.setItem = function(k, v) { if (++writes === 2) throw new DOMException('expected quota', 'QuotaExceededError'); return original.call(this, k, v); };
    try {
      if (GameStorage.importBackupsFromFile(GameSaveSerializer.serialize(data)) !== false) return false;
    } finally { Storage.prototype.setItem = original; }
    return snapshot() === saved && JSON.stringify(GameStorage.lastBackupTimes) === metadata && player.backupTimer === timer;
  }));
  await check('H: 自动保存/备份写入失败不中断循环，不误报已保存，内存仍可导出', () => p.evaluate(() => {
    GameStorage.save(); const before = GameStorage.lastSaveTime, raw = localStorage.getItem(GameStorage.localStorageKey);
    Currency.antimatter.add(new Decimal(1));
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = () => { throw new DOMException('expected quota', 'QuotaExceededError'); };
    GameIntervals.restart();
    try {
      const saved = GameStorage.save(), backup = GameStorage.saveToBackup(1, 999);
      const exported = GameSaveSerializer.deserialize(GameStorage.exportModifiedSave());
      return saved === false && backup === false && GameIntervals.gameLoop.isStarted && !GlobalErrorHandler.handled && GameStorage.lastSaveTime === before && localStorage.getItem(GameStorage.localStorageKey) === raw && new Decimal(exported.antimatter).eq(player.antimatter);
    } finally { Storage.prototype.setItem = original; GameIntervals.stop(); }
  }));
  // Real quota, not only a mock exception.
  const q = await ready();
  await check('H: 真实 localStorage 配额耗尽仍可运行，清理测试填充后可保存', async () => {
    const result = await q.evaluate(() => {
      let count = 0; const block = 'x'.repeat(100000);
      try { while (count < 200) localStorage.setItem(`quota-${count++}`, block); } catch {}
      // Fill the residual space so even a small save cannot fit.
      let tail = 0; try { while (tail < 10000) localStorage.setItem(`tail-${tail++}`, 'x'.repeat(500)); } catch {}
      GameIntervals.restart(); const success = GameStorage.save();
      const ok = success === false && GameIntervals.gameLoop.isStarted && !GlobalErrorHandler.handled;
      for (const key of Object.keys(localStorage)) if (key.startsWith('quota-') || key.startsWith('tail-')) localStorage.removeItem(key);
      const restored = GameStorage.save(); GameIntervals.stop(); return ok && restored;
    });
    await q.close(); return result;
  });
  // Recovery entry is checked through a real reload; preserve all corrupt bytes until a user action.
  for (const kind of ['null', 'badRoot', 'badCurrent']) {
    const r = await ready();
    await check(`D: ${kind} 启动进入恢复，下载原文并恢复有效槽`, async () => {
      const raw = await r.evaluate(kind => {
        const good = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player)); good.antimatter = '777'; good.options.offlineProgress = false;
        const bad = GameSaveSerializer.deserialize(GameSaveSerializer.serialize(player)); bad.options.notationDigits = null;
        const root = kind === 'null' ? null : kind === 'badRoot' ? { current: 0, saves: null } : { current: 1, saves: { 0: good, 1: bad } };
        const raw = GameSaveSerializer.serialize(root); localStorage.setItem(GameStorage.localStorageKey, raw); return raw;
      }, kind);
      await r.reload(); await r.waitForSelector('.yc-storage-recovery');
      assert.equal(await r.evaluate(raw => localStorage.getItem(GameStorage.localStorageKey) === raw && !GameStorage.canSave(), raw), true);
      const download = r.waitForEvent('download'); await r.getByRole('button', { name: '下载原始数据', exact: true }).click();
      const parts = await (await (await download).createReadStream()).toArray();
      assert.equal(JSON.parse(Buffer.concat(parts).toString())['yc-ad:dimensionSave'], raw);
      if (kind === 'badCurrent') {
        await r.getByRole('button', { name: '加载此槽', exact: true }).click();
        await r.waitForFunction(() => !GameStorage.recovery);
        assert.equal(await r.evaluate(() => GameStorage.currentSlot === 0 && player.antimatter.eq(777) && GameIntervals.gameLoop.isStarted), true);
        assert.equal(await r.evaluate(() => GameSaveSerializer.deserialize(localStorage.getItem(GameStorage.localStorageKey)).saves[1].options.notationDigits), null);
      } else {
        assert.equal(await r.getByRole('button', { name: '重置当前槽并开始' }).isDisabled(), true);
        await r.locator('.yc-storage-recovery input[type=checkbox]').check();
        await r.getByRole('button', { name: '重置当前槽并开始' }).click();
        await r.waitForFunction(() => !GameStorage.recovery && GameIntervals.gameLoop.isStarted);
      }
      await r.close(); return true;
    });
  }
  await p.evaluate(fixture, 'late');
  for (let i = 0; i < 5; i++) {
    await p.evaluate(i => { Modal.hideAll(); Modal.automatorScriptTemplate.show(GameDatabase.reality.automator.templates.scripts[i]); GameUI.update(); }, i);
    await p.waitForTimeout(50);
    await check(`F: 模板 ${i + 1} 合法文本/积木生成、解析及受控运行`, () => p.evaluate(async () => {
      function find(vm) { if (vm.$options.name === 'AutomatorScriptTemplate') return vm; for (const child of vm.$children || []) { const match = find(child); if (match) return match; } }
      const vm = find(ui);
      for (const input of vm.inputs) vm.templateInputs[input.name] = ['boolean', 'nowait', 'mode'].includes(input.type) ? true : input.type === 'tree' ? '11' : input.type === 'integer' ? '1' : '1e10';
      vm.updateTemplateProps(); if (vm.invalidInputCount) return false;
      const script = vm.templateScript.script;
      const { compile, blockifyTextAutomator } = await import('/src/core/automator/compiler.js');
      if (compile(script).errors.length) return false;
      const block = blockifyTextAutomator(script); if (!block.blocks.length) return false;
      AutomatorData.createNewScript(script, 'regression'); AutomatorBackend.initializeFromSave(); AutomatorBackend.start(player.reality.automator.state.editorScript);
      if (!AutomatorBackend.isRunning || GameStorage.checkPlayerObject(player)) return false;
      AutomatorBackend.update(1000); AutomatorBackend.stop();
      if (GameStorage.checkPlayerObject(player)) return false;
      vm.templateInputs.treeStudies = 'NAME nope'; vm.updateTemplateProps();
      if (!vm.invalidInputCount || vm.currentPreset !== '') return false;
      vm.loadPreset('', 1); if (vm.invalidInputCount || vm.currentPreset !== '1') return false;
      vm.templateInputs.treeStudies = '11'; vm.updateTemplateProps();
      return !vm.invalidInputCount && vm.currentPreset === '';
    }));
  }
  await p.evaluate(fixture, 'late');
  for (const width of [360, 390, 430, 768, 1440]) for (const modern of [true, false]) for (const hard of [false, true]) {
    await p.setViewportSize({ width, height: 900 });
    await p.evaluate(({ modern, hard }) => {
      if (player.options.newUI !== modern) GameOptions.toggleUI();
      player.reality.perkPoints = 1e9;
      VRunUnlocks.all.forEach(unlock => { unlock.completions = 1; });
      player.celestials.v.goalReductionSteps.fill(0);
      player.celestials.v.wantsFlipped = hard; Tab.celestials.v.show(true); Quote.clearAll(); GameUI.update();
    }, { modern, hard });
    await p.waitForTimeout(40);
    await check(`E: 薇 ${width}px ${modern ? '现代' : '经典'} ${hard ? '困难' : '普通'} 卡片/按钮可达`, async () => {
      const cards = p.locator('.c-v-unlock'); assert.equal(await cards.count(), hard ? 3 : 6);
      for (const card of await cards.all()) {
        await card.scrollIntoViewIfNeeded();
        assert.equal(await card.evaluate(e => { const r = e.getBoundingClientRect(); return r.left >= -1 && r.right <= innerWidth + 1; }), true);
        for (const button of await card.locator('button').all()) {
          await button.scrollIntoViewIfNeeded();
          if (width <= 1024) assert.equal(await button.evaluate(e => { const r = e.getBoundingClientRect(), hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2); return r.width >= 44 && r.height >= 44 && (hit === e || e.contains(hit)); }), true);
        }
      }
      const buttons = p.locator('.c-v-unlock button');
      assert.ok(await buttons.count() > 0, 'Reduction controls actually rendered');
      const before = await p.evaluate(() => player.reality.perkPoints);
      await buttons.first().click();
      assert.ok(await p.evaluate(() => player.reality.perkPoints) < before, 'Native reduction purchase');
      if (width === 390 && modern && !hard) { await p.evaluate(()=>document.getElementById('notification-container').replaceChildren()); await cards.first().scrollIntoViewIfNeeded(); await p.screenshot({ path: 'test-results/v-mobile-fixed.png' }); }
      return true;
    });
  }
  await p.evaluate(fixture, 'early');
  await check('原生主循环持续运行，买维度、保存及刷新接续', async () => {
    await p.evaluate(() => { Currency.antimatter.value = new Decimal(1000); buyOneDimension(1); GameIntervals.restart(); });
    const before = await p.evaluate(() => player.antimatter.toNumber());
    await p.waitForTimeout(1200); const after = await p.evaluate(() => player.antimatter.toNumber());
    assert.ok(after > before); await p.evaluate(() => GameStorage.save()); await p.reload();
    await p.waitForFunction(() => GameIntervals.gameLoop.isStarted); await p.waitForTimeout(600);
    return await p.evaluate(() => player.dimensions.antimatter[0].bought > 0 && !GlobalErrorHandler.handled);
  });
  assert.deepEqual(errors, []);
  fs.writeFileSync('test-results/regressions-report.json', JSON.stringify({ checks, errors }, null, 2));
  await browser.close();
})().catch(error => { console.error(error); process.exit(1); });
