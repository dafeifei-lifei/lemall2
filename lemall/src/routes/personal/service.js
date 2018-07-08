import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import NavList from "../../component/NavList.js"
class Service extends React.Component{
    constructor(){
        super();
        this.state={
            navList:{
                list:[],
                isShow:false,
                title:"返修/退货",
                titleLeft:"售后规则",
                type:"tool",
                emptyRight:"您还没有返修退换的订单"
            }
        }
    }
    render(){
      return <div className="serviceBox">
          <NavList {...this.state.navList}/>
      </div>
    }
}
export default connect()(Service);