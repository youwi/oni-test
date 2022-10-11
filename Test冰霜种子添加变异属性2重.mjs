//修改冰霜种子
// ColdWheatSeed

import { loadFile,saveFile } from "./TestUtil.mjs";

var fileName="土坯"
const saveData = loadFile(fileName);
 

const seeds2=saveData.gameObjects.find(x=>x.name==="ColdWheat");// 冰霜种子.
for(const seed of seeds2.gameObjects){
    const mutantKey=seed.behaviors.find(x=>x.name=== "MutantPlant")  //找变异属性
    mutantKey.templateData.mutationIDs=['rottenHeaps','heavyFruit'] ;//添加旺盛属性
}
 
saveFile(`${fileName}-ColdWheatSeed`, saveData);
console.log("完成")



 