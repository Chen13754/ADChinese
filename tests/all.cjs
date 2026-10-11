const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const suites = ['check', 'browser', 'timers', 'interactions', 'regressions', 'compatibility', 'runtime', 'flows', 'survey'];
const results = [];
for (const suite of suites) {
  const started = Date.now();
  execFileSync(process.execPath, [`tests/${suite}.cjs`], { stdio: 'inherit' });
  results.push({ suite, passed: true, durationMs: Date.now() - started });
}
fs.writeFileSync('test-results/acceptance.json', JSON.stringify({ revision: '2026-10-11-fix8', results }, null, 2));
console.log('All nine local acceptance suites passed.');
