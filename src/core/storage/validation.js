import { deepmergeAll } from "../../utility/deepmerge.js";
import { migrations } from "./migrations.js";
import { devMigrations } from "./dev-migrations.js";
import { DEV } from "../../env.js";

const object = value => value !== null && typeof value === "object" && !Array.isArray(value) && !(value instanceof Set) && !(value instanceof Decimal);
const fail = path => { throw new Error(`存档的 ${path} 数据损坏`); };

// Validate supplied fields before deepmerge can coerce malformed strings or object types.
function shape(value, sample, path, partial) {
  if (value === undefined && partial) return;
  if (path === "reality.automator.state.mode") {
    if (value !== undefined && ![1, 2, 3].includes(value)) fail(path);
    return;
  }
  if (path === "IAP.checkoutSession.id") {
    if (typeof value !== "boolean" && typeof value !== "string") fail(path);
    return;
  }
  if (sample instanceof Decimal) {
    if (!(value instanceof Decimal) && typeof value !== "number" && typeof value !== "string") fail(path);
    if (typeof value === "string" && !/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/iu.test(value)) fail(path);
    const decimal = new Decimal(value);
    if (!Number.isFinite(decimal.mantissa) || !Number.isFinite(decimal.exponent)) fail(path);
  } else if (sample instanceof Set) {
    if (!Array.isArray(value) && !(value instanceof Set)) fail(path);
    for (const entry of value) if (!["string", "number"].includes(typeof entry) || (typeof entry === "number" && !Number.isFinite(entry))) fail(path);
  } else if (Array.isArray(sample)) {
    if (!Array.isArray(value)) fail(path);
    const realityRecord = /^records\.recentRealities\[\d+\]$/u.test(path);
    const scores = /^reality\.glyphs\.filter\.types\.[^.]+\.effectScores$/u.test(path);
    const bits = path === "achievementBits" || path === "secretAchievementBits";
    const maxBits = bits ? Math.max(...GameDatabase.achievements[path === "achievementBits" ? "normal" : "secret"].map(entry => Math.floor(entry.id / 10))) : 0;
    if (realityRecord ? ![7, 8].includes(value.length) : bits ? value.length > maxBits : scores ? value.length > sample.length : sample.length && value.length !== sample.length) fail(path);
    value.forEach((entry, i) => { if (sample.length) shape(entry, sample[i] ?? sample[0], `${path}[${i}]`, partial); });
  } else if (object(sample)) {
    if (!object(value)) fail(path);
    for (const key of Object.keys(sample)) shape(value[key], sample[key], `${path ? path + "." : ""}${key}`, partial);
  } else if (typeof sample === "number") {
    // Native record sentinels may be Infinity; resources and clocks may not.
    if ((value === "Infinity" || value === Infinity) && /^records\.(?:best(?:Infinity|Eternity|Reality)\.(?:time|realTime)|recent(?:Infinities|Eternities|Realities)\[\d+\]\[[01]\])$/u.test(path)) return;
    if (typeof value !== "number" || !Number.isFinite(value)) fail(path);
  } else if (typeof value !== typeof sample) fail(path);
}

function safeTree(value, path = "player") {
  if (value instanceof Decimal || value instanceof Set) return;
  if (typeof value === "number" && Number.isNaN(value)) fail(path);
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) {
      if (["__proto__", "prototype", "constructor"].includes(key)) fail(path);
      safeTree(value[key], `${path}.${key}`);
    }
  }
}

function glyphs(list, path) {
  if (!Array.isArray(list)) fail(path);
  for (const glyph of list) {
    if (!object(glyph) || !GlyphTypes.list.some(type => type.id === glyph.type)) fail(path);
    for (const key of ["level", "strength", "effects"]) if (!Number.isFinite(glyph[key]) || glyph[key] < 0) fail(`${path}.${key}`);
    if (!Number.isInteger(glyph.effects)) fail(`${path}.effects`);
  }
}

