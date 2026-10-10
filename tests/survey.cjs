process.env.PLAYWRIGHT_BROWSERS_PATH=require('path').resolve('.cache/browsers');process.env.TEMP=process.env.TMP=require('path').resolve('.cache/browser-temp');
const fs=require('fs'),assert=require('node:assert/strict');const {chromium}=require('playwright-core');const fixture=require('./fixture.cjs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844}});const errors=[];p.on('pageerror',e=>errors.push(e.stack));await p.goto('http://127.0.0.1:4173');await p.waitForFunction(()=>window.ui?.view?.initialized);await p.waitForTimeout(2500);await p.evaluate(()=>{GameIntervals.stop();GameIntervals.gameLoop.start=()=>{};});const results=[];
const widths=process.env.YC_WIDTH ? [Number(process.env.YC_WIDTH)] : [360,390,430,768,1440];
for(const width of widths)for(const modern of [true,false]){
 await p.setViewportSize({width,height:width===768?1024:900});
 for(const stage of ['early','infinity','eternity','reality','late','pelle']){
  await p.evaluate(fixture,stage);await p.evaluate(m=>{if(player.options.newUI!==m)GameOptions.toggleUI();Quote.clearAll();GameUI.update();},modern);await p.waitForTimeout(100);
  const tabs=await p.evaluate(()=>Tabs.all.filter(t=>t.isAvailable).flatMap(t=>t.subtabs.filter(s=>s.isAvailable).map(s=>[t.key,s.key])));
  for(const [tab,sub] of tabs){if(tab==='shop')continue;await p.evaluate(([t,s])=>{Quote.clearAll();Tab[t][s].show(true);GameUI.update();},[tab,sub]);await p.waitForTimeout(60);await p.evaluate(()=>{Quote.clearAll();GameIntervals.stop();GameUI.update();});await p.waitForTimeout(40);
   const r=await p.evaluate(()=>{const page=document.querySelector('.c-game-tab')||document.body;return{actual:ui.view.tab+'/'+ui.view.subtab,body:document.documentElement.scrollWidth,ui:document.querySelector('.c-game-ui').scrollWidth,width:innerWidth,overflow:[...page.querySelectorAll('*')].filter(e=>{let r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+2||r.left< -2)&&getComputedStyle(e).position!=='absolute'&&!e.closest('.yc-tree-viewport,.vis-network');}).slice(0,5).map(e=>e.className)}});results.push({stage,tab,sub,modern,...r});
   if((stage==='early'&&sub==='antimatter')||(stage==='late'&&['studies','perks','laitela','glyphs'].includes(sub))||(stage==='pelle'&&sub==='pelle'))await p.screenshot({path:`test-results/${stage}-${sub}-${width}-${modern?'modern':'classic'}.png`});
  }
 }
 console.log(`Checked ${width}px ${modern?'modern':'classic'}`);
}
const overflow=results.filter(r=>r.body>r.width+2||r.ui>r.width+2);fs.writeFileSync('test-results/layout-survey.json',JSON.stringify({results,errors,overflow},null,2));console.log(JSON.stringify({count:results.length,overflow,errors},null,2));await b.close();assert.deepEqual(errors,[]);assert.deepEqual(overflow,[],'Page overflow');assert.ok(results.every(r=>r.actual===r.tab+'/'+r.sub),'Requested tabs rendered');})().catch(e=>{console.error(e);process.exit(1);});
