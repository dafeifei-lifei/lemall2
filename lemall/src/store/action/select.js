import * as TYPES from "./../action-types.js"
import {selectData,fenleiData} from "../../api/select"

console.log(TYPES);
let select = {
/*分类结构*/
    async fenleiData(){
        return {
            type:TYPES.LX_FENLEI,
            fenlei:await fenleiData()
        }
    },
    /*分类6张图*/
      async selectData(){
          return {
              type:TYPES.LX_SELECT,
              select: await selectData()
          }
      }



};

export default select;