import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import {Icon} from "antd"
import action from "../../store/action/index.js"
class Order extends React.Component {
    constructor() {
        super();
        this.state = {
            list: ["全部", "待付款", "待收货", "待评价"],
            clickIndex: 0,
            listEmpty:["","待付款的","待收货的","待评价的"],
        }
    }
    componentWillMount(){
        let search = this.props.location.search,
            inIndex = parseFloat(search.substr(search.length - 1));
        this.setState({
            clickIndex:inIndex
        })
    }
/*    async componentDidMount(){
        await this.props.queryUnpay();
        await this.props.queryPay();
        this.setState({
            isLoad:true
        })
    }*/
    render() {
        /*if(!this.state.isLoad) return "";*/
        let {shopCart:{unpay,pay}}=this.props,
       ary=[pay,unpay,pay];

        return <div className="orderBox">
            <div className="title">
                <Link to="/personal/user"><i></i></Link>
                <p>我的订单</p>
            </div>
            <div className="line">
                <ul className="clearfix">
                    {
                        this.state.list.map((item, index) => {
                            return <li className={index === this.state.clickIndex? "active" :""} key={index} onClick={this.active.bind(this,index)}>
                                <a href="javascript:;"><b>{item}</b></a>
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="content">
                <div className="orderList">

                    {
                       ary[this.state.clickIndex].map((item,index)=>{
                            return <div className="order" key={index}>
                                <div className="title">
                                    <span>乐视自营</span>
                                </div>
                                <div className="content">
                                    <div className="pic"><img src="https://img0-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513647837847.jpg" alt=""/></div>
                                    <div className="buyDetail">
                                        <p>类型：{item.name}</p>
                                        <p>{item.dec}</p>
                                        <p>购买日期：2018-01-02</p>
                                    </div>
                                </div>
                                <div className="pay">
                                    <p>{this.state.clickIndex===2?"实付款":(this.state.clickIndex===1?"待付款":(this.state.clickIndex===0?"实付款":null))}<span>￥{item.price}</span></p>
                                </div>
                            </div>
                        })
                    }
             {/*       <div className="order">
                    <div className="title">
                        <span>乐视自营</span>
                    </div>
                    <div className="content">
                        <div className="pic"><img src="https://img0-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513647837847.jpg" alt=""/></div>
                        <div className="buyDetail">
                            <p>类型：X43L</p>
                            <p>通过网络看视频、购物、上幼儿园、玩游戏都成为了可能</p>
                            <p>购买日期：2018-01-02</p>
                        </div>
                    </div>
                    <div className="pay">
                        <p>实付款<span>￥1899.00</span></p>
                    </div>
                </div>*/}

                </div>
                <div className="empty">
                    <div><Icon type="profile"></Icon></div>
                    <p>您还没有{this.state.listEmpty[this.state.clickIndex]}订单哦</p>
                    <span><Link to="/home">去逛逛</Link></span>
                </div>
            </div>
        </div>
    }
    active=(index)=>{
        this.setState({
            clickIndex:index
        })
    }
}

export default connect(state=>({...state.shopCart}),action.shopCart)(Order);