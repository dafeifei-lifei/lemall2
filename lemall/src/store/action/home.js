import * as TYPES from "./../action-types.js"
import {queryBanner,queryBanner2,queryHot,queryBig,queryFitting,mallSort} from '../../api/home';

let home={
     async queryBanner(){
         return {
             type:TYPES.HOME_QUERY_BANNER,
             payload:await queryBanner()
         }
     },
    async queryBanner2(){
         return{
             type:TYPES.HOME_QUERY_BANNER1,
             payload:await queryBanner2()
         }
    },
    async queryHot(){
        return{
            type:TYPES.HOME_QUERY_HOT,
            payload:await queryHot()
        }
    },
    async queryBig(){
        return{
            type:TYPES.HOME_QUERY_BIG,
            payload:await queryBig()
        }
    },
     async queryFitting(){
        return{
            type:TYPES.HOME_QUERY_ACCESSORIES,
            payload:await queryFitting()
        }
    },
    async querySort(payload){
         return{
             type:TYPES.HOME_SORT,
             result: await mallSort(payload)
         }
    }


};
export default home;
