import axios from "./index.js"

//获取服务器购物车信息
export function queryShopCart(state = 0,idlx) {
    return axios.get('/store/info', {
        params: {
            state,
            idlx
        }
    });
}

//=>支付
export function payShopCart(storeID,idlx) {
    return axios.post('/store/pay', {
        storeID,idlx
    });
}