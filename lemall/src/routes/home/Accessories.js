import React from 'react';
import {connect} from 'react-redux';
 import {Link} from "react-router-dom"

 class Accessories extends React.Component{
    constructor(props,context){
        super(props,context);
        
    }
    render(){
        
        let {smallpic}=this.props.dataFitting[0];
        let data=this.props.dataFitting.slice(1);
        console.log(data);
        return <div className={'accessories'}>
            <h2>精选配件</h2>
            <div className={'top'}>
                <img src={smallpic} alt=""/>
            </div>
            <ul className={'bottom clearfix'}>
                {
                    data.map((item,index)=>{
                        let {smallpic,idlx,id}=item;
                        return <li key={index}>
                            <Link to={`/detail/?idlx=${idlx}&id=${id}`}><img src={smallpic} alt=""/></Link>
                        </li>
                    })
                }
            </ul>

        </div>;
    }
}
export  default connect(state=>({...state.home}))(Accessories)