const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const suites = ['check', 'browser', 'resources', 'timers', 'interactions', 'regressions', 'compatibility', 'runtime', 'flows', 'survey'];
const results = [];
for (const suite of suites) {
  const started = Date.now();
  execFileSync(process.execPath, [`tests/${suite}.cjs`], { stdio: 'inherit' });
  results.push({ suite, passed: true, durationMs: Date.now() - started });
}
fs.writeFileSync('test-results/acceptance.json', JSON.stringify({ revision: JSON.parse(fs.readFileSync('version.txt')).ycRevision, results }, null, 2));
console.log('All ten local acceptance suites passed.');
