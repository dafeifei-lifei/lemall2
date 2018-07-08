import {createStore,applyMiddleware} from "redux"
import reducer from "./../store/reducer/index.js"
import reduxThunk from "redux-thunk"
import reduxPromise from "redux-promise"
import reduxLogger from "redux-logger"

let store=createStore(reducer,applyMiddleware(reduxPromise,reduxLogger,reduxPromise));
export default store;