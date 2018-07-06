import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
class Bean extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="beanBox">
            <div className="title">
                <Link to="/personal/user"><i></i></Link>
                <p>我的乐豆</p>
            </div>
            <div className="pic">
                <img src="http://img3-lemall.letvimg.com/file/20151028/default/11401343203639408" alt=""/>
            </div>
            <div className="beanDetail">
                <p>近三个月前乐豆明细</p>
                <i></i>
            </div>
        </div>
    }
}
export default connect()(Bean);