import React from "react"
import {Icon} from "antd"
class GoTop extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div className="goTop" id="goTop">
            <a href="javascript:;">
                <Icon type="arrow-up"></Icon>
                <p>顶部</p>
            </a>
        </div>
    }
}
export default GoTop;