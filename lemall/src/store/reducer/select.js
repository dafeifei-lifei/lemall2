import * as TYPES from "./../action-types.js"
import {selectData} from "../../api/select";


let INIT_STATE={select:[],fenlei:[]};
function select(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){
        case TYPES.LX_FENLEI:
            state.fenlei = action.fenlei.data;
            break;

        case TYPES.LX_SELECT:
            state.select = action.select.data;
            break;

    }
    return state;
}
export default select