import React from "react"
import {connect} from "react-redux"
import {withRouter, NavLink} from "react-router-dom"
import {Icon} from "antd"

class NavBottom extends React.Component {
    constructor() {
        super()
    }

    render() {
        let {location: {pathname}} = this.props,
            ary = ["/personal/login", "/personal/register", "/shopCart","/detail"];
        if (ary.includes(pathname)) return "";
        return <footer className="footerNavBox">
            <NavLink to={"/home"} exact><Icon type={"home"}/><span>首页</span></NavLink>
            <NavLink to={"/select"}><Icon type={"bars"}/><span>分类</span></NavLink>
            <NavLink to={"/shopCart"}><Icon type={"shopping-cart"}/><span>购物车</span></NavLink>
            <NavLink to={"/personal"}><Icon type={"user"}/><span>我的</span></NavLink>
        </footer>
    }
}

export default withRouter(connect()(NavBottom))