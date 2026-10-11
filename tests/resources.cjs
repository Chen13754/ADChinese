const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
process.env.PLAYWRIGHT_BROWSERS_PATH = path.resolve('.cache/browsers');
process.env.TEMP = process.env.TMP = path.resolve('.cache/browser-temp');
const { chromium } = require('playwright-core');
const fixture = require('./fixture.cjs');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const p = await context.newPage();
  const errors = [], checks = [];
  p.on('pageerror', e => errors.push(e.message));
  try {
    await p.goto('http://127.0.0.1:4173');
    await p.waitForFunction(() => window.ui?.view?.initialized);
    await p.locator('#loading').waitFor({ state: 'hidden' });
    await p.evaluate(fixture, 'early');
    assert.equal(await p.evaluate(() => {
      try { YC.addResourceMultiple('antimatter', '1'); return false; } catch { return player.antimatter.eq(10); }
    }), true);
    await p.evaluate(() => Modal.ycConsole.show());
    await p.getByRole('button', { name: '了解风险，继续', exact: true }).tap();
    const row = p.locator('[data-resource=antimatter]');
    assert.equal(await p.locator('[data-resource]').count(), 1);
    await p.evaluate(() => { Currency.antimatter.value = new Decimal(100); GameUI.update(); });
    await row.getByRole('button', { name: '+1倍', exact: true }).tap();
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 200);
    await row.getByRole('button', { name: '+10倍', exact: true }).tap();
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 2200);
    await row.getByRole('button', { name: '+100倍', exact: true }).tap();
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 222200);
    await row.getByRole('button', { name: '+1000倍', exact: true }).tap();
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 222422200);
    // Change live state without a UI update: the click must read the actual current balance.
    await p.evaluate(() => { Currency.antimatter.value = new Decimal(300); });
    await row.getByRole('button', { name: '+10倍', exact: true }).tap();
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 3300);
    checks.push('四档倍数按钮以点击时的数量计算，连续点击按最新余额增加');
    await row.getByRole('textbox', { name: '反物质增量', exact: true }).fill('1e4');
    await row.getByRole('button', { name: '增加', exact: true }).tap();
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 13300);
    await row.getByRole('textbox', { name: '反物质增量', exact: true }).fill('7');
    await row.getByRole('textbox', { name: '反物质增量', exact: true }).press('Enter');
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 13307);
    assert.match(await p.locator('.yc-status').innerText(), /已增加 7/);
    await p.evaluate(() => { Currency.antimatter.value = new Decimal(0); GameUI.update(); });
    await row.getByRole('button', { name: '+1倍', exact: true }).tap();
    assert.match(await p.locator('.yc-status').innerText(), /当前资源为 0/);
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 0);
    await row.getByRole('textbox', { name: '反物质增量', exact: true }).fill('100');
    await row.getByRole('button', { name: '增加', exact: true }).tap();
    assert.equal(await p.evaluate(() => player.antimatter.toNumber()), 100);
    checks.push('自定义数量、科学计数法、回车提交和零余额引导正常');
    await p.evaluate(fixture, 'late');
    assert.deepEqual(await p.evaluate(() => {
      YC.warningAccepted = true;
      return YCResources.map(row => {
        const c = Currency[row.id];
        c.value = row.number ? 100 : new Decimal(100);
        const gain = YC.addResourceMultiple(row.id, '10');
        return row.number ? c.value === 1100 && gain.added === 1000 : c.value.eq(1100) && gain.added.eq(1000);
      });
    }), [true, true, true, true, true, true]);
    assert.equal(await p.evaluate(() => {
      Currency.antimatter.value = new Decimal('1e1000');
      const total = player.records.totalAntimatter;
      YC.addResourceMultiple('antimatter', '1000');
      if (!player.antimatter.eq('1.001e1003') || !player.records.totalAntimatter.eq(total.plus('1e1003'))) return false;
      Currency.antimatter.value = new Decimal('.5');
      YC.addResourceMultiple('antimatter', '1');
      return player.antimatter.eq(1);
    }), true);
    checks.push('六种资源复用原生接口，大数与小数余额按倍数增加，累计统计同步');
    assert.equal(await p.evaluate(() => {
      const reject = fun => { const before = GameStorage.exportModifiedSave(); try { fun(); return false; } catch { return GameStorage.exportModifiedSave() === before; } };
      for (const relative of [false, true]) for (const value of ['0', '-1', '1.5', 'NaN', 'Infinity', '1e99999999999999999', 'hello']) {
        if (!reject(() => YC.addResource('antimatter', value, relative))) return false;
      }
      Currency.antimatter.value = new Decimal('1e1000');
      if (!reject(() => YC.addResource('antimatter', '1'))) return false;
      Currency.antimatter.value = new Decimal(Decimal.MAX_VALUE);
      if (!reject(() => YC.addResourceMultiple('antimatter', '1000'))) return false;
      Currency.perkPoints.value = Number.MAX_SAFE_INTEGER;
      if (!reject(() => YC.addResourceMultiple('perkPoints', '1')) || !reject(() => YC.addResource('perkPoints', '1'))) return false;
      Currency.realityMachines.value = MachineHandler.hardcapRM.div(2);
      const gain = YC.addResourceMultiple('realityMachines', '10');
      if (!Currency.realityMachines.value.eq(MachineHandler.hardcapRM) || !gain.added.eq(MachineHandler.hardcapRM.div(2))) return false;
      if (!reject(() => YC.addResourceMultiple('realityMachines', '1'))) return false;
      GameStorage.loading = true;
      try { return reject(() => YC.addResourceMultiple('antimatter', '1')); } finally { GameStorage.loading = false; }
    }), true);
    checks.push('无效输入、无效果增量、溢出和加载中修改均不改变存档，现实机器原生上限保留');
    await p.evaluate(fixture, 'early');
    await p.evaluate(() => {
      Currency.antimatter.value = new Decimal(100);
      YC.addResourceMultiple('antimatter', '10');
      GameStorage.save();
    });
    await p.reload();
    await p.waitForFunction(() => window.ui?.view?.initialized);
    await p.locator('#loading').waitFor({ state: 'hidden' });
    assert.equal(await p.evaluate(() => player.antimatter.eq(1100)), true);
    assert.equal(await p.evaluate(() => YC.warningAccepted), false);
    checks.push('倍数增益正常存档，刷新接续并重新提示控制台风险');
    await p.evaluate(fixture, 'late');
    await p.evaluate(() => { YC.warningAccepted = true; Modal.ycConsole.show(); });
    await row.getByRole('button', { name: '+1倍', exact: true }).tap();
    for (const width of [360, 390, 430, 768, 1440]) {
      await p.setViewportSize({ width, height: 844 });
      await p.waitForTimeout(100);
      assert.equal(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
      assert.equal(await p.locator('[data-resource]').count(), 6);
      assert.equal(await p.locator('.c-modal__close-btn').evaluate(e => {
        const r = e.getBoundingClientRect(), hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
        return hit === e || e.contains(hit);
      }), true);
      for (const control of await p.locator('[data-resource] button, [data-resource] input').all()) {
        await control.scrollIntoViewIfNeeded();
        const bounds = await control.evaluate(e => {
          const r = e.getBoundingClientRect(), hit = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2);
          return { label: e.textContent || e.getAttribute('aria-label'), left: r.left, right: r.right, height: r.height, hit: hit === e || e.contains(hit), covering: hit?.outerHTML.slice(0, 200) };
        });
        if (!(bounds.left >= -1 && bounds.right <= width + 1 && bounds.height >= 44 && bounds.hit)) await p.screenshot({ path: 'test-results/resources-failed.png' });
        assert.ok(bounds.left >= -1 && bounds.right <= width + 1 && bounds.height >= 44 && bounds.hit, JSON.stringify({ width, ...bounds }));
      }
      assert.equal(await p.evaluate(() => {
        const rows = [...document.querySelectorAll('[data-resource]')];
        const heading = [...document.querySelectorAll('.yc-console h3')].find(e => e.textContent === '独立加速');
        return getComputedStyle(rows[0]).float === 'none' && rows.every((r, i) => !i || r.getBoundingClientRect().top >= rows[i - 1].getBoundingClientRect().bottom - 1) && heading.getBoundingClientRect().top >= rows.at(-1).getBoundingClientRect().bottom - 1;
      }), true);
      assert.doesNotMatch(await row.locator('.yc-resource-value').innerText(), /无限/);
      await row.scrollIntoViewIfNeeded();
      await p.screenshot({ path: 'test-results/resources-' + width + '.png' });
    }
    await p.setViewportSize({ width: 390, height: 360 });
    await row.getByRole('textbox', { name: '反物质增量', exact: true }).fill('1e1001');
    await row.getByRole('button', { name: '增加', exact: true }).tap();
    const modal = await p.locator('.c-modal').boundingBox();
    assert.ok(modal.y >= 0 && modal.y + modal.height <= 361);
    assert.match(await p.locator('.yc-status').innerText(), /已增加/);
    await p.locator('.c-modal__close-btn').tap();
    assert.equal(await p.locator('.yc-console').count(), 0);
    checks.push('五种尺寸、六种资源按钮和输入可达，触控目标至少44px；反馈不遮挡操作，缩小视口仍可提交');
    assert.deepEqual(errors, []);
    fs.writeFileSync('test-results/resources-report.json', JSON.stringify({ checks, errors }, null, 2));
    console.log(checks.join('\n'));
  } finally { await context.close(); await browser.close(); }
})().catch(e => { console.error(e); process.exit(1); });
