import * as TYPES from "./../action-types.js"
import {queryShopCart} from "../../api/shopCart";

let shopCart={
    shopCartCount(count,state){
        return {
            type:TYPES.SHOPCART_INFO,
            count,
            state
        }
    },

    async queryUnpay(payload) {
            return {
                type: TYPES.SHOP_UNPAY,
                result: await queryShopCart(0,payload)
            };
    },
    async queryPay(payload) {
        return {
                type: TYPES.SHOP_PAY,
                result: await queryShopCart(1,payload)
        }
    } ,

    handleSelect(mode) {
        console.log(mode);
        return {
            type: TYPES.HEANLE_SELECT,
            mode
        }
    },

    addShop(unPayCart){
        return {
            type:TYPES.ADD_SHOP,
            unPayCart
        }
    }


};
export default shopCart;