import * as TYPES from "./../action-types.js"
import {checkLogin,login,register,out,getUserInfo} from "../../api/personal.js"

let personal={
    /*检验是否登录*/
    async checkLogin(){
        return {
            type:TYPES.PERSONAL_USER_CHECK_LOGIN,
            result:await checkLogin()
        }
    },
    /*获取个人信息*/
    async getUserData(){
        return{
            type:TYPES.PERSONAL_USER_INFO,
            result:await getUserInfo()
        }
    },
    /*登录是否成功*/
    async logining(payload){
        return {
            type:TYPES.PERSONAL_LOGIN_LOGINING,
            result:await login(payload)
        }
    },
    /*用户注册*/
    async register(payload){
        return{
            type:TYPES.PERSONAL_REGISTER,
            result:await register(payload)
        }
    },
    //=>用户注册后存储用户信息
    keepUserName(name){
        return{
            type:TYPES.PERSONAL_USERNAME,
            name
        }
    },
    //=>退出登录
    async outLogin(){
        return{
            type:TYPES.PERSONAL_OUT,
            result:await out()
        }
    },
    saveUnpay(ary){
        return{
            type:TYPES.PERSONAL_SAVEUNPAY,
            ary
        }
    }
};
export default personal;