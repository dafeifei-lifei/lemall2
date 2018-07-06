import React from 'react'
import {connect} from 'react-redux'
import {Input, Icon} from 'antd'
import SuperTv from './select/SuperTV'
import Hardware from './select/Hardware'
import Parts from './select/Parts'
import LeVip from './select/LeVip'
import {Route, Switch, Redirect, Link, NavLink} from 'react-router-dom'
import action from "../store/action"

class Common extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            data: null,
            tempIndex: 0,
            current: this.props.location.pathname = '/select/supertv'
        }
    }

    componentDidMount() {
        this.props.fenleiData();
        this.setState({
            data: 1
        })
    }

    render() {
        let {fenlei} = this.props;
        let data = fenlei;
        let obj = [];
        if (data.length === 0) return "";
        for (let attr in data[0]) {
            obj.push(attr);
        }
        const Search = Input.Search;
        let arr = ['/select/supertv', '/select/hardware', '/select/parts', '/select/levip'];
        return <section className="selectBox">
            <section className={'supertvBox'}>
                {/*通用头*/}
                <header>
                    <Link to={'/navSearch'}>
                        <Icon type={'left'} style={{fontSize: '.4rem', marginLeft: '.2rem'}} onClick={()=>{
                            this.props.history.go(-1)
                        }}/>
                        <Search placeholder="X55L" style={{width: '5rem', margin: '.2rem .5rem'}}></Search>
                        <Icon type={'ellipsis'} style={{fontSize: '.4rem'}}/>
                    </Link>
                </header>
                <div className={'souBox clearfix'}>
                    {/*左边导航*/}
                    <ul className={'sou_l'}>
                        {obj.map((item, index) => {
                            return <li key={index} onClick={this.handle.bind(this, index)}
                                       className={this.state.tempIndex === index ? 'active' : ''}><NavLink
                                to={arr[index]}>{item}</NavLink></li>
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

    handle = (index, ev) => {

        this.setState({
            tempIndex: index,
            current: ev.key
        });
        /*switch (ev){
            case '超级电视':
                this.props.history.push('/select/supertv');
                break;
            case '智能硬件':
                this.props.history.push('/select/hardware');
                break;
            case '精品配件':
                this.props.history.push('/select/parts');
                break;
            case '乐视会员':
                this.props.history.push('/select/levip');
                break;
        }*/
    };
}

export default connect(state => state.select, action.select)(Common);