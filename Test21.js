


const { readFileSync ,writeFileSync} = require("fs");
const {
    parseSaveGame,
    writeSaveGame,
    AIAttributeLevelsBehavior,getBehavior,
     
} = require("oni-save-parser");

var fileName="堡垒"; //存档名。  脚本和存档放在一个目录
function loadFile(fileName) {
  const fileData = readFileSync(`./${fileName}.sav`);
  return parseSaveGame(fileData.buffer,{versionStrictness:"none"});
}

function saveFile(fileName, save) {
  const fileData = writeSaveGame(save);
  writeFileSync(`./${fileName}.sav`, new Uint8Array(fileData));
}

const saveData = loadFile(fileName);

saveData.world.streamed;
var width=saveData.world.WidthInCells;
var height=saveData.world.HeightInCells;
 
var data=saveData.world.streamed[1][1];// 
 


var coder = require("bmp-js");

var rawData = coder.encode({data: Buffer.from(data),width,height})
writeFileSync("dump.bmp",rawData.data);


var dsList=chunk(data,width);
var ddList=[];
for(var line of dsList){
    for(var cc of line){
        ddList.push(cc)
    }
}

 
writeFileSync("dump.txt",new Uint8Array(ddList));


console.log("完成")

function chunk(arr, size) {
    var objArr = new Array();
    var index = 0;
    var objArrLen = arr.length/size;
    for(var i=0;i<objArrLen;i++){
      var arrTemp = new Array();
      for(var j=0;j<size;j++){
          arrTemp[j] = arr[index++];
          if(index==arr.length){
              break;
          }
      }
      arrTemp[size]="\n";
      objArr[i] = arrTemp;
    }
    return objArr;
  }

 