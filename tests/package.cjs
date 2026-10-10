const fs=require('fs'),path=require('path');
const root=path.resolve(__dirname,'..'),destination=path.join(root,'dist');
if(path.dirname(destination)!==root||path.basename(destination)!=='dist')throw Error('Invalid package path');
fs.rmSync(destination,{recursive:true,force:true});fs.mkdirSync(destination,{recursive:true});
for(const name of ['index.html','src','modules','public','LICENSE','MOD-LICENSE','version.txt','changelog.json']){if(fs.existsSync(path.join(root,name)))fs.cpSync(path.join(root,name),path.join(destination,name),{recursive:true});}
fs.writeFileSync(path.join(destination,'.nojekyll'),'');console.log('Static Pages package: dist (site allowlist only)');
