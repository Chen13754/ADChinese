// Personal controls are runtime-only. Save encoding and wall clocks stay native.
const timer = (id, name, description, unlocked) => ({ id, name, description, unlocked });
export const YCTimers = [
  timer("gameTime", "游戏时间", "维度生产、复制器及按游戏时间成长的机制；保留挑战的固定速度限制。", () => true),
  timer("autobuyers", "自动购买间隔", "缩短已解锁自动购买器的检查间隔；最多每个原生游戏帧执行一次。", () => Autobuyers.unlocked.length > 0),
  timer("autoPrestige", "自动重置定时条件", "缩短自动无限、永恒、现实的时间模式等待；资源条件及确认规则照常。", () => [Autobuyer.bigCrunch, Autobuyer.eternity, Autobuyer.reality].some(a => a.isUnlocked)),
  timer("blackHole", "黑洞周期", "同时加快冷却与持续时间；不直接增加黑洞强度，暂停仍有效。", () => BlackHoles.areUnlocked),
  timer("automator", "自动机", "加快指令执行和 PAUSE 定时等待；条件等待仍需实际满足条件。", () => Player.automatorUnlocked),
  timer("autoEC", "永恒挑战自动完成", "加快已解锁的自动完成计时，保留挑战锁定条件。", () => Perk.autocompleteEC1.canBeApplied),
  timer("passivePrestige", "被动永恒点／现实机器", "加快已解锁的持续奖励，不进行手动重置或强制解锁。", () => TeresaUnlocks.epGen.canBeApplied || InfinityUpgrade.ipGen.isCharged || PelleRifts.chaos.milestones[2].canBeApplied),
  timer("imaginaryMachines", "虚数机器生成", "加快向当前虚数机器上限增长的过程；上限不变。", () => MachineHandler.isIMUnlocked),
  timer("uncountability", "不可数性收益", "加快炼金不可数性产生的现实次数与特权点。", () => AlchemyResource.uncountability.isUnlocked),
  timer("raMemory", "Ra记忆成长", "加快记忆块及记忆成长；真实时间储存期间的限制保留。", () => Ra.isUnlocked),
  timer("momentum", "炼金动量", "加快动量积累；原有成长上限保留。", () => AlchemyResource.momentum.isUnlocked),
  timer("darkMatter", "暗物质维度", "加快暗物质维度的周期与生成；购买和湮灭条件不变。", () => Laitela.isUnlocked),
  timer("storedReal", "真实时间储存", "加快无名氏的真实时间储存；效率、容量和暂停生产规则保留。", () => Enslaved.isUnlocked),
  timer("enslavedHints", "无名氏提示等待", "缩短已开放的提示等待。", () => Enslaved.canTickHintTimer),
  timer("laitelaEntropy", "莱特拉熵增长", "加快本次莱特拉现实中的熵增长。", () => Laitela.isRunning),
  timer("pelle", "佩勒碎片与裂隙", "加快现实碎片生成和裂隙填充；原有资源消耗及上限保留。", () => Pelle.isDoomed),
  timer("galaxyGenerator", "星系发生器", "加快生成、献祭及裂隙恢复；阶段上限保留。", () => Pelle.hasGalaxyGenerator),
];
export const YCResources = [
  { id: "antimatter", name: "反物质", unlocked: () => true },
  { id: "infinityPoints", name: "无限点", unlocked: () => PlayerProgress.infinityUnlocked() },
  { id: "eternityPoints", name: "永恒点", unlocked: () => PlayerProgress.eternityUnlocked() },
  { id: "timeTheorems", name: "时间定理", unlocked: () => PlayerProgress.eternityUnlocked() },
  { id: "realityMachines", name: "现实机器", unlocked: () => PlayerProgress.realityUnlocked() },
  { id: "perkPoints", name: "特权点", number: true, unlocked: () => PlayerProgress.realityUnlocked() },
];
export const YC = {
  online: false,
  warningAccepted: false,
  rates: Object.create(null),
  selectedRate(id) { return this.rates[id] ?? 1; },
  rate(id) { return this.online ? this.selectedRate(id) : 1; },
  time(id, milliseconds) { return milliseconds * this.rate(id); },
  setRate(id, value, enabled = true) {
    if (!YCTimers.some(t => t.id === id)) throw new Error("未知加速功能");
    const n = Number(value);
    if (!Number.isFinite(n) || n < 1 || n > 100) throw new Error("倍率必须在 1 到 100 之间");
    if (enabled && n !== 1) this.rates[id] = n;
    else delete this.rates[id];
  },
  reset() { this.rates = Object.create(null); },
  addResource(id, text) {
    const row = YCResources.find(r => r.id === id);
    if (!this.warningAccepted || !row?.unlocked()) throw new Error("请先确认风险，并解锁相应资源");
    if (!GameStorage.canSave()) throw new Error("请等待当前选择或离线计算结束后再修改资源");
    const raw = String(text).trim();
    if (!/^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i.test(raw)) throw new Error("请输入正整数，可以使用科学计数法，例如 1e100");
    const currency = Currency[id];
    if (row.number) {
      const amount = Number(raw), next = currency.value + amount;
      if (!Number.isSafeInteger(amount) || amount <= 0 || !Number.isSafeInteger(next) || next <= currency.value) {
        throw new Error("该资源必须是有效的安全整数，增量不能溢出");
      }
      currency.add(amount);
    } else {
      const amount = new Decimal(raw), next = currency.value.plus(amount);
      if (!Number.isFinite(amount.exponent) || !Number.isFinite(amount.mantissa) || !amount.gt(0) || !amount.eq(amount.floor()) ||
          !Number.isFinite(next.exponent) || !Number.isFinite(next.mantissa) || next.gt(Decimal.MAX_VALUE) || !next.gt(currency.value)) {
        throw new Error("增量无效、超出范围，或相对当前资源太小而无法生效");
      }
      if (id === "realityMachines" && !Decimal.min(next, MachineHandler.hardcapRM).gt(currency.value)) {
        throw new Error("现实机器已达原生上限，增量无法生效");
      }
      currency.add(amount);
    }
    GameUI.update();
  },
};
