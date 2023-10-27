//修改冰霜种子
// ColdWheatSeed

import { loadFile,saveFile } from "./TestUtil.mjs";

var fileName="实验室A-改世界大小10delete4"
const saveData = loadFile(fileName);
 

const ass=saveData.gameObjects.find(x=>x.name==="Asteroid");//  
for(let i=0;i<ass.gameObjects.length;i++){
     
    const seed=ass.gameObjects[i];
    const name=seed.behaviors.find(x=>x.name=="AsteroidGridEntity").templateData.m_name;
    if(name==="delete"){
        //删除
        ass.gameObjects.splice(i,1);
        console.log( "删除了" )
    }else{
        console.log( name )
    }
    i--;
}
saveFile("删除asteroid.sav");
console.log("完成")



 