const fs=require('fs'),path=require('path');process.env.PLAYWRIGHT_BROWSERS_PATH=path.resolve('.cache/browsers');process.env.TEMP=process.env.TMP=path.resolve('.cache/browser-temp');
const {chromium}=require('playwright-core'),fixture=require('./fixture.cjs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});const events=[];p.on('pageerror',e=>events.push(e.stack));p.on('console',m=>{if(m.type()==='error')events.push(m.text());});await p.goto('http://127.0.0.1:4173');await p.waitForFunction(()=>window.GameUI?.initialized);await p.waitForTimeout(600);await p.evaluate(()=>{GameIntervals.stop();GameIntervals.gameLoop.start=()=>{};});const out={flows:[],modals:[]};
 for(const name of ['boost','galaxy','crunch','eternity','reality','newGame',...Array.from({length:11},(_,i)=>'NC'+(i+2)),...Array.from({length:8},(_,i)=>'IC'+(i+1)),...Array.from({length:12},(_,i)=>'EC'+(i+1)),...['Teresa','Effarig','Enslaved','V','Ra','Laitela'].map(n=>'CEL'+n)]){
 await p.evaluate(fixture,name==='newGame'?'pelle':'late');events.length=0;
 const result=await p.evaluate(name=>{player.auto.autobuyersOn=false;let detail={},error;try{
 if(name==='boost'){const before=player.dimensionBoosts;requestDimensionBoost(true);detail={before,after:player.dimensionBoosts};}
 else if(name==='galaxy'){const before=player.galaxies;requestGalaxyReset(true);detail={before,after:player.galaxies};}
 else if(name==='crunch'){Currency.antimatter.value=new Decimal('1e400');const before=String(player.infinities);bigCrunchResetRequest(true);detail={before,after:String(player.infinities)};}
 else if(name==='eternity'){Currency.infinityPoints.value=new Decimal('1e400');const before=String(player.eternities);detail={result:eternity(false,false),before,after:String(player.eternities)};}
 else if(name==='reality'){Currency.eternityPoints.value=new Decimal('1e5000');const before=player.realities;autoReality();detail={before,after:player.realities};}
 else if(name==='newGame'){NG.startNewGame();detail={completions:player.records.fullGameCompletions,realities:player.realities};}
 else if(name.startsWith('NC')){player.challenge.normal.completedBits=0;const c=NormalChallenge(Number(name.slice(2)));c.start();const running=c.isRunning;Currency.antimatter.value=c.goal;bigCrunchResetRequest(true);detail={running,completed:c.isCompleted};c.exit();}
 else if(name.startsWith('IC')){player.challenge.infinity.completedBits=0;player.records.thisEternity.maxAM=new Decimal('1e30000');const c=InfinityChallenge(Number(name.slice(2)));c.start();const running=c.isRunning;Currency.antimatter.value=c.goal;bigCrunchResetRequest(true);detail={running,completed:c.isCompleted};c.exit();}
 else if(name.startsWith('EC')){const id=Number(name.slice(2)),c=EternityChallenge(id);player.challenge.eternity.unlocked=id;const started=c.start(false);Currency.infinityPoints.value=c.currentGoal;detail={started,result:eternity(false,false),completions:c.completions};c.exit(false);}
 else if(name.startsWith('CEL')){beginProcessReality(getRealityProps(true));const c=window[name.slice(3)];c.initializeRun();detail={running:c.isRunning};gameLoop(50);beginProcessReality(getRealityProps(true));detail.afterExit=c.isRunning;}
 GameIntervals.stop();Modal.hideAll();Quote.clearAll();gameLoop(50);GameUI.update();}catch(e){error=e.stack;}return{detail,error,saveCheck:GameStorage.checkPlayerObject(player)};},name);await p.waitForTimeout(100);out.flows.push({name,...result,errors:events.slice()});
 }
 fs.writeFileSync('test-results/flows-report.json',JSON.stringify(out,null,2));
 const assert=require('node:assert/strict');
 await b.close();
 assert.deepEqual(out.flows.filter(r=>r.error||r.errors.length),[]);
 for(const r of out.flows){
  if(['boost','galaxy','crunch','eternity','reality'].includes(r.name)) assert.ok(Number(r.detail.after)>Number(r.detail.before),r.name);
  else if(r.name==='newGame') assert.ok(r.detail.completions>0&&r.detail.realities===0,r.name);
  else if(r.name.startsWith('CEL')) assert.ok(r.detail.running&&!r.detail.afterExit,r.name);
  else if(r.name.startsWith('EC')) assert.ok(r.detail.completions>0,r.name);
  else assert.ok(r.detail.running&&r.detail.completed,r.name);
  assert.equal(r.saveCheck,'',r.name+' resulting save is valid');
 }
 console.log(out.flows.length+' native reset/challenge/celestial flows passed with valid resulting saves');
})().catch(e=>{console.error(e);process.exit(1);});
