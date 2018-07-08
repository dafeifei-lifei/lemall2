import * as TYPES from "./../action-types.js"


let INIT_STATE = {
    dataBanner: [],
    dataBanner1: [],
    dataHot: [],
    dataBig: [],
    dataFitting: [],
    dataMall: [],
    dataAll: [],
    dataPriceUp: [],
    dataPriceDown: [],
    dataTime: [],
    dataEvaluateUp: [],
    dataEvaluateDown:[],
};
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}
function home(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case TYPES.HOME_QUERY_BANNER:
            let payload = action.payload;
            parseFloat(payload.code) === 0 ? state.dataBanner = payload.data : null;
            break;
        case TYPES.HOME_QUERY_BANNER1:
            let payload1 = action.payload;
            parseFloat(payload1.code) === 0 ? state.dataBanner1 = payload1.data : null;
            break;
        case TYPES.HOME_QUERY_HOT:
            let payload2 = action.payload;
            parseFloat(payload2.code) === 0 ? state.dataHot = payload2.data : null;
            break;
        case TYPES.HOME_QUERY_BIG:
            let payload3 = action.payload;
            parseFloat(payload3.code) === 0 ? state.dataBig = payload3.data : null;
            break;
        case TYPES.HOME_QUERY_ACCESSORIES:
            let payload4 = action.payload;
            parseFloat(payload4.code) === 0 ? state.dataFitting = payload4.data : null;
            break;
        case TYPES.HOME_SORT:
            let result = action.result;
            parseFloat(result.code) === 0 ? state.dataMall = state.dataMall.concat(result.data) : null;
            state.dataAll = state.dataMall;
            state.dataPriceUp = JSON.parse(JSON.stringify(state.dataMall)).sort((a, b) => {
                return parseFloat(a.price)-parseFloat(b.price)
            });
            state.dataPriceDown=JSON.parse(JSON.stringify(state.dataMall)).sort((a, b) => {
                return parseFloat(b.price)-parseFloat(a.price)
            });
            state.dataEvaluateUp=JSON.parse(JSON.stringify(state.dataMall)).sort((a,b)=>{
                return parseFloat(a.evaluate)-parseFloat(b.evaluate)
            });
            state.dataEvaluateDown=JSON.parse(JSON.stringify(state.dataMall)).sort((a,b)=>{
                return parseFloat(b.evaluate)-parseFloat(a.evaluate)
            });
            state.dataTime=JSON.parse(JSON.stringify(state.dataMall)).sort((a,b)=>{
                return new Date(b.time).getTime()-new Date(a.time).getTime();
                return
            });
            break;

    }
    return state;
}

export default home