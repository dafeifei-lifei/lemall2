/*BASE*/
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {HashRouter, Switch, Redirect, Route} from "react-router-dom"

/*STORE*/
import store from "./store/index.js"

/*ANTD*/
import {LocaleProvider} from "antd"
import zh_CN from "antd/lib/locale-provider/zh_CN.js"

/*CSS*/
import "./static/css/reset.min.css"
import "./static/css/common.less"
/*COMPONENT*/
import NavBottom from "./component/NavBottom.js"
import Home from "./routes/Home.js"
import Personal from "./routes/Personal.js"
import Select from "./routes/Select.js"
import ShopCart from "./routes/ShopCart.js"
import NavSearch from "./component/NavSearch.js"
import Detail from "./routes/Detail.js"
import GoTop from "./component/GoTop.js"


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <LocaleProvider>
                <div className="all">
                    {/*配路由*/}
                    <main className="container">
                        <Switch>
                            <Route path="/home" exact component={Home}/>
                            <Route path="/select" component={Select}/>
                            <Route path="/shopCart" component={ShopCart}/>
                            <Route path="/personal" component={Personal}/>
                            <Route path="/detail" component={Detail}/>
                            {/*<Route push="/navSearch" exact component={NavSearch}/>*/}
                            {/*<Redirect from="/" to="/home"/>*/}
                        </Switch>
                    </main>
                    {/*NavBottom*/}
                    <NavBottom/>
                    <GoTop/>
                </div>
            </LocaleProvider>
        </HashRouter>
    </Provider>
    , root);