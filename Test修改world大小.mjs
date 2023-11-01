//修改冰霜种子
// ColdWheatSeed

import { loadFile,saveFile } from "./TestUtil.mjs";

var fileName="min100x100" 
const saveData = loadFile(fileName);
 

/**
 * 修改大小以后加载会崩溃
 * 原大小为 136* 216 
 */

saveData.world.WidthInCells;
saveData.world.HeightInCells;
const ass=saveData.gameObjects.find(x=>x.name==="Asteroid");//  
for(let i=0;i<ass.gameObjects.length;i++){
     
     
     
}
const cells=saveData.gameData.worldDetail.overworldCells;

console.log("预计长度为68:实际"+cells.length)
saveFile("min100x100改200",saveData);
console.log("完成")



 