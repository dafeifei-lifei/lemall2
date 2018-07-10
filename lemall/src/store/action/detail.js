import * as TYPES from "../action-types.js"
import {add,remove} from "../../api/detail.js"
let detail={

    async add(payload){
        return{
            type:TYPES.DETAIL_ADD,
            result:await add(payload)
        }
    },

    async remove(payload){
        return{
            type:TYPES.DETAIL_REMOVE,
            result:await remove(payload)
        }
    },

    classify_cart(payload){
        return {
            type:TYPES.CLASSIFY_CART,
            data:payload
        }
    },

    classify_cart_remove(payload){
        return {
            type:TYPES.CLASSIFY_CART_REMOVE,
            data:payload
        }
    }
};

export default detail