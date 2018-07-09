import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import action from "../../store/action"

class Hardware extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        let {fenlei} = this.props;
        let data = fenlei;
        if(data.length===0)return "";
        let x = data[0]['智能硬件'];
        return <div className={'hardwareBox'}>
            <ul>
            {x.map((item,index)=>{
                return <li key={index} className={'clearfix'}>
                    <Link to={"/home/tv"}>
                        <div className={'hardwareBox_pic'}>
                            <img src={item.pic} alt={item.name}/>
                        </div>
                        <div className={'hardwareBox_text clearfix'}>
                            <span>{item.name}</span>
                            <em>&gt;</em>
                        </div>
                    </Link>
                </li>
            })}</ul>
        </div>
    }
}

export default connect(state=>state.select,action.select)(Hardware);