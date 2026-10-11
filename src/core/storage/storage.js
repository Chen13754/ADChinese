import { ADNotations } from "../../../modules/notations.js";

import { DEV } from "../../env.js";

import { deepmergeAll } from "../../utility/deepmerge.js";
import { preparePlayer } from "./validation.js";

export const BACKUP_SLOT_TYPE = {
  ONLINE: 0,
  OFFLINE: 1,
  RESERVE: 2,
};

// Note: interval is in seconds, and only the first RESERVE slot is ever used. Having intervalStr as a redundant
// prop is necessary because using our TimeSpan formatting functions produces undesirable strings like "1.00 minutes"
export const AutoBackupSlots = [
  {
    id: 1,
    type: BACKUP_SLOT_TYPE.ONLINE,
    intervalStr: () => `${formatInt(1)} 分钟`,
    interval: 60,
  },
  {
    id: 2,
    type: BACKUP_SLOT_TYPE.ONLINE,
    intervalStr: () => `${formatInt(5)} 分钟`,
    interval: 5 * 60,
  },
  {
    id: 3,
    type: BACKUP_SLOT_TYPE.ONLINE,
    intervalStr: () => `${formatInt(20)} 分钟`,
    interval: 20 * 60,
  },
  {
    id: 4,
    type: BACKUP_SLOT_TYPE.ONLINE,
    intervalStr: () => `${formatInt(1)} 小时`,
    interval: 3600,
  },
  {
    id: 5,
    type: BACKUP_SLOT_TYPE.OFFLINE,
    intervalStr: () => `${formatInt(10)} 分钟`,
    interval: 10 * 60,
  },
  {
    id: 6,
    type: BACKUP_SLOT_TYPE.OFFLINE,
    intervalStr: () => `${formatInt(1)} 小时`,
    interval: 3600,
  },
  {
    id: 7,
    type: BACKUP_SLOT_TYPE.OFFLINE,
    intervalStr: () => `${formatInt(5)} 小时`,
    interval: 5 * 3600,
  },
  {
    id: 8,
    type: BACKUP_SLOT_TYPE.RESERVE,
  },
];

