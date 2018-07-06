import axios from "./index.js"

export function payData(payload){
    return axios.post("/store/pay",payload)
}