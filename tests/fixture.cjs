module.exports = function fixture(stage) {
  GameIntervals.stop();
  GameStorage.offlineEnabled=false;
  let p=GameSaveSerializer.deserialize(GameSaveSerializer.serialize(Player.defaultStart));
  p.lastUpdate=Date.now();p.options.animations.reality=false;p.options.animations.bigCrunch=false;p.options.animations.eternity=false;Object.values(p.celestials).forEach(c=>{c.quoteBits=-1;});p.options.offlineProgress=false;p.options.news.enabled=false;p.options.confirmations.glyphSelection=false;
  if(stage!=='early'){
    p.infinities=new Decimal(1000);p.infinityPoints=new Decimal('1e100');p.antimatter=new Decimal('1e1000');p.records.totalAntimatter=new Decimal('1e1000');p.break=true;p.dimensionBoosts=10;p.galaxies=5;
    p.challenge.normal.completedBits=4095;p.challenge.infinity.completedBits=255;
    p.dimensions.antimatter.forEach(d=>{d.bought=20;d.amount=new Decimal('1e100');});
  }
  if(['eternity','reality','late','pelle'].includes(stage)){
    p.eternities=new Decimal(1e6);p.eternityPoints=new Decimal('1e1000');p.timestudy.theorem=new Decimal(1e5);p.dilation.studies=[1,2,3,4,5,6];p.replicanti.unl=true;
    p.dimensions.infinity.forEach(d=>{d.isUnlocked=true;d.bought=10;d.amount=new Decimal('1e100');});
  }
  if(['reality','late','pelle'].includes(stage)){
    p.realities=1000;p.reality.realityMachines=new Decimal('1e30');p.reality.perkPoints=100;p.reality.upgradeBits=(1<<26)-1;p.reality.perks=new Set([0]);p.blackHole[0].unlocked=true;
  }
  if(['late','pelle'].includes(stage)){
    p.achievementBits[13]=255;p.achievementBits[14]=255;p.reality.imaginaryUpgradeBits=(1<<26)-1;p.reality.iMCap=1e20;p.reality.imaginaryMachines=1e10;p.celestials.teresa.unlockBits=255;p.celestials.effarig.unlockBits=255;p.celestials.enslaved.completed=true;p.celestials.v.unlockBits=255;p.celestials.v.runUnlocks.fill(6);p.celestials.ra.unlockBits=2147483647;
    Object.values(p.celestials.ra.pets).forEach(pet=>{pet.level=25;pet.memoryChunks=100;});p.celestials.laitela.dimensions[0].amount=new Decimal(1);
  }
  if(stage==='pelle'){p.celestials.pelle.doomed=true;p.celestials.pelle.remnants=1e5;p.celestials.pelle.realityShards=new Decimal('1e10');p.celestials.pelle.progressBits=31;p.celestials.pelle.galaxyGenerator.unlocked=true;}
  GameStorage.loadPlayerObject(p);GameIntervals.stop();Modal.hideAll();Quote.clearAll();Tab.dimensions.antimatter.show(true);GameUI.update();
};
