import * as TYPES from "./../action-types.js"


let INIT_STATE={

    addBack:1,//=>记录加入购物车是否成功
    removeBack:1,
    Cart:[]    //记录要加入购物车的数据


};
function detail(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        //后台增加
        case TYPES.DETAIL_ADD:
            state.addBack=action.result.code;
            break;
       //前台增加
        case TYPES.CLASSIFY_CART:
            state.Cart.push({...action.data,check:true});
            break;
        //后台删除
        case TYPES.DETAIL_REMOVE:
            state.removeBack=action.result.code;
            break;
        //前台删除
        case TYPES.CLASSIFY_CART_REMOVE:
            console.log(state.Cart);
            let count=0;
            let one = state.Cart.find((item,index)=>{
                count = index;
                return parseFloat(item.id)!==parseFloat(action.data.id)&&item.idlx===action.data.idlx
            });
            state.Cart.splice(count,1);
            console.log(state.Cart);
            break;
    }
    return state;
}
export default detail