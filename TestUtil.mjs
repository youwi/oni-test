import { readFileSync ,writeFileSync} from "fs" ;
import {
    parseSaveGame,
    writeSaveGame,
    AIAttributeLevelsBehavior,getBehavior,
     
} from  "oni-save-parser" ;

import {encode} from "bmp-js"

export function loadFile(fileName) {
  const fileData = readFileSync(`./${fileName}.sav`);
  return parseSaveGame(fileData.buffer,{versionStrictness:"none"});
}

export function saveFile(fileName, save) {
  const fileData = writeSaveGame(save);
  writeFileSync(`./${fileName}.sav`, new Uint8Array(fileData));
}

/**
 * GridVisible   可见的
 * GridSpawnable  生成的元素
 * GridDamage    可挖的
 * Camera  镜头
 */

 export function buildBMP(fileName){
  const saveData = loadFile(fileName);

  saveData.world.streamed;
  var width=saveData.world.WidthInCells;
  var height=saveData.world.HeightInCells;
   

  writeFileSync(`${fileName}-dump-GridVisible.bmp`,encode({data: Buffer.from(saveData.world.streamed[0][1]),width,height}).data);

  writeFileSync(`${fileName}-dump-GridSpawnable.bmp`,encode({data: Buffer.from(saveData.world.streamed[1][1]),width,height}).data);
  
  writeFileSync(`${fileName}-dump-GridDamage.bmp`,encode({data: Buffer.from(saveData.world.streamed[2][1]),width,height}).data);
  
}