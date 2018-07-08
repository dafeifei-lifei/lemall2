import React from 'react'
import {connect} from 'react-redux'
// import data from '../../calssdata.json'
import {Input,Icon} from 'antd'
import SuperTv from './SuperTV'
import Hardware from './Hardware'
import Parts from './Parts'
import LeVip from './LeVip'
import {Route,Switch,Redirect,Link} from 'react-router-dom'
import action from "../../store/action";


class Common extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        let {fenlei} = this.props;
        let data = fenlei;
        if(data.length===0)return "";
        let obj = [];
        for (let attr in data[0]) {
            obj.push(attr);
        }
        const Search = Input.Search;
        return <section className={'supertvBox'}>
            {/*通用头*/}
            <header>
                <Icon type={'left'} style={{fontSize:'.4rem',marginLeft:'.2rem'}}/>
                <Search placeholder="X55L" style={{width: '5rem',margin:'.2rem .5rem'}}></Search>
                <Icon type={'ellipsis'} style={{fontSize:'.4rem'}}/>
            </header>
            <div className={'souBox clearfix'}>
                {/*左边导航*/}
                <ul className={'sou_l'}>
                    {obj.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <Switch>
                    <Route path={'/common/supertv'} component={SuperTv}/>
                    <Route path={'/common/hardware'} component={Hardware}/>
                    <Route path={'/common/parts'} component={Parts}/>
                    <Route path={'/common/levip'} component={LeVip}/>
                </Switch>
            </div>
        </section>
    }
}

export default connect(state=>state.select,action.select)(Common);