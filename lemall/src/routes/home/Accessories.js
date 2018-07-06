import React from 'react';
import {connect} from 'react-redux';


 class Accessories extends React.Component{
    constructor(props,context){
        super(props,context);
        
    }
    render(){
        
        let {smallpic}=this.props.dataFitting[0];
        let data=this.props.dataFitting.slice(1);
        return <div className={'accessories'}>
            <h2>精选配件</h2>
            <div className={'top'}>
                <img src={smallpic} alt=""/>
            </div>
            <ul className={'bottom clearfix'}>
                {
                    data.map((item,index)=>{
                        let {smallpic}=item;
                        return <li key={index}>
                            <img src={smallpic} alt=""/>
                        </li>
                    })
                }
            </ul>

        </div>;
    }
}
export  default connect(state=>({...state.home}))(Accessories)