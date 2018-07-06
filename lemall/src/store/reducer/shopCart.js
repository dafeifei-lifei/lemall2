import * as TYPES from "./../action-types.js"


let INIT_STATE={shopCart:{unpay:[],pay:[]},selectAll:"all"};//0未选中，1选中
function shopCart(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        // case TYPES.SHOPCART_INFO:
        //     state.shopCart.count = action.count;
        //     state.shopCart.state = action.state;
        //     // state.shopCart.find((item)=>{
        //     //     item.state===1?item.selectAll=true:item.selectAll=false;
        //     // })
        //     // state.shopCart.id=state.shopCart[state.shopCart.length-1].id+1
        //     break;
        //
        // case TYPES.HEANLE_SELECT:
        //     state.check = action.mode;

        case TYPES.SHOP_UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.unpay = action.result.data;
                //=>给每一条数据加一个选中的属性
                console.log("fsfs");
                state.shopCart.unpay = state.shopCart.unpay.map(item => {
                    return {...item, check: true};
                });
                state.selectAll = true;
            }
            break;
        case TYPES.SHOP_PAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.pay = action.result.data;
            }
            break;

        //=>操作全选等
        case TYPES.HEANLE_SELECT:
            let mode = action.mode;
            if (mode === 'all') {
                state.selectAll = !state.selectAll;
                state.shopCart.unpay = state.shopCart.unpay.map(item => {
                    return {...item, check: state.selectAll};
                });
            } else {
                console.log(mode);

                let item = state.shopCart.unpay.find(item => {
                    return parseFloat(item.id) === mode;
                });
                console.log(item);

                item.check = !item.check;
                //=>注意:验证是否所有的课程都是选中的，如果是全选也要选中
                let f = state.shopCart.unpay.find(item => {
                    return item.check === false;
                });
                f ? state.selectAll = false : state.selectAll = true;
            }
            break;

    }
    return state;
}
export default shopCart