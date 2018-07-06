import axios from "./index.js"

//=>加入购物车
export function add(payload) {
    return axios.post("/store/add",payload)
}

