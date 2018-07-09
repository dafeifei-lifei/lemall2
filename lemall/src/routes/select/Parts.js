import React from 'react'
import {connect} from 'react-redux'
import action from "../../store/action";
import {Link} from "react-router-dom"

class Parts extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        let {fenlei} = this.props;
        let data = fenlei;
        if(!data)return "";
        let x = data[0]['精品配件'];
        return <div className={'partsBox'}>
            <ul>
                {x.map((item,index)=>{
                    return <li key={index} className={'clearfix'}>
                        <Link to="/home/tv">
                            <div className={'partsBox_pic'}>
                                <img src={item.pic} alt={item.name}/>
                            </div>
                            <div className={'partsBox_text clearfix'}>
                                <span>{item.name}</span>
                                <em>&gt;</em>
                            </div>
                        </Link>
                    </li>
                })}</ul>
        </div>
    }
}

export default connect(state=>state.select,action.select)(Parts);