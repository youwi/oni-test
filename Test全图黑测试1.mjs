//全图搞图测试
import { loadFile,saveFile ,buildBMP} from "./TestUtil.mjs";
import { readFileSync ,writeFileSync}  from "fs" ;
 

var fileName="不做冷却管"
const saveData = loadFile(fileName);
 
saveData.world.streamed;
var width=saveData.world.WidthInCells;
var height=saveData.world.HeightInCells;
 
for(var arrFa of saveData.world.streamed){
    if(arrFa[0]==="Camera") continue;
    var buff=arrFa[1];
    for(var i=0;i<buff.length;i++ ){
        buff[i]=255;
    }

}
 //经过测试全部修改为255也没有效果
// Dust Meteor  Iron Meteors  Copper Meteors	 Gold Meteors	 White Comet  Rock Meteor
saveFile(`${fileName}-地图全黑测试`, saveData);
console.log("完成")

