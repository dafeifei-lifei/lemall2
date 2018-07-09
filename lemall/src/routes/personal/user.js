import React from "react"
import {connect} from "react-redux"
import {Icon} from "antd"
import {Link} from "react-router-dom"
import action from "../../store/action/index.js"
import {out} from "./../../api/personal.js"

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            isLogin: null
        }
    }

    async componentWillMount() {
        document.documentElement.scrollTop=0;
        //=>之前如果已经判断过是否登录了，不再重新判断
        if (this.props.isLogin === true) {
            this.setState({
                isLogin: this.props.isLogin
            });
            return;
        }
        await this.props.checkLogin();
        let canshu = ["banner", "hotSale", "bigScreen", "fitting", "list", "classify"],Cart;
        if(this.props.isLogin){
            await this.props.getUserData();
            Cart = this.props.Cart;
            this.props.saveUnpay(Cart);
            await this.props.queryUnpay(canshu);
            await this.props.queryPay(canshu);
        }
        this.setState({
            isLogin: this.props.isLogin
        })
    }

    render() {

        return <div className="userBox">
            {this.props.isLogin ? <div className="out" onClick={() => {
                this.out()
            }}>退出</div> : ""}
            <div className="person">
                <div className="pic">
                    <img src="http://img2-lemall.letvimg.com/wap/20160318/default/4942896749464113" alt=""/>
                    <img src="https://img3-lemall.letvimg.com/wap/20160318/default/4943586322834628"/>
                </div>
                <div className="unlogin">
                    {this.props.isLogin ? <p style={{fontSize: ".35rem"}}>{this.props.userName}</p> : <Link to="/personal/login">登录</Link>}
                    {!this.props.isLogin ? <p>登录后查看个人信息</p> : <p><Icon type="mobile"></Icon>已与手机绑定</p>}

                </div>
                <div className="login">
                    <p>用户名</p>

                </div>
            </div>
            <div className='order'>
                <div className="title">
                    <Link to={this.props.isLogin ? "/personal/order?type=0" : "/personal/login"}>
                        <p>全部订单</p>
                        <p>查看全部订单</p>
                        <i></i>
                    </Link>
                </div>
                <div className="classify">
                    <ul className="clearfix">
                        <li>
                            <Link to={this.props.isLogin ? "/personal/order?type=1" : "/personal/login"}>
                                <img src="http://img3-lemall.letvimg.com/wap/20160318/default/4948274489422075" alt=""/>
                                <p>待付款</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={this.props.isLogin ? "/personal/order?type=2" : "/personal/login"}>
                                <img src="http://img0-lemall.letvimg.com/wap/20160318/default/4948274672719886" alt=""/>
                                <p>待收货</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={this.props.isLogin ? "/personal/order?type=3" : "/personal/login"}>
                                <img src="http://img0-lemall.letvimg.com/wap/20160318/default/4948274754314100" alt=""/>
                                <p>待评价</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={this.props.isLogin ? "/personal/service" : "/personal/login"}>
                                <img src="http://img1-lemall.letvimg.com/wap/20160318/default/4948274846979592" alt=""/>
                                <p>维修/退换</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="asset">
                <div className="title">
                    <p>我的资产</p>
                </div>
                <div className="list">
                    <ul className="clearfix">
                        <li>
                            <Link to={this.props.isLogin ? "/personal/coupon" : "/personal/login"}>
                                <p>0</p>
                                <p>优惠券</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={this.props.isLogin ? "/personal/bean" : "/personal/login"}>
                                <p>0</p>
                                <p>乐豆</p>
                            </Link>
                        </li>
                        <li>
                            <Link to={this.props.isLogin ? "/personal/ecology" : "/personal/login"}>
                                <p>0</p>
                                <p>生态券</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="List top">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <span>收货地址</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>乐迷俱乐部</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>分享邀请</span>
                            <i></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="List bottom">
                <ul>
                    <li>
                        <a href="javascript:;">
                            <span>离城公告</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>真伪查询</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>售后服务</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>配送范围查询</span>
                            <b>仅适用超级电视</b>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="javascript:;">
                            <span>意见反馈</span>
                            <i></i>
                        </a>
                    </li>
                </ul>
            </div>
            <h3>©2017乐视商城</h3>
        </div>
    }

    out = () => {
        this.props.outLogin();
    }
}

export default connect(state => ({...state.personal, ...state.shopCart,...state.detail}), {...action.personal, ...action.shopCart})(User);