import * as TYPES from "./../action-types.js"


let INIT_STATE={
    dataBanner:[],
    dataBanner1:[],
    dataHot:[],
    dataBig:[],
    dataFitting:[]
};
function home(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.HOME_QUERY_BANNER:
            let payload=action.payload;
            parseFloat(payload.code)===0? state.dataBanner=payload.data:null;
            break;
        case TYPES.HOME_QUERY_BANNER1:
            let payload1=action.payload;
            parseFloat(payload1.code)===0? state.dataBanner1=payload1.data:null;
            break;
        case TYPES.HOME_QUERY_HOT:
            let payload2=action.payload;
            parseFloat(payload2.code)===0? state.dataHot=payload2.data:null;
            break;
        case TYPES.HOME_QUERY_BIG:
            let payload3=action.payload;
            parseFloat(payload3.code)===0? state.dataBig=payload3.data:null;
            break;
             case TYPES.HOME_QUERY_ACCESSORIES:
            let payload4=action.payload;
            parseFloat(payload4.code)===0? state.dataFitting=payload4.data:null;
            break;

    }
    return state;
}
export default home