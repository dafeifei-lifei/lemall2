import React from 'react'
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
import television from '../../static/json/television.json'
import {Icon, Input, Button} from 'antd';
import action from "./../../store/action/index.js"

class Television extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLoad: false,//=>判断数据是否加载出来
            clickIndex: 0,
            data: ["全部", "最新", "价格", "评价数", "筛选"],
            priceUpDown: true,
            evaluateUpDown: true,
            loading: false,//=>按钮
            page: 0,
        };
    }

    async componentDidMount() {
        if (this.state.isLoad === false && this.props.dataMall.length === 0) {
            await this.props.querySort({limit: 10, page: this.state.page + 1});
            this.dataMall = this.props.dataMall;
        }
        this.dataMall=this.props.dataMall;
        this.setState({
            isLoad: true,
            page: this.state.page + 1
        });

    }

    render() {
        if (!this.state.isLoad) return "";
        let {clickIndex, data, priceUpDown, evaluateUpDown} = this.state;
        return <div className='television'>
            <header className="title">
                <Link to="/home"><Icon type="left" className="goback"/></Link>
                <div className='search'>
                    <span><Icon type="search"/></span>
                    <input type="text" placeholder="输入搜索产品"/>
                    <span><Icon type="close-circle-o"/></span>
                </div>
            </header>
            <div className="select">
                <ul>
                    {
                        data.map((item, index) => {
                            return <li onClick={this.handleClick.bind(this, index)}>
                                <a href="javascript:;"
                                   className={clickIndex === index ? "active" : ""}>{item}{index === 2 ?
                                    <Icon type={priceUpDown ? "arrow-up" : "arrow-down"}/> : (index === 3 ?
                                        <Icon type={evaluateUpDown ? "arrow-up" : "arrow-down"}/> : "")}</a>
                            </li>
                        })

                    }
                </ul>
            </div>
            <div className="list">
                {
                    this.dataMall.map((item, index) => {
                        let {smallpic, bigpic, describe, price, time, title, type, typeName, evaluate,id,idlx} = item;
                        return <Link to={`/detail/?idlx=${idlx}&id=${id}`}>
                            <div className="listDetail" key={index}>
                                <div className="listLeft">
                                    <img src={smallpic} alt={title}/>
                                    {parseFloat(type) !== 0 ? <div className="rightTop">
                                        <span><em>{typeName}</em></span>
                                        <i></i>
                                    </div> : ""}
                                </div>
                                <div className="listRight">
                                    <div className="top">
                                        <p>{title}</p>
                                        <p>{describe}</p>
                                        <p>上市时间：{time}</p>
                                    </div>
                                    <div className="bottom">
                                        <p className="price"><span>￥</span>{parseFloat(price).toFixed(2)}</p>
                                        <div>
                                            <ul className="gray">
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                            </ul>
                                            <ul className="yellow" style={{width: evaluate}}>
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                                <li><Icon type="star"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    })
                }
            </div>
            <Button type="default" loading={this.state.loading} onClick={this.enterLoading}>
                {this.state.page >= 10 ? "没有更多了哦！" : "加载更多"}
            </Button>
        </div>
    }

    handleClick = (index) => {
        let {dataPriceUp, dataEvaluateUp, dataTime, dataAll, dataPriceDown, dataEvaluateDown} = this.props;
        //=>排序
        if (index === 3) {
            !this.state.evaluateUpDown ? this.dataMall = dataEvaluateUp : this.dataMall = dataEvaluateDown;
            this.setState({
                clickIndex: index,
                evaluateUpDown: !this.state.evaluateUpDown
            })
        }
        if (index === 2) {
            !this.state.priceUpDown ? this.dataMall = dataPriceUp : this.dataMall = dataPriceDown;
            this.setState({
                clickIndex: index,
                priceUpDown: !this.state.priceUpDown
            })
        }
        if (index === 0) {
            this.dataMall = this.props.dataAll
        }
        if (index === 1) {
            this.dataMall = this.props.dataTime
        }
        this.setState({
            clickIndex: index
        });
    };
    enterLoading = async () => {
        if (this.state.page >= 10) return;
        this.setState({
            loading: !this.state.loading
        });
        await this.props.querySort({limit: 10, page: this.state.page + 1});
        if (this.state.clickIndex === 0) {
            this.dataMall = this.props.dataAll
        }
        if (this.state.clickIndex === 1) {
            this.dataMall = this.props.dataTime
        }
        if (this.state.clickIndex === 2) {
            this.state.priceUpDown ? this.dataMall = this.props.dataPriceUp : this.dataMall = this.props.dataPriceDown;
        }
        console.log(this.state.priceUpDown);
        if (this.state.clickIndex === 3) {
            this.state.evaluateUpDown ? this.dataMall = this.props.dataEvaluateUp : this.dataMall = this.props.dataEvaluateDown;

        }
        this.setState({
            page: this.state.page + 1,
            loading: !this.state.loading
        })
    }
}

export default connect(state => ({...state.home}), action.home)(Television)


