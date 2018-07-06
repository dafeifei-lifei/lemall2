import React from 'react'
import {connect} from 'react-redux'
import action from "../../store/action";
// import data from '../../calssdata.json'

class Parts extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        let {fenlei} = this.props;
        let data = fenlei;
        if(!data)return "";
        let x = data[0]['精品配件'];
        console.log(x);
        return <div className={'partsBox'}>
            <ul>
                {x.map((item,index)=>{
                    return <li key={index} className={'clearfix'}>
                        <div className={'partsBox_pic'}>
                            <img src={item.pic} alt={item.name}/>
                        </div>
                        <div className={'partsBox_text clearfix'}>
                            <span>{item.name}</span>
                            <em>&gt;</em>
                        </div>
                    </li>
                })}</ul>
        </div>
    }
}

export default connect(state=>state.select,action.select)(Parts);