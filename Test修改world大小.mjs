//修改冰霜种子
// ColdWheatSeed

import { loadFile,saveFile } from "./TestUtil.mjs";

var fileName="min100x100" 
const saveData = loadFile(fileName);
 

/**
 * 修改大小以后加载会崩溃
 * 原大小为 136* 216  //29375
 * 
 * 一 先找到崩溃 没有日志
 *  
 */

saveData.world.WidthInCells;
saveData.world.HeightInCells;
const ass=saveData.gameObjects.find(x=>x.name==="Asteroid");//  
for(let i=0;i<ass.gameObjects.length;i++){

}

const cells=saveData.gameData.worldDetail.overworldCells;

console.log("预计长度为68:实际"+cells.length)

cells.length=20;//强制修改为20个长度; // 经过测试背景区可以随便删除,不影响游戏

/**
 *
 *
GridVisible
GridSpawnable
GridDamage
Camera
 */
console.log( saveData.world.streamed[0][0])
console.log( saveData.world.streamed[1][0])
console.log( saveData.world.streamed[2][0])
console.log( saveData.world.streamed[3][0])

 
const setCount=16
const maxCount=(saveData.world.WidthInCells-setCount)*saveData.world.HeightInCells;
saveData.world.WidthInCells=saveData.world.WidthInCells-setCount;
//saveData.world.WidthInCells=200 ;// 修改小会ben,修改大也会崩溃

for(var stt of saveData.world.streamed){
// 这是数据结构:["Camera",{"0":252,"1":111,"2":......
    var key=stt[0];
    var value=stt[1];
   
   // var length=value.length;
    if(value.length>maxCount){
        var newUnit=value.subarray(0,maxCount);
        stt[1]=newUnit
    }
   
    //var intKeys= Object.keys(value);

    // for(var sKey of intKeys){
       
    //     var idCount=Number(sKey);
       
    //     if(idCount>maxCount){
    //         value.length=maxCount;
    //         var newUnit=value.subarray(0,maxCount);
    //         console.log("调用:"+value[sKey],sKey,key)
    //        // delete value[sKey+""]
    //     }
    // }
}
var sa=JSON.stringify( saveData.world.streamed[1]);
console.log(sa)




saveFile("min100x100改200",saveData);
console.log("完成")



 