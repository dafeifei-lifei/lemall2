import React from "react"
import {connect} from "react-redux"
import Banner from "./home/Banner";
import Nav from "./home/Nav";
import Banner1 from "./home/Banner1";
import Hot from "./home/Hot";
import Big1 from "./home/Big";
/*import next router*/
import Letv from './home/Letv';
import Maintain from './home/Maintain';
import VIP from './home/VIP';
import Television from './home/Television';
import Common from './select/Common';

import action from '../store/action/index';
import Accessories from './home/Accessories';
import {Switch,Route} from 'react-router-dom';
import '../static/css/home.less';

class Home extends React.Component {
    constructor() {
        super();
        this.state={
            isBanner:false,
        }
    }
    async componentDidMount(){
        await this.props.queryBanner();
        await this.props.queryBanner2();
        await this.props.queryHot();
        await this.props.queryBig();
        await this.props.queryFitting();

        this.setState({
             isLoad:true
         })
    }
    render() {
         if (!this.state.isLoad) return '';
        return <div className={'homeContainer'}>
            <Banner/>
            <Nav/>
            <Banner1/>
            <Hot/>
            <Big1/>
            <Accessories/>
            <Switch>
                <Route path={'/home/tv'} component={Television}/>
                <Route path={'/home/vip'} component={VIP}/>
                <Route path={'/home/install'} component={Maintain}/>
                <Route path={'/home/lemi'} component={Letv}/>
            </Switch>
        </div>
    }
}

export default connect(state=>({...state.home}),action.home)(Home);