import axios from "./index.js"

//获取服务器购物车信息
export function queryShopCart(state = 0,idlx) {
    console.log(idlx);
    return axios.get('/store/info', {
        params: {
            state,
            idlx
        }
    });
}

//
// export function payData(payload){
//     return axios.post("/store/pay",payload)
// }

//=>支付
export function payShopCart(storeID,idlx) {
    return axios.post('/store/pay', {
        storeID,idlx
    });
}