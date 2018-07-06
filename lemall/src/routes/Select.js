import React from 'react'
import {connect} from 'react-redux'
import {Input, Icon} from 'antd'
import SuperTv from './select/SuperTV'
import Hardware from './select/Hardware'
import Parts from './select/Parts'
import LeVip from './select/LeVip'
import {Route, Switch, Redirect, Link} from 'react-router-dom'
import action from "../store/action"

class Common extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            data:null
        }
    }
    componentDidMount(){
        this.props.fenleiData();
        this.setState({
            data:1
        })
    }
    render() {
        let {fenlei} = this.props;
        let data = fenlei;
        let obj = [];
        if(data.length===0)return "";
        for (let attr in data[0]) {
            obj.push(attr);
        }
        const Search = Input.Search;
        return <section className="selectBox">
            <section className={'supertvBox'}>
                {/*通用头*/}
                <header>
                    <Icon type={'left'} style={{fontSize: '.4rem', marginLeft: '.2rem'}}/>
                    <Search placeholder="X55L" style={{width: '5rem', margin: '.2rem .5rem'}}></Search>
                    <Icon type={'ellipsis'} style={{fontSize: '.4rem'}}/>
                </header>
                <div className={'souBox clearfix'}>
                    {/*左边导航*/}
                    <ul className={'sou_l'}>
                        {obj.map((item, index) => {
                            return <li key={index} onClick={this.handle}>{item}</li>
                        })}
                    </ul>
                    <Switch>
                        <Route path={'/select/supertv'} component={SuperTv}/>
                        <Route path={'/select/hardware'} component={Hardware}/>
                        <Route path={'/select/parts'} component={Parts}/>
                        <Route path={'/select/levip'} component={LeVip}/>
                        <Redirect from={'/select'} to={'/select/supertv'}/>
                    </Switch>
                </div>
            </section>
        </section>
    }

    handle=()=>{

    }
}

export default connect(state=>state.select,action.select)(Common);