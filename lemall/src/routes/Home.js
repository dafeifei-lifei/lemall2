import React from "react"
import {connect} from "react-redux"
import {Switch,Route,Link,Redirect} from "react-router-dom"
import GoTop from "./../component/GoTop.js"
import '../static/css/television.less'
/*聂会杰*/
//超级电视
import Television from './home/Television'
import VIP from "./home/VIP";
import Maintain from "./home/Maintain";
import Letv from "./home/Letv";
class Home extends React.Component{
    constructor(){
        super()
    }
    render(){
        return <div>
            <Link to='/home/vip'>超级电视</Link>
            <Link to='/home/televison'>22</Link>
            <Link to='/home/main'>33</Link>
            <GoTop/>
            {/*配路由*/}
            <Switch>
                <Route path="/home/televison" component={Television}></Route>
                <Route path="/home/vip" component={VIP}></Route>
                <Route path="/home/main" component={Maintain}></Route>
                <Route path="/home/letv" component={Letv}></Route>
                <Redirect from="/home" to="/home/content"/>
            </Switch>

            {/*超级电视*/}
         {/*     <Television/>*/}
       {/*     <VIP/>*/}
    {/*       <Maintain/>*/}
              {/*<Letv/>*/}
        </div>
    }
}

export default connect()(Home);