export const GameStorage = {
  currentSlot: 0,
  saves: {
    0: undefined,
    1: undefined,
    2: undefined
  },
  saved: 0,
  lastSaveTime: Date.now(),
  lastCloudSave: Date.now(),
  offlineEnabled: undefined,
  offlineTicks: undefined,
  lastUpdateOnLoad: 0,
  lastBackupTimes: [],
  oldBackupTimer: 0,
  ignoreBackupTimer: true,

  // Limit offline tick count using two conditions:
  // - Ticks should never be shorter than 33ms (this would allow offline to exploit tick microstructure)
  // - Count should be limited to 1e6 (the options UI doesn't allow for this to be set above this value)
  maxOfflineTicks(simulatedMs, defaultTicks = this.offlineTicks) {
    const tickLimit = Math.clampMax(Math.floor(simulatedMs / 33), 1e6);
    return Math.clampMax(defaultTicks, tickLimit);
  },

  get localStorageKey() {
    return DEV ? "yc-ad:dimensionTestSave" : "yc-ad:dimensionSave";
  },

  backupDataKey(saveSlot, backupSlot) {
    return DEV ? `yc-ad:backupTestSave-${saveSlot}-${backupSlot}` : `yc-ad:backupSave-${saveSlot}-${backupSlot}`;
  },

  backupTimeKey(saveSlot) {
    return DEV ? `yc-ad:backupTestTimes-${saveSlot}` : `yc-ad:backupTimes-${saveSlot}`;
  },

  loading: false,
  recovery: undefined,
  storageFailure: false,

  reportStorageFailure() {
    if (!this.storageFailure) GameUI.notify.error("浏览器存储写入失败。游戏进度仍在内存中，请立即导出存档文件，再关闭网页。");
    this.storageFailure = true;
  },

  // All writes are prepared before the first mutation; roll back only keys actually changed.
  writeBatch(entries) {
    const previous = new Map();
    try {
      for (const key of entries.keys()) previous.set(key, localStorage.getItem(key));
      const changed = [];
      try {
        for (const [key, value] of entries) {
          if (previous.get(key) === value) continue;
          if (value === null) localStorage.removeItem(key);
          else localStorage.setItem(key, value);
          changed.push(key);
        }
      } catch (error) {
        for (const key of changed.reverse()) {
          const value = previous.get(key);
          if (value === null) localStorage.removeItem(key);
          else localStorage.setItem(key, value);
        }
        throw error;
      }
      this.storageFailure = false;
      return true;
    } catch {
      this.reportStorageFailure();
      return false;
    }
  },

  load() {
    try {
      const raw = localStorage.getItem(this.localStorageKey);
      return this.loadRoot(raw === null ? undefined : GameSaveSerializer.deserialize(raw), raw !== null);
    } catch {
      this.enterRecovery("浏览器存储无法读取，请先下载可读取的原始数据。", undefined);
      return false;
    }
  },

  enterRecovery(reason, root) {
    GameIntervals.stop();
    this.recovery = { reason, root };
    if ([0, 1, 2].includes(root?.current)) this.currentSlot = root.current;
    // onload marks the UI ready after init; show recovery only then.
    const show = () => {
      if (!this.recovery) return;
      if (!GameUI.initialized) { setTimeout(show, 100); return; }
      Modal.storageRecovery.show();
    };
    show();
  },

  exportRecoveryData() {
    try {
      const data = Object.fromEntries(Object.keys(localStorage).filter(key => key.startsWith("yc-ad:"))
        .map(key => [key, localStorage.getItem(key)]));
      download(`AD Recovery (${this.exportDateString}).txt`, JSON.stringify(data));
    } catch { GameUI.notify.error("浏览器禁止读取存储，无法导出原始数据。请保留当前网页。"); }
  },

  loadRoot(root, hadData = root !== undefined) {
    if (root === undefined && !hadData) return this.loadTransaction(Player.defaultStart, { persist: false });
    try {
      if (!root || typeof root !== "object" || Array.isArray(root)) throw new Error("本地存档无法解码");
      const legacy = root.saves === undefined;
      const saves = legacy ? { 0: root, 1: undefined, 2: undefined } : root.saves;
      const slot = legacy ? 0 : root.current;
      if (!saves || typeof saves !== "object" || Array.isArray(saves) || ![0, 1, 2].includes(slot) ||
          Object.keys(saves).some(key => !["0", "1", "2"].includes(key))) throw new Error("本地存档槽结构损坏");
      const result = this.loadTransaction(saves[slot] === undefined ? Player.defaultStart : saves[slot],
        { slot, saves, persist: legacy, backupOffline: true });
      const finish = success => { if (!success) this.enterRecovery("当前存档无法安全加载，原数据已保留。", { current: slot, saves }); return success; };
      return result?.then ? result.then(finish) : finish(result);
    } catch (error) {
      this.enterRecovery(error.message, root);
      return false;
    }
  },

  loadSlot(slot) {
    if (![0, 1, 2].includes(slot)) return false;
    const saves = this.recovery?.root?.saves ?? this.saves;
    const result = this.loadTransaction(saves[slot] === undefined ? Player.defaultStart : saves[slot],
      { slot, saves, backupOffline: true });
    const finish = success => {
      if (success) {
        Tabs.all.find(t => t.id === player.options.lastOpenTab)?.show(false);
        GameUI.notify.info("存档已加载，加速已恢复正常");
      }
      return success;
    };
    return result?.then ? result.then(finish) : finish(result);
  },

  checkImport(saveData) {
    try { preparePlayer(GameSaveSerializer.deserialize(String(saveData).trim())); return ""; }
    catch (error) { return error.message || "存档损坏，或无法完成版本迁移"; }
  },

  loadTransaction(save, options = {}) {
    if (this.loading || (!this.recovery && !this.canSave())) return false;
    let prepared;
    try { prepared = preparePlayer(save); }
    catch (error) { Modal.message.show(error.message); return false; }
    const previous = {
      player, saves: this.saves, slot: this.currentSlot, rates: { ...YC.rates },
      offlineEnabled: this.offlineEnabled, offlineTicks: this.offlineTicks,
      oldBackupTimer: this.oldBackupTimer, lastBackupTimes: this.lastBackupTimes,
      lastSaveTime: this.lastSaveTime, saved: this.saved, recovery: this.recovery,
      lastUpdate: player.lastUpdate, lastUpdateOnLoad: this.lastUpdateOnLoad,
      ignoreBackupTimer: this.ignoreBackupTimer, additionalEnd: GameEnd.additionalEnd,
      running: GameIntervals.all().map(interval => interval.isStarted),
    };
    GameIntervals.stop();
    this.loading = true;
    this.pendingWrites = new Map();
    let committedWrites;
    const restore = () => {
      GameIntervals.stop();
      if (committedWrites) this.writeBatch(committedWrites);
      ui.view.modal.progressBar = undefined;
      Async.enabled = true;
      GameUI.notify.showBlackHoles = true;
      this.currentSlot = previous.slot;
      this.saves = previous.saves;
      this.offlineEnabled = false;
      this.loading = true;
      try { this.loadPlayerObject(previous.player, { player: previous.player }); }
      catch { Lazy.invalidateAll(); }
      finally {
        player = previous.player;
        player.lastUpdate = previous.lastUpdate;
        GameEnd.additionalEnd = previous.additionalEnd;
        this.lastUpdateOnLoad = previous.lastUpdateOnLoad;
        this.ignoreBackupTimer = previous.ignoreBackupTimer;
        this.backupOnLoad = false;
        Object.assign(this, { offlineEnabled: previous.offlineEnabled, offlineTicks: previous.offlineTicks,
          oldBackupTimer: previous.oldBackupTimer, lastBackupTimes: previous.lastBackupTimes,
          lastSaveTime: previous.lastSaveTime, saved: previous.saved, recovery: previous.recovery });
        YC.rates = previous.rates;
        this.loading = false;
        this.pendingWrites = undefined;
        GameIntervals.all().forEach((interval, i) => { if (previous.running[i]) interval.restart(); });
      }
      Modal.message.show("加载失败，已保留原来的存档槽和进度。若浏览器保存失败，请先导出文件。");
      return false;
    };
    const finish = () => {
      try {
        if (options.resetBackupTimer) this.resetBackupTimer();
        if (options.beforeCommit) options.beforeCommit();
        GameUI.update();
        // Initialization and offline simulation must both succeed before any persistent writes.
        preparePlayer(player);
        if (options.persist !== false) this.pendingWrites.set(this.localStorageKey,
          GameSaveSerializer.serialize({ current: this.currentSlot, saves: this.saves }));
        const originals = new Map([...this.pendingWrites.keys()].map(key => [key, localStorage.getItem(key)]));
        if (!this.writeBatch(this.pendingWrites)) return restore();
        committedWrites = originals;
        if (options.persist !== false) this.lastSaveTime = Date.now();
        this.loading = false;
        this.pendingWrites = undefined;
        this.recovery = undefined;
        this.offlineEnabled = previous.offlineEnabled;
        this.offlineTicks = previous.offlineTicks;
        Modal.hideAll();
        Cloud.resetTempState();
        this.postLoadStuff();
        if (prepared.previousVersion) {
          EventHub.dispatch(GAME_EVENT.SAVE_CONVERTED_FROM_PREVIOUS_VERSION);
          Modal.uiChoice.show();
        }
        Achievements.updateSteamStatus();
        this.showCatchup(this.pendingCatchup);
        return true;
      } catch { return restore(); }
    };
    try {
      this.currentSlot = options.slot ?? this.currentSlot;
      const sourceSaves = options.saves ?? this.saves;
      this.saves = Object.fromEntries([0, 1, 2].map(slot => [slot, sourceSaves[slot]]));
      this.loadBackupTimes();
      this.oldBackupTimer = options.resetBackupTimer ? previous.player.backupTimer : 0;
      this.offlineEnabled = options.offlineEnabled ?? this.offlineEnabled;
      this.offlineTicks = options.offlineTicks ?? this.offlineTicks;
      if (options.reserve) this.saveToBackup(AutoBackupSlots.find(slot => slot.type === BACKUP_SLOT_TYPE.RESERVE).id,
        previous.player.backupTimer, previous.player);
      this.backupOnLoad = Boolean(options.backupOffline);
      const result = this.loadPlayerObject(prepared.player, prepared);
      return result?.then ? result.then(finish, restore) : finish();
    } catch { return restore(); }
  },

  import(saveData) {
    if (tryImportSecret(saveData) || Theme.tryUnlock(saveData)) return false;
    const result = this.loadTransaction(GameSaveSerializer.deserialize(String(saveData).trim()), { resetBackupTimer: true,
      beforeCommit: () => {
        GlyphAppearanceHandler.clearInvalidCosmetics();
        if (player.speedrun?.isActive) Speedrun.setSegmented(true);
      }
    });
    const finish = success => {
      this.offlineEnabled = undefined;
      this.offlineTicks = undefined;
      if (success) {
        Tab.options.subtabs[0].show();
        GameUI.notify.info("已导入存档，加速已恢复正常");
      }
      return success;
    };
    return result?.then ? result.then(finish) : finish(result);
  },

  restoreBackup(id) {
    const save = this.loadFromBackup(id);
    if (!save) return false;
    const result = this.loadTransaction(save, { reserve: true, resetBackupTimer: true,
      offlineEnabled: player.options.loadBackupWithoutOffline ? false : undefined });
    const finish = success => { if (success) GameUI.notify.info(`游戏已加载备份槽位 #${id}`); return success; };
    return result?.then ? result.then(finish) : finish(result);
  },

  async importAsFile(file) {
    if (!file || GameEnd.creditsEverClosed) return;
    try {
      const text = await file.text();
      Modal.import.show({ initialInput: text.trim() });
    } catch { Modal.message.show("无法读取存档文件，请重新选择，或使用存档文本。"); }
  },

  overwriteSlot(slot, saveData) {
    if (![0, 1, 2].includes(slot)) return false;
    try { preparePlayer(saveData); } catch { return false; }
    if (slot === this.currentSlot) return this.loadTransaction(saveData);
    const saves = { ...this.saves, [slot]: saveData };
    if (!this.writeBatch(new Map([[this.localStorageKey, GameSaveSerializer.serialize({ current: this.currentSlot, saves })]]))) return false;
    this.saves = saves;
    return true;
  },

  // Preview and all loading entry points share the same candidate validation.
  checkPlayerObject(save) {
    try { preparePlayer(save); return ""; } catch (error) { return error.message; }
  },

  // A few things in the current game state can prevent saving, which we want to do for all forms of saving
  canSave(ignoreSimulation = false) {
    const isSelectingGlyph = GlyphSelection.active;
    const isSimulating = ui.$viewModel.modal.progressBar !== undefined && !ignoreSimulation;
    const isEnd = (GameEnd.endState >= END_STATE_MARKERS.SAVE_DISABLED && !GameEnd.removeAdditionalEnd) ||
      GameEnd.endState >= END_STATE_MARKERS.INTERACTIVITY_DISABLED;
    return !this.loading && !this.recovery && !isEnd && !(isSelectingGlyph || isSimulating);
  },

  save(silent = true, manual = false) {
    if (!this.canSave()) return false;
    const root = { current: this.currentSlot, saves: this.saves };
    if (!this.writeBatch(new Map([[this.localStorageKey, GameSaveSerializer.serialize(root)]]))) return false;
    this.lastSaveTime = Date.now();
    GameIntervals.save.restart();
    if (manual && ++this.saved > 99) SecretAchievement(12).unlock();
    if (!silent) GameUI.notify.info("游戏已存档");
    return true;
  },

  saveToBackup(backupSlot, backupTimer, source = player) {
    if (!this.loading && !this.canSave(true)) return false;
    if (!AutoBackupSlots.some(slot => slot.id === backupSlot) || !Number.isFinite(backupTimer) || backupTimer < 0) return false;
    const times = { ...this.lastBackupTimes, [backupSlot]: { backupTimer, date: Date.now() } };
    const entries = new Map([
      [this.backupDataKey(this.currentSlot, backupSlot), GameSaveSerializer.serialize(source)],
      [this.backupTimeKey(this.currentSlot), GameSaveSerializer.serialize(times)]
    ]);
    if (this.loading) {
      for (const [key, value] of entries) this.pendingWrites.set(key, value);
    } else if (!this.writeBatch(entries)) return false;
    this.lastBackupTimes = times;
    return true;
  },

  backupRaw(backupSlot) {
    try { return localStorage.getItem(this.backupDataKey(this.currentSlot, backupSlot)); }
    catch { return undefined; }
  },

  loadFromBackup(backupSlot) {
    const raw = this.backupRaw(backupSlot);
    if (!raw) return undefined;
    try { return preparePlayer(GameSaveSerializer.deserialize(raw)).player; }
    catch { return undefined; }
  },

  exportBackupRaw(backupSlot) {
    const raw = this.backupRaw(backupSlot);
    if (raw) download(`AD Backup ${backupSlot} (${this.exportDateString}).txt`, raw);
  },

  // Check for the amount of time spent offline and perform an immediate backup for the longest applicable slot
  // which has had more than its timer elapse since the last time the game was open and saved
  backupOfflineSlots() {
    const currentTime = Date.now();
    const offlineTimeMs = currentTime - this.lastUpdateOnLoad;
    const offlineSlots = AutoBackupSlots
      .filter(slot => slot.type === BACKUP_SLOT_TYPE.OFFLINE)
      .sort((a, b) => b.interval - a.interval);
    for (const backupInfo of offlineSlots) {
      if (offlineTimeMs > 1000 * backupInfo.interval) {
        this.saveToBackup(backupInfo.id, player.backupTimer);
        break;
      }
    }
  },

  backupOnlineSlots(slotsToBackup) {
    const currentTime = player.backupTimer;
    for (const slot of slotsToBackup) this.saveToBackup(slot, currentTime);
  },

  // Loads in all the data from previous backup times in localStorage
  validBackupTime(time) {
    return time && Number.isFinite(time.backupTimer) && time.backupTimer >= 0 && Number.isFinite(time.date) && time.date >= 0;
  },

  loadBackupTimes() {
    const raw = GameSaveSerializer.deserialize(localStorage.getItem(this.backupTimeKey(this.currentSlot)));
    this.lastBackupTimes = Object.fromEntries(AutoBackupSlots.map(({ id }) =>
      [id, this.validBackupTime(raw?.[id]) ? raw[id] : { backupTimer: 0, date: 0 }]));
  },

  // This is checked in the checkEverySecond game interval. Determining which slots to save has a 800ms grace time to
  // account for delays occurring from the saving operation itself; without this, the timer slips backwards by a second
  // every time it saves
  tryOnlineBackups() {
    if (this.storageFailure || this.loading || this.recovery) return;
    const toBackup = [];
    for (const backupInfo of AutoBackupSlots.filter(slot => slot.type === BACKUP_SLOT_TYPE.ONLINE)) {
      const id = backupInfo.id;
      const timeSinceLast = player.backupTimer - (this.lastBackupTimes[id]?.backupTimer ?? 0);
      if (1000 * backupInfo.interval - timeSinceLast <= 800) toBackup.push(id);
    }
    this.backupOnlineSlots(toBackup);
  },

  // Set the next backup time, but make sure to skip forward an appropriate amount if a load or import happened,
  // since these may cause the backup timer to be significantly behind
  resetBackupTimer() {
    const valid = value => Number.isFinite(value) && value >= 0 ? value : 0;
    const times = Object.values(this.lastBackupTimes).map(time => valid(time?.backupTimer));
    player.backupTimer = Math.max(valid(this.oldBackupTimer), valid(player.backupTimer), ...times);
  },

  // Saves the current game state to the first reserve slot it finds
  saveToReserveSlot() {
    const targetSlot = AutoBackupSlots.find(slot => slot.type === BACKUP_SLOT_TYPE.RESERVE).id;
    this.saveToBackup(targetSlot, player.backupTimer);
  },

  export() {
    copyToClipboard(this.exportModifiedSave());
    GameUI.notify.info("已将当前存档导出到剪贴板");
  },

  get exportDateString() {
    const dateObj = new Date();
    const y = dateObj.getFullYear();
    const m = dateObj.getMonth() + 1;
    const d = dateObj.getDate();
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}_${String(dateObj.getHours()).padStart(2, "0")}-${String(dateObj.getMinutes()).padStart(2, "0")}-${String(dateObj.getSeconds()).padStart(2, "0")}`;
  },

  exportAsFile() {
    if (!this.canSave()) return;
    player.options.exportedFileCount++;
    try { this.save(true); } catch { GameUI.notify.error("浏览器本地存储写入失败，仍将导出内存中的当前进度"); }
    const saveFileName = player.options.saveFileName ? ` - ${player.options.saveFileName},` : "";
    const save = this.exportModifiedSave();
    download(
      `AD Save, Slot ${GameStorage.currentSlot + 1}${saveFileName} #${player.options.exportedFileCount} \
(${this.exportDateString}).txt`, save);
    GameUI.notify.info("成功将文件下载到你的设备上");
  },

  exportBackupsAsFile() {
    player.options.exportedFileCount++;
    const backupData = {};
    for (const id of AutoBackupSlots.map(slot => slot.id)) {
      const backup = this.loadFromBackup(id);
      if (backup) backupData[id] = backup;
    }
    backupData.time = GameSaveSerializer.deserialize(localStorage.getItem(this.backupTimeKey(this.currentSlot)));
    download(
      `AD Save Backups, Slot ${GameStorage.currentSlot + 1} #${player.options.exportedFileCount} \
(${this.exportDateString}).txt`, GameSaveSerializer.serialize(backupData));
    GameUI.notify.info("存档备份文件已成功下载至你的电脑");
  },

  importBackupsFromFile(importText) {
    if (!this.canSave()) return false;
    try {
      const data = GameSaveSerializer.deserialize(importText);
      const ids = AutoBackupSlots.map(slot => String(slot.id));
      if (!data || typeof data !== "object" || Array.isArray(data) || !data.time || typeof data.time !== "object" || Array.isArray(data.time)) throw new Error();
      const keys = Object.keys(data).filter(key => key !== "time");
      if (!keys.length || keys.some(key => !ids.includes(key) || !this.validBackupTime(data.time[key])) ||
          Object.keys(data.time).some(key => !ids.includes(key) || !this.validBackupTime(data.time[key]))) throw new Error();
      const entries = new Map();
      const times = { ...this.lastBackupTimes };
      for (const key of keys) {
        preparePlayer(data[key]);
        entries.set(this.backupDataKey(this.currentSlot, Number(key)), GameSaveSerializer.serialize(data[key]));
        times[key] = { ...data.time[key] };
      }
      entries.set(this.backupTimeKey(this.currentSlot), GameSaveSerializer.serialize(times));
      if (!this.writeBatch(entries)) return false;
      this.lastBackupTimes = times;
      this.resetBackupTimer();
      GameUI.notify.info("存档备份文件已成功从文件导入。");
      return true;
    } catch {
      GameUI.notify.error("备份文件无效，现有存档和备份保持不变");
      return false;
    }
  },

  // There are a couple props which may need to export with different values, so we handle that here
  exportModifiedSave() {
    // Speedrun segmented is exported as true
    const segmented = player.speedrun.isSegmented;
    Speedrun.setSegmented(true);

    // Serialize the altered data, then restore the old prop values afterwards and return
    const save = GameSaveSerializer.serialize(player);
    Speedrun.setSegmented(segmented);
    return save;
  },

  hardReset() {
    if (this.recovery) {
      const root = this.recovery.root;
      return this.loadTransaction(Player.defaultStart, {
        slot: [0, 1, 2].includes(root?.current) ? root.current : this.currentSlot,
        saves: root?.saves && typeof root.saves === "object" && !Array.isArray(root.saves) ? root.saves : this.saves,
        offlineEnabled: false,
      });
    }
    this.loadPlayerObject(Player.defaultStart);
    this.save(true);
    Tab.dimensions.antimatter.show();
    Cloud.resetTempState();
  },

  loadPlayerObject(playerObject, prepared) {
    const candidate = prepared ?? preparePlayer(playerObject);
    YC.reset();
    this.saved = 0;
    player = candidate.player;

    this.saves[this.currentSlot] = player;
    this.lastUpdateOnLoad = player.lastUpdate;

    if (DEV) {
      guardFromNaNValues(player);
    }

    ui.view.news = player.options.news.enabled;
    ui.view.newUI = player.options.newUI;
    ui.view.tutorialState = player.tutorialState;
    ui.view.tutorialActive = player.tutorialActive;

    ECTimeStudyState.invalidateCachedRequirements();
    recalculateAllGlyphs();
    checkPerkValidity();
    V.updateTotalRunUnlocks();
    Enslaved.boostReality = false;
    GameEnd.additionalEnd = 0;
    Theme.set(Theme.currentName());
    Glyphs.unseen = [];
    Glyphs.unequipped = [];
    Notations.find(player.options.notation).setAsCurrent(true);
    ADNotations.Settings.exponentCommas.min = 10 ** player.options.notationDigits.comma;
    ADNotations.Settings.exponentCommas.max = 10 ** player.options.notationDigits.notation;

    EventHub.dispatch(GAME_EVENT.GAME_LOAD);
    AutomatorBackend.initializeFromSave();
    Lazy.invalidateAll();

    if (this.backupOnLoad && this.loading) this.backupOfflineSlots();
    this.backupOnLoad = false;

    let loading;
    const rawDiff = Date.now() - player.lastUpdate;
    // We set offlineEnabled externally on importing or loading a backup; otherwise this is just a local load
    const simulateOffline = this.offlineEnabled ?? player.options.offlineProgress;
    if (simulateOffline && !Speedrun.isPausedAtStart()) {
      let diff = rawDiff;
      player.speedrun.offlineTimeUsed += diff;
      if (diff > 5 * 60 * 1000 && player.celestials.enslaved.autoStoreReal) {
        diff = Enslaved.autoStoreRealTime(diff);
      }
      if (diff > 10000) {
        // The third parameter is a `fast` parameter that we use to only
        // simulate at most 50 ticks if the player was offline for less
        // than 50 seconds.
        loading = simulateTime(diff / 1000, false, diff < 50 * 1000);
      } else {
        // This is ugly, should fix how we deal with it...
        this.postLoadStuff();
      }
    } else {
      // Try to unlock "Don't you dare sleep" (usually this check only happens
      // during a game tick, which makes the achievement impossible to get
      // with offline progress off)
      if (!Speedrun.isPausedAtStart()) Achievement(35).tryUnlock();
      player.lastUpdate = Date.now();
      this.postLoadStuff();
    }

    // 2-week threshold for showing the catchup modal. We want to show this even if offline progress is disabled
    // because its presence and usefulness is tied to what the player experiences, not the game. setTimeout seems to be
    // the only way to get this to display, as it won't display even if called after init() entirely nor is it getting
    // actively hidden by Modal.hideAll(), so delaying it asynchronously gets past whatever is causing it to not appear.
    // Delay time is relatively long to make it more likely to work on much slower computers.
    this.pendingCatchup = rawDiff;
    if (!this.loading) this.showCatchup(rawDiff);
    return loading;
  },
  showCatchup(rawDiff) {
    if (!(rawDiff > 1000 * 86400 * 14)) return;
    const loadedPlayer = player;
    if (["S4", "S9"].includes(Theme.current().name)) Theme.set("Normal");
    setTimeout(() => {
      if (player === loadedPlayer && !this.loading && !this.recovery && Notations.current.isPainful) Notation.mixedScientific.setAsCurrent();
    }, 2500);
    setTimeout(() => {
      if (player === loadedPlayer && !this.loading && !this.recovery) Modal.catchup.show(rawDiff);
    }, 5000);
  },

  postLoadStuff() {
    if (this.loading || this.recovery) return;
    // This is called from simulateTime, if that's called; otherwise, it gets called
    // manually above
    GameIntervals.restart();
    GameStorage.ignoreBackupTimer = false;
    Enslaved.nextTickDiff = player.options.updateRate;
    // The condition for this secret achievement is only checked when the player is actively storing real time, either
    // when online or simulating time. When only storing offline, the condition is never actually entered in the
    // gameLoop due to the option technically being false, so we need to check it on-load too.
    if (player.celestials.enslaved.storedReal > (24 * 60 * 60 * 1000)) SecretAchievement(46).unlock();
    GameUI.update();

    for (const resource of AlchemyResources.all) {
      resource.before = resource.amount;
    }
  }
};

function download(filename, text) {
  const pom = document.createElement("a");
  pom.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`);
  pom.setAttribute("download", filename);

  if (document.createEvent) {
    const event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}
