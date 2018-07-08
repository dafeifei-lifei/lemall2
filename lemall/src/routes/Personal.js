import React from "react"
import {connect} from "react-redux"
import {Switch,Route,Redirect} from "react-router-dom"
import User from "./personal/user.js"
import Order from "./personal/order.js"
import Servive from "./personal/service.js"
import Login from "./personal/login.js"
import Coupon from "./personal/coupon.js"
import Bean from "./personal/bean.js"
import Ecology from "./personal/ecology.js"
import Register from "./personal/register.js"
import "../static/css/personal.less"
class Personal extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="personalBox">
            <Switch>
                <Route path="/personal/user" component={User}></Route>
                <Route path="/personal/order" component={Order}></Route>
                <Route path="/personal/service" component={Servive}></Route>
                <Route path="/personal/login" component={Login}></Route>
                <Route path="/personal/coupon" component={Coupon}></Route>
                <Route path="/personal/bean" component={Bean}></Route>
                <Route path="/personal/ecology" component={Ecology}></Route>
                <Route path="/personal/register" component={Register}></Route>
                <Redirect from="/personal" to="/personal/user"></Redirect>
            </Switch>
        </div>
    }
}

export default connect()(Personal);