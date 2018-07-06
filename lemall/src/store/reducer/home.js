import * as TYPES from "./../action-types.js"


let INIT_STATE={};
function home(state=INIT_STATE,action) {
    state=JSON.parse(JSON.stringify(state));
    switch (action.type){

    }
    return state;
}
export default home