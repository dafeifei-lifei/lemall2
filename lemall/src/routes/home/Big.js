import React from 'react';
import {connect} from 'react-redux';


 class Big extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        let data=this.props.dataBig;
        let {smallpic}=data[0];
        let data2=data.slice(1);
        return <div className={'big'}>
            <h2>智能大屏</h2>
            <div className={'top'}>
                <img src={smallpic} alt=""/>
            </div>
            <ul className={'bottom clearfix'}>
                {data2.map((item,index)=>{
                    let {smallpic}=item;
                    return <li key={index}>
                        <img src={smallpic} alt=""/>
                    </li>

                })}
            </ul>

        </div>;
    }
}
export  default connect (state=>({...state.home}))(Big);