function collections(p) {
  for (const key of ["active", "inventory"]) {
    const list = p.reality.glyphs[key];
    glyphs(list, `reality.glyphs.${key}`);
    const indices = new Set();
    for (const glyph of list) {
      if (!Number.isInteger(glyph.idx) || glyph.idx < 0 || indices.has(glyph.idx)) fail(`reality.glyphs.${key}.idx`);
      indices.add(glyph.idx);
    }
  }
  for (const set of p.reality.glyphs.sets) glyphs(set.glyphs, "reality.glyphs.sets");
  for (const list of p.celestials.v.runGlyphs) glyphs(list, "celestials.v.runGlyphs");
  for (const [key, value] of Object.entries(p.records.bestReality)) if (key.endsWith("Set")) glyphs(value, `records.bestReality.${key}`);
  glyphs(p.celestials.teresa.bestAMSet, "celestials.teresa.bestAMSet");
  for (const [key, script] of Object.entries(p.reality.automator.scripts)) {
    if (!/^\d+$/u.test(key) || !object(script) || script.id !== Number(key) || typeof script.name !== "string" || typeof script.content !== "string") fail("reality.automator.scripts");
  }
  for (const value of Object.values(p.reality.automator.constants)) if (typeof value !== "string") fail("reality.automator.constants");
  for (const entry of p.reality.automator.state.stack) {
    if (!object(entry) || !Number.isInteger(entry.lineNumber) || entry.lineNumber < 1 || !(entry.commandState === null || object(entry.commandState))) fail("reality.automator.state.stack");
  }
  for (const key of ["studies"]) if (p.timestudy[key].some(id => !Number.isInteger(id))) fail(`timestudy.${key}`);
  for (const key of ["infinityUpgrades", "eternityUpgrades", "dilation.upgrades", "reality.perks", "celestials.ra.charged", "celestials.pelle.upgrades", "tabNotifications"]) {
    const set = key.split(".").reduce((v, k) => v[k], p);
    const numeric = !["infinityUpgrades", "tabNotifications"].includes(key);
    if ([...set].some(id => numeric ? !Number.isInteger(id) : typeof id !== "string")) fail(key);
  }
  p.celestials.v.runUnlocks.forEach((count, i) => {
    if (!Number.isInteger(count) || count < 0 || count > GameDatabase.celestials.v.runUnlocks[i].values.length) fail("celestials.v.runUnlocks");
  });
  if (!Number.isInteger(p.reality.seed) || p.reality.seed === 0) fail("reality.seed");
  if (p.options.updateRate < 1 || p.options.autosaveInterval < 1000 || p.options.offlineTicks < 1 || p.options.offlineTicks > 1e6) fail("options.计时设置");
  for (const [value, max] of [[p.challenge.normal.current, 12], [p.challenge.infinity.current, 8], [p.challenge.eternity.current, 12], [p.challenge.eternity.unlocked, 12]]) {
    if (!Number.isInteger(value) || value < 0 || value > max) fail("challenge");
  }
  for (const key of ["antimatter", "infinityPoints", "eternityPoints", "infinities", "eternities"]) if (p[key].lt(0)) fail(key);
  if (p.lastUpdate < 0 || p.backupTimer < 0) fail("时间");
}

export function preparePlayer(save) {
  const fresh = save === Player.defaultStart;
  if (!object(save)) fail("根对象");
  safeTree(save);
  const latest = Math.max(Player.defaultStart.version, ...Object.keys(migrations.patches).map(Number));
  if (save.version !== undefined && (!Number.isFinite(save.version) || save.version > latest)) throw new Error("该存档来自不支持的游戏版本");
  if (!fresh && save.money === undefined && save.antimatter === undefined) fail("antimatter");
  // Historical versions have different shapes; validate their native migration result.
  if ((save.version ?? 0) >= latest) shape(save, Player.defaultStart, "", true);
  const copy = deepmergeAll([{}, save]);
  const previousVersion = !fresh && (copy.version ?? 0) < migrations.firstRealityMigration;
  let candidate;
  if (fresh) {
    candidate = copy;
    candidate.records.gameCreatedTime = Date.now();
    candidate.lastUpdate = Date.now();
    if (DEV) devMigrations.setLatestTestVersion(candidate);
  } else {
    candidate = migrations.patchPreReality(copy);
    if (previousVersion && DEV) devMigrations.setLatestTestVersion(candidate);
    if (DEV && candidate.options.testVersion !== undefined) devMigrations.patch(candidate);
    candidate = migrations.patchPostReality(candidate);
  }
  shape(candidate, Player.defaultStart, "", false);
  collections(candidate);
  return { player: candidate, previousVersion };
}
