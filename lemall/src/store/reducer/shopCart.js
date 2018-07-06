import * as TYPES from "./../action-types.js"


let INIT_STATE={shopCart:{count:1,state:1}};//0未选中，1选中
function shopCart(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.SHOPCART_INFO:
            state.shopCart.count = action.count;
            state.shopCart.state = action.state;
            // state.shopCart.find((item)=>{
            //     item.state===1?item.selectAll=true:item.selectAll=false;
            // })
            // state.shopCart.id=state.shopCart[state.shopCart.length-1].id+1
            break;
    }
    return state;
}
export default shopCart