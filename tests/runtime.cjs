const fs=require('fs'),path=require('path');
process.env.PLAYWRIGHT_BROWSERS_PATH=path.resolve('.cache/browsers');process.env.TEMP=process.env.TMP=path.resolve('.cache/browser-temp');
const {chromium}=require('playwright-core'),fixture=require('./fixture.cjs');
(async()=>{
 const b=await chromium.launch();const out={runtime:[],imports:[],backup:[],startup:[]};
 async function fresh(){const c=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const p=await c.newPage();p.auditErrors=[];p.on('pageerror',e=>p.auditErrors.push(e.message));p.on('console',m=>{if(m.type()==='error')p.auditErrors.push(m.text().slice(0,400));});await p.goto('http://127.0.0.1:4173');await p.waitForFunction(()=>window.ui?.view?.initialized);await p.waitForTimeout(150);await p.evaluate(()=>GameIntervals.stop());return p;}
 let p=await fresh();
 for(const stage of ['early','infinity','eternity','reality','late','pelle'])for(const mode of ['normal','all100']){
  await p.evaluate(fixture,stage);p.auditErrors.length=0;
  const result=await p.evaluate(mode=>{const errors=[];if(mode==='all100')for(const t of YCTimers.filter(t=>t.unlocked()))YC.setRate(t.id,100);const now=Date.now;let clock=now();try{Date.now=()=>clock;for(let n=0;n<1200;n++){clock+=50;try{gameLoop();}catch(e){errors.push(e.stack);break;}}}finally{Date.now=now;GameIntervals.stop();}const invalid=[];function scan(o,k){if(!o||typeof o!=='object')return;for(const [x,v]of Object.entries(o)){if(typeof v==='number'&&Number.isNaN(v)||v instanceof Decimal&&(!Number.isFinite(v.mantissa)||!Number.isFinite(v.exponent)))invalid.push(k+'.'+x);else if(v&&typeof v==='object')scan(v,k+'.'+x);}}scan(player,'player');GameUI.update();return{errors,invalid,AM:String(player.antimatter),canSave:GameStorage.canSave(),saveCheck:GameStorage.checkPlayerObject(player),rates:{...YC.rates}};},mode);
  await p.waitForTimeout(80);out.runtime.push({stage,mode,...result,browserErrors:p.auditErrors.slice()});
 }
 await p.context().close();
 await b.close();
 const assert=require('node:assert/strict');
 assert.deepEqual(out.runtime.filter(r=>r.errors.length||r.invalid.length||r.browserErrors.length||r.saveCheck),[]);
 fs.writeFileSync('test-results/runtime-report.json',JSON.stringify(out,null,2));
 console.log('Six stages × normal/all100 × 1200 native ticks passed; resulting saves valid');
})().catch(e=>{console.error(e);process.exit(1);});
