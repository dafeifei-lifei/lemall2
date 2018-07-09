import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {Icon} from "antd"
import Qs from "qs"
import action from "../store/action/index.js"
import Banner from "./../routes/Detail/Banner.js"
import "./../static/css/detail.less"
import {queryDetail} from "../api/detail.js"

import {checkLogin} from "../api/personal"
import regionData from '../static/json/regionData.json'


class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            rote: false,
            rote_one: false,
            memberDiscount: [
                {time: "1个月", dec: "裸机赠送1个月超级影视会员", price: 0.00},
                {time: "6个月", dec: "电影立减150元，含6个月超级影视会员", price: 290.00},
                {time: "1年", dec: "电影立减150元，含12个月超级影视会员", price: 490.00},
                {time: "2年", dec: "电影立减150元，含24个月超级影视会员", price: 980.00}
            ],
            detail: {content: "1个月", price: 0.00},
            evaluate: [],
            img: ["https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667682242.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1514281833166.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667694409.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667697576.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1514281853836.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667705223.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667709478.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667713275.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201801/1515575021606.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201801/1515575059117.jpg@imageview/3/p/100", "https://img0-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513667727602.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513752116359.jpg@imageview/3/p/100", "https://img1-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513752121418.jpg@imageview/3/p/100", "https://img0-lemall.letvimg.com/le-cloud/s-pc-oa/resource/img/201712/1513752125560.jpg@imageview/3/p/100", "https://img3-lemall.letvimg.com/wap/20170405/default/14434802091893746"],
            picTitle: true,//图文详情
            linkageList: ["省份", "城市", "区县"],
            regionData,//省市三级联动
            titleIndex: 0,//=>记录哪个省份被选中
            provinceIndex: 0,//省份index
            cityIndex: 0,//城市index
            areaIndex: 0,//区县index
            selectProvince: null,
            selectCity: null,
            selectArea: null,
            dialogShow: false,//=>显示省市三级联动框
            moren: true,
            endIndex:9
        }
    }
    componentWillMount(){
        document.documentElement.scrollTop=0;
    }
    componentDidMount() {
        window.onscroll = () => {
            let scrollT = document.documentElement.scrollTop;
            if (scrollT > 1220) {
                this.setState({
                    picTitle: false
                })
            } else {
                this.setState({
                    picTitle: true
                })
            }
        }
    }

    render() {

        let {location: {search}, select, dataMall, dataBanner, dataBig, dataFitting, dataHot} = this.props,
            queryObj = Qs.parse(search.substr(1));
        if (!search) return "";
        let {selectProvince, selectCity, selectArea} = this.state;
        let name, bigpic, dec, price;
        //=>分类
        if (queryObj.idlx === "classify") {
            this.state.evaluate=select[parseFloat(queryObj.id) - 1]["comment"];

            name = select[parseFloat(queryObj.id) - 1].name;
            bigpic = select[parseFloat(queryObj.id) - 1].bigpic;
            dec = select[parseFloat(queryObj.id) - 1].dec;
            price = select[parseFloat(queryObj.id) - 1].price
        }
        //=>商城排序
        if (queryObj.idlx === "list") {
            this.state.evaluate=dataMall[parseFloat(queryObj.id) - 1]["comment"];
            name = dataMall[parseFloat(queryObj.id) - 1].title;
            bigpic = dataMall[parseFloat(queryObj.id) - 1].bigpic;
            dec = dataMall[parseFloat(queryObj.id) - 1].describe;
            price = dataMall[parseFloat(queryObj.id) - 1].price
        }
        //=>首页banner
        if (queryObj.idlx === "banner") {
            this.state.evaluate=dataBanner[parseFloat(queryObj.id) - 1]["comment"];
            name = dataBanner[parseFloat(queryObj.id) - 1].name;
            bigpic = dataBanner[parseFloat(queryObj.id) - 1].bigpic;
            dec = dataBanner[parseFloat(queryObj.id) - 1].dec;
            price = dataBanner[parseFloat(queryObj.id) - 1].price
        }
        if (queryObj.idlx === "bigScreen") {
            this.state.evaluate=dataBig[parseFloat(queryObj.id) - 1]["comment"];
            name = dataBig[parseFloat(queryObj.id) - 1].name;
            bigpic = dataBig[parseFloat(queryObj.id) - 1].bigpic;
            dec = dataBig[parseFloat(queryObj.id) - 1].dec;
            price = dataBig[parseFloat(queryObj.id) - 1].price
        }
        if (queryObj.idlx === "fitting") {
            this.state.evaluate=dataFitting[parseFloat(queryObj.id) - 1]["comment"];
            name = dataFitting[parseFloat(queryObj.id) - 1].name;
            bigpic = dataFitting[parseFloat(queryObj.id) - 1].bigpic;
            dec = dataFitting[parseFloat(queryObj.id) - 1].dec;
            price = dataFitting[parseFloat(queryObj.id) - 1].price;
        }
        if (queryObj.idlx === "hotSale") {
            this.state.evaluate=dataHot[parseFloat(queryObj.id) - 1]["comment"];
            name = dataHot[parseFloat(queryObj.id) - 1].name;
            bigpic = dataHot[parseFloat(queryObj.id) - 1].bigpic;
            dec = dataHot[parseFloat(queryObj.id) - 1].dec;
            price = dataHot[parseFloat(queryObj.id) - 1].price
        }
        let size = /(\d)+/g.exec(name) ? /(\d)+/g.exec(name)[0] : "38";
        //=>配送时间
        let date = new Date().toLocaleString().trim();
        date = date.match(/\d+/g);
        return <div className="detailBox">
            {/*回退按钮*/}
            <div className="backButton" onClick={() => {
                this.props.history.go(-1)
            }}>
                <Icon type="left-circle"></Icon>
            </div>
            {/*商品详情轮播图*/}
            <Banner imgData={bigpic}/>
            {/*商品简介*/}
            <div className="intro">
                <h3><span>乐视自营</span>{name}</h3>
                <p>{dec}</p>
                <p className="price">￥{price}</p>
                <div className="linkage">
                    <p>送至:</p>
                    <div className="site">
                        {this.state.moren? <p><span style={{color: "#f05353", fontWeight: "bold"}}>请选择省市县</span></p> :
                            <p><span>{selectProvince}</span>><span>{selectCity}</span>><span>{selectArea}</span>></p>}
                        <p><b>现货,</b>24:00前完成支付，预计({`${date[0]}.${date[1]}.${parseFloat(date[2]) + 2}`})之前发货</p>
                    </div>
                    <div className="detail">
                        <ul className={"clearfix"} onClick={this.clickDialog}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*商品规格*/}
            <div className="specification">
                <p><b>已选</b><span>{name}</span><span>{size}寸</span><span>1件</span></p>
                <div className="clickShow">
                    <div className={this.state.rote === true ? "show" : "unShow"}>
                        <p>型号</p>
                        <span>{name}</span>
                        <p>尺寸</p>
                        <span>{size}寸</span>
                    </div>
                </div>
                <div className="active">
                    <i onClick={this.rotate} className={this.state.rote === true ? "rotateLeft" : "rotateRight"}></i>
                </div>
            </div>
            {/*会员*/}
            <div className="member">
                <div className="title">
                    <p>影视会员</p>
                    <div className="center">超级影视会员({this.state.detail.content}会员)</div>
                    <div className="memberPrice">￥{this.state.detail.price}</div>
                    <i onClick={this.rotate_one}
                       className={this.state.rote_one === true ? "rotateLeft" : "rotateRight"}></i>
                </div>
                <ul className={this.state.rote_one === true ? "show" : "unShow"}>
                    {
                        this.state.memberDiscount.map((item, index) => {
                            return <li key={index}>
                                <div className="memberLeft">
                                    <p>{`超级影视会员(${item.time}会员)x1`}</p>
                                    <p>{item.dec}</p>
                                </div>
                                <div className="memberPrice">￥{item.price}</div>
                                <div className="memberRadio">
                                    <input type="radio" id={`check${index}`} name="member"
                                           onClick={this.checked.bind(this, index)}/>
                                    <label htmlFor={`check${index}`}><Icon type="check"></Icon></label>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
            {/*评估*/}
            <div className="evaluate">
                <div className="title">
                    <p>全部评价({this.state.evaluate.length})</p>
                    <p>好评度<span>95%</span></p>
                    <i></i>
                </div>
                {
                    this.state.evaluate.slice(0,this.state.endIndex).map((item, index) => {
                        return <div className="evaluateDetail" key={index}>
                            <div className="person">
                                <div className="icon">
                                    <img src="http://img1-lemall.letvimg.com/wap/20150701/default/1094985529810084"
                                         alt=""/>
                                </div>
                                <div className="name">
                                    <span>{item.userName}</span>
                                </div>
                                <div className="star">
                                    <ul className="gray">
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                    </ul>
                                    <ul className="yellow" style={{width: item.evaluate}}>
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                        <li><Icon type="star"/></li>
                                    </ul>
                                </div>
                            </div>
                            <p>{item.content}</p>
                            <span>{item.time}</span>
                        </div>
                    })
                }
                <div className="more">
                    <span onClick={this.loadingMore}>查看更多评价</span>
                </div>
            </div>
            {/*图文详情*/}
            <div className="picDetail">
                <div className={this.state.picTitle ? "picTitle" : "picTitleFix"}><span>图文详情</span></div>
                {
                    this.state.img.map((item, index) => {
                        return <p key={index}><img src={item} alt=""/></p>
                    })
                }
            </div>
            {/*加入购物车*/}
            <div className="add">
                <div className="shoppingCartIcon"><Link to={"/shopCart"}><Icon type="shopping-cart"></Icon>
                    <p>{this.props.Cart.length}</p></Link></div>
                <div className="addCart" onClick={this.addCart}>加入购物车</div>
            </div>
            {/*弹出框*/}
            <div ref={x => this.alertBox = x} className={"alertUnshow"}>
                {this.props.addBack ? "请稍后重试" : "商品已加入购物车"}
            </div>
            {/*省市三级联动*/}
            <div className={this.state.dialogShow ? "dialog showDialog" : "dialog"}></div>
            <div className={this.state.dialogShow ? "linkageBox showLinkageBox" : "linkageBox"}>
                <div className="title">
                    <h2>配送至</h2>
                    <Icon type="close" onClick={this.dialogClose}></Icon>
                </div>
                <div className="content">
                    <h3>
                        {this.state.linkageList.map((item, index) => {
                            return <span key={index} className={this.state.titleIndex === index ? "active" : ""}
                                         onClick={this.handleTitle.bind(this, index)}>{item}</span>
                        })}

                    </h3>
                    <div className="list">
                        <ul className={this.state.titleIndex === 0 ? "choose" : ""}>
                            {this.state.regionData.map((item, index) => {
                                return <li className={this.state.provinceIndex === index ? "choose" : ""} key={index}
                                           onClick={this.handleProvince.bind(this, index, item.name)}>{item.name}</li>
                            })}

                        </ul>
                        <ul className={this.state.titleIndex === 1 ? "choose" : ""}>
                            {this.state.regionData[this.state.provinceIndex]["city"].map((item, index) => {
                                return <li key={index} className={this.state.cityIndex === index ? "choose" : ""}
                                           onClick={this.handleCity.bind(this, index, item.name)}>{item.name}</li>
                            })}
                        </ul>
                        <ul className={this.state.titleIndex === 2 ? "choose" : ""}>
                            {this.state.regionData[this.state.provinceIndex]["city"][this.state.cityIndex]["area"].map((item, index) => {
                                return <li key={index} className={this.state.areaIndex === index ? "choose" : ""}
                                           onClick={this.handleArea.bind(this, index, item)}>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }

    rotate = (ev) => {
        this.setState({
            rote: !this.state.rote
        })
    };
    rotate_one = () => {
        this.setState({
            rote_one: !this.state.rote_one
        })
    };
    checked = (index) => {
        this.setState({
            detail: {
                content: this.state.memberDiscount[index]["time"],
                price: this.state.memberDiscount[index]["price"]
            }
        })
    };
    addCart = async () => {
        if (this.isRun) return;
        this.isRun = true;
        let {location, add} = this.props;
        let obj = Qs.parse(location.search.substr(1));
        await this.props.add(obj);
        let all = [...this.props.select, ...this.props.dataBanner, ...this.props.dataHot, ...this.props.dataBig, ...this.props.dataFitting];
        let data = all.find((item) => {
            return parseFloat(item.id) === parseFloat(obj.id) && item.idlx === obj.idlx;
        });
        this.props.classify_cart(data);
        this.alertBox.classList.add("alertBox");
        this.timer = setTimeout(() => {
            this.alertBox.classList.remove("alertBox");
            this.isRun = false;
        }, 10);
    }


    handleTitle = (index) => {
        this.setState({
            titleIndex: index
        })
    };
    handleProvince = (index, province) => {
        this.setState({
            provinceIndex: index,
            titleIndex: 1,
            selectProvince: province
        })
    };
    handleCity = (index, city) => {
        this.setState({
            cityIndex: index,
            titleIndex: 2,
            selectCity: city
        })
    };
    handleArea = (index, item) => {
        this.setState({
            areaIndex: index,
            selectArea: item,
            dialogShow: false,
            moren: false
        })
    };
    clickDialog = () => {
        this.setState({
            dialogShow: true
        })
    };
    dialogClose = () => {
        this.setState({
            dialogShow: false,
            moren: false
        })
    };
    loadingMore=()=>{
        this.setState({
            endIndex:this.state.endIndex+10
        })
}
}


export default connect(state => ({...state.detail, ...state.select, ...state.shopCart, ...state.home}), {...action.detail, ...action.shopCart})(Detail);

