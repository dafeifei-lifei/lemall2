import React from "react";
import {connect} from "react-redux"
import {Icon,Input} from "antd"
import {Link} from "react-router-dom"

class NavSearch extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const Search = Input.Search;

        return <div className={"searchPage"}>
        <div className={"searchBox"}>
            <div className={"back"}>
                <Icon type="close"  onClick={this.back}/>
            </div>
            <div className={"searchDiv"}>
                <span className={"span1"}><Icon  type="search" /></span>
               <input type={"text"} ref={"ipt"}/>
            </div>
            <div className={"close"} >
            <span className={"span2"}><Icon onClick={this.clear} className={"closeIcon"}  type="close-circle-o" /></span>
            </div>
        </div>

            <div className={"hot"}>
                <p>热门搜索</p>
                <div>
                    <span>X55L</span>
                    <span>X43L</span>
                    <span>X40L</span>
                </div>
                <p ref={"history1"}>搜索历史</p>
                <span className={"last"} ref={"history2"}>X55L</span>
            </div>

            <div className={"history"} ref={"history3"} onClick={this.clearHistory}>
                <span>清除历史记录</span>
            </div>

        </div>
    }

    back=()=>{
        this.props.history.go(-1);
    }
    clear=()=>{
        this.refs.ipt.value="";
    }
    clearHistory=()=>{
        this.refs.history1.style.display="none";
        this.refs.history2.style.display="none";
        this.refs.history3.style.display="none";
    }




}

export default connect()(NavSearch);