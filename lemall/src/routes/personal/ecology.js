import React from "react"
import {connect} from "react-redux"
import NavList from "./../../component/NavList.js"
class Ecology extends React.Component{
    constructor(){
        super();
        this.state={
            navList:{
                list:["全部","易到","网酒"],
                type:"global",
                isShow:true,
                title:"生态优惠券",
                titleLeft:"",
                emptyRight:"暂无",
                emptyLeft:"优惠券",
            }
        }
    }
    render(){
        return <div className="ecologyBox">
            <NavList {...this.state.navList}/>
        </div>
    }
}
export default connect()(Ecology);