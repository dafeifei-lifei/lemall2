import React from 'react';
import data from '../../static/json/home.json';
import {connect} from 'react-redux';


class Hot extends React.Component{
    constructor(props,context){
        super(props,context);

    }
    render(){
        console.log(this.props.dataHot);
        let {smallpic:smallpic1} =this.props.dataHot[0];
        let {smallpic:smallpic2} =this.props.dataHot[1];
        let {smallpic:smallpic3} =this.props.dataHot[2];
        return <div className={'hot'}>
            <h2>热卖精选</h2>
            <ul className={'containerBox clearfix'}>
                <li className={'containerLeft'}>
                    <div  className={'left'}>
                        <img src={smallpic1}/>
                    </div>
                </li>
                <li className={'containerRight'}>
                    <div className={'top'}><img src={smallpic2} alt="" /></div>
                    <div className={'bottom'}><img src={smallpic3} alt="" />
                    </div>
                </li>
            </ul>
        </div>;
    }
}
export  default connect(state=>({...state.home}))(Hot);
