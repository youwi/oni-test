//修改冰霜种子
// ColdWheatSeed
const { readFileSync ,writeFileSync} = require("fs");
const {
    parseSaveGame,
    writeSaveGame,
    AIAttributeLevelsBehavior,getBehavior,
     
} = require("oni-save-parser");

var fileName="不做冷却管"; //存档名。  脚本和存档放在一个目录
function loadFile(fileName) {
  const fileData = readFileSync(`./${fileName}.sav`);
  return parseSaveGame(fileData.buffer,{versionStrictness:"none"});
}

function saveFile(fileName, save) {
  const fileData = writeSaveGame(save);
  writeFileSync(`./${fileName}.sav`, new Uint8Array(fileData));
}

const saveData = loadFile(fileName);
 
 
const seeds2=saveData.gameObjects.find(x=>x.name==="ColdWheatSeed");// 冰霜种子.
for(const seed of seeds2.gameObjects){
    const mutantKey=seed.behaviors.find(x=>x.name=== "MutantPlant")  //找变异属性
    mutantKey.templateData.mutationIDs=['rottenHeaps'] ;//添加旺盛属性
}
 
 
 
saveFile(`${fileName}-ColdWheatSeed`, saveData);
console.log("完成")



 