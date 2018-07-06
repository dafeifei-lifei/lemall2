import React from "react"
import {connect} from "react-redux"
import NavList from "./../../component/NavList.js"
class Coupon extends React.Component{
    constructor(){
        super();
        this.state={
            navList:{
                list:["未使用","已使用","已失效"],
                type:"red-envelope",
                isShow:true,
                title:"我的优惠券",
                titleLeft:"",
                emptyRight:"您没有",
                emptyLeft:"的优惠券"
            }
        }
    }
    render(){
        return <div className="couponBox">
            <NavList {...this.state.navList}/>
        </div>
    }
}
export default connect()(Coupon);