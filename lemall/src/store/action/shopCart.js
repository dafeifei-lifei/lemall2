import * as TYPES from "./../action-types.js"

let shopCart={
    shopCartCount(count,state){
        return {
            type:TYPES.SHOPCART_INFO,
            count,
            state
        }
    }
};
export default shopCart;