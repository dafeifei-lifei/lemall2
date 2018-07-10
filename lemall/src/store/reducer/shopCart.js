import * as TYPES from "./../action-types.js"


let INIT_STATE={shopCart:{unpay:[],pay:[]},selectAll:"all",flag:true};//0未选中，1选中
function shopCart(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
       

        case TYPES.SHOP_UNPAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.unpay = action.result.data;
                state.shopCart.unpay = state.shopCart.unpay.map(item => {
                    return {...item, check: true};
                });
                state.selectAll = true;
            }
            break;

        case TYPES.ADD_SHOP:
            if(action.unPayCart instanceof Array){
                action.unPayCart.forEach((item)=>{
                    item.check=true;
                    state.shopCart.unpay.push(item);
                });
                console.log(state.shopCart.unpay);
            }else{
                console.log(action.unPayCart);
                action.unPayCart.check=true;
                state.shopCart.unpay.push(action.unPayCart);
            }
            break;

        case TYPES.REMOVE_SHOP:
            let count=0;
            let one = state.shopCart.unpay.find((item,index)=>{
                count=index;
                return item.id ==action.unPayCart.id&&item.idlx==action.unPayCart.idlx;
            })
            state.shopCart.unpay.splice(count,1);
            
            break;

        case TYPES.SHOP_PAY:
            if (parseFloat(action.result.code) === 0) {
                state.shopCart.pay = action.result.data;
                console.log(state.shopCart.pay);
                // state.shopCart.unpay = [];
                // state.Cart=[];

            }
            break;

        //=>操作全选等
        case TYPES.HEANLE_SELECT:
            let mode = action.mode;
            let idlx = action.idlx;
            if (mode === 'all') {
                state.selectAll = !state.selectAll;
                state.shopCart.unpay = state.shopCart.unpay.map(item => {
                    return {...item, check: state.selectAll};
                });
            } else {
                let item = state.shopCart.unpay.find(item => {
                    return parseFloat(item.id) === parseFloat(mode)&&item.idlx==idlx;
                });


                if(!item){
                   return ;//
                }
                item.check = !item.check;
                //=>注意:验证是否所有的课程都是选中的，如果是全选也要选中
                let f = state.shopCart.unpay.find(item => {
                    return item.check === false;
                });
                f ? state.selectAll = false : state.selectAll = true;
            }
            break;

        case TYPES.BIAOSHI:
            state.flag=action.flag
    }
    return state;
}
export default shopCart