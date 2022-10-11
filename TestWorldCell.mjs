//全图搞图测试
import { loadFile,saveFile ,buildBMP} from "./TestUtil.mjs";
import { readFileSync ,writeFileSync}  from "fs" ;
import { Console } from "console";
 

var fileName="不做冷却管-ga"
const saveData = loadFile(fileName);
 
saveData.world.streamed;
var width=saveData.world.WidthInCells;
var height=saveData.world.HeightInCells;
 
for(var arrFa of saveData.gameData.worldDetail.overworldCells){
    console.log(arrFa.poly.vertices)
    for(var xy of arrFa.poly.vertices){
        console.log(    `new Vector2(${xy.x}f, ${xy.y}f),`)
    }
    break;
}
 
console.log("完成")

