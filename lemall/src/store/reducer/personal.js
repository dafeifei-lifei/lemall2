import * as TYPES from "./../action-types.js"


let INIT_STATE={
    isLogin:null,//=>记录是否登录
    loginRun:null,//=>记录登录是否成功
    isRegister:null,//=>记录注册是否成功
    userName:null,//=>记录登录后用户的信息
    saveUnpay:[],
    count:0
};
function personal(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.PERSONAL_USER_CHECK_LOGIN:
            let result=action.result;
            if(result.code===0){//=>已登录
                state.isLogin=true;
            }else{
                state.isLogin=false;
            }
            break;
        case TYPES.PERSONAL_USER_INFO:
            let personalResult=action.result;
            if(personalResult.code===0){
                state.userName=personalResult.data.name;
            }
            break;
        case TYPES.PERSONAL_LOGIN_LOGINING:
            let payload=action.result;
            if(payload.code===0){//=>登录成功
                state.loginRun=true;
            }else{
                state.loginRun=false;
            }
            break;
        case TYPES.PERSONAL_REGISTER:
            let registerResult=action.result;
            if(registerResult.code===0){//=>注册成功
                state.isRegister=true;
            }else{
                state.isRegister=false;
            }
            break;
        case TYPES.PERSONAL_USERNAME:
            state.userName=action.name;
            break;
        case TYPES.PERSONAL_OUT:
            let outResult=action.result;
            if(outResult.code===0){
                state.isLogin=false;
            }
            break;
        case TYPES.PERSONAL_SAVEUNPAY:
            state.saveUnpay=action.ary;
            state.count=1;
            break;
    }
    return state;
}
export default personal