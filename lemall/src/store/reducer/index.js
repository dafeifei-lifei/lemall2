import {combineReducers} from "redux";
import home from "./home.js"
import personal from "./personal.js"
import select from "./select.js"
import shopCart from "./shopCart.js"
import detail from "./detail.js"

let reducer=combineReducers({
    home,
    personal,
    select,
    shopCart,
    detail
})

export default reducer