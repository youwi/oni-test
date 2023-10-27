//修改冰霜种子
// ColdWheatSeed

import { loadFile,saveFile } from "./TestUtil.mjs";

var fileName="实验室A-改世界大小10delete4"
const saveData = loadFile(fileName);
 

const ass=saveData.gameObjects.find(x=>x.name==="Asteroid");//  
for(const seed of ass.gameObjects){
    const asskey=seed.behaviors.find(x=>x.name=== "AsteroidGridEntity")  //找名字
    console.log(  asskey.templateData.m_name )
}
 
console.log("完成")



 