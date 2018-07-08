import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Big extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    render(){
        let data=this.props.dataBig;
        let {smallpic}=data[0];
        let data2=data.slice(1);
        return <div className={'big'} >
            <h2>智能大屏</h2>
            <div className={'top'}>
                <img src={smallpic} alt=""/>
            </div>
            <ul className={'bottom clearfix'}>
                {data2.map((item,index)=>{
                    let {smallpic,id,idlx}=item;
                    return <li key={index}>
                        <Link to={`/detail/?idlx=${idlx}&id=${id}`}><img src={smallpic} alt=""/> </Link>
                    </li>

                })}
            </ul>

        </div>;
    }
}
export  default connect (state=>({...state.home}))(Big);
