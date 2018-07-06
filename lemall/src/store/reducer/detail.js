import * as TYPES from "./../action-types.js"


let INIT_STATE={

    addBack:1,//=>记录加入购物车是否成功
    Cart:[]    //记录要加入购物车的数据


};
function detail(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.DETAIL_ADD:
            state.addBack=action.result.code;
            break;

        case TYPES.CLASSIFY_CART:
            state.Cart.push(action.data);
            break;
    }
    return state;
}
export default detail