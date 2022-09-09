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

// Make all duplicants half-sized
const minions = saveData.gameObjects.find(x => x.name === "Minion");
for (const minion of minions.gameObjects) {
  minion.scale.x = 0.5;// 缩小复制人
  minion.scale.y = 0.5;// 缩小复制人
}
for (const minion of minions.gameObjects) {
    const skillBehavior = getBehavior(minion, AIAttributeLevelsBehavior);
    // 所有属性200
    for (const attribute of skillBehavior.templateData.saveLoadLevels) {
      attribute.level = 200
    }
  }

const seeds=saveData.gameObjects.find(x=>x.name==="MushroomSeed");
for(const seed of seeds.gameObjects){
    const mutantKey=  seed.behaviors.find(x=>x.name==="MutantPlant"); //找变异属性
       console.log(   mutantKey) // 调试查看代码结构
}

const seeds2=saveData.gameObjects.find(x=>x.name==="ForestTreeSeed");
for(const seed of seeds2.gameObjects){
    const mutantKey=seed.behaviors.find(x=>x.name=== "MutantPlant")  //找变异属性
   
        mutantKey.templateData.mutationIDs=['rottenHeaps'] ;//添加旺盛属性
    
}

const cellList=saveData.gameData.worldDetail.overworldCells;
const repObj={
    FrozenWastes: 1,
    Ocean: 1, //海洋背景
    ToxicJungle: 1,
    BoggyMarsh: 1,
    Sandstone: 1,
    Wasteland: 1,
    OilField: 1,
    Barren: 1,
    MagmaCore: 1,
    Radioactive: 1,
  // Space: 1,  //太空背景载
    Rust: 1,  //
    Swamp: 1,
    Forest: 1,
    Moo: 1,
  //  RocketInterior: 1,//火箭背景....
  }
const repString="Space";
var keyHashObj={}
for(const nameKey of cellList){
    const tags=nameKey.tags.tags;
    var key=  tags[tags.length-1].name;
    keyHashObj[key]=1;
}
console.log(keyHashObj);

for(const nameKey of cellList){
    const tags=nameKey.tags.tags;
    var lastTag=tags[tags.length-1];

    if(repObj[lastTag.name]===1){
        lastTag.name="Space"; //替换所有匹配的背景
    }
}
 
saveFile(`${fileName}-tweaked`, saveData);
console.log("完成")



 