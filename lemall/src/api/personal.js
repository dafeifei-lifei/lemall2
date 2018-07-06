import axios from "./index.js"

//=>验证是否登录
export function checkLogin() {
    return axios.get("/personal/login");
}

//=>验证登录是否成功
export function login(payload) {
    return axios.post("/personal/login",payload);
}

//=>用户注册
export function register(payload) {
    return axios.post("/personal/register",payload);
}
//=>退出登录
export function out() {
    return axios.get("/personal/out");
}