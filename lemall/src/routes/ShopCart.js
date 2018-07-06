import React from "react"
import {connect} from "react-redux"
import {Icon} from "antd"
import "../static/css/shopCart.less"
import "../static/css/reset.min.css"
import action from "../store/action"
import {payData} from "../api/shopCart";

class ShopCart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            state:this.props.shopCart.state
        }
    }

    render() {
        console.log(this);
        let {count,state,checkAll} = this.props.shopCart;
        let {Cart} =this.props;
        console.log(this.props);

        return <div className={"shopCartBox"}>
            <div className={"shopHead"}>
                <Icon type="left" onClick={() => this.props.history.go(-1)}/>
                <span>购物车</span>
                <Icon type="form"/>
            </div>

            {Cart.map((item,index)=>{
                let {name,smallpic,price,dec} = item;
                console.log(smallpic);
                return <div className={"shopBody"}>
                    <div><span>乐视自营</span></div>
                    <div>
                        <div className={"select_check"}>
                            <input type={"checkbox"} id={"ipt"} checked={!!state} onClick={this.select}/>
                            <label htmlFor={"ipt"}><Icon type={"check"}/></label>
                        </div>
                        <div>
                            <a><img
                                src={smallpic}
                                alt={dec}/></a>
                            <div className={"shop"}>
                                <span>{dec}</span>
                                <span>(一个月会员)</span>
                                <span>{name} 55吋</span>
                            </div>
                        </div>
                        <div>
                            <span className={"span1"}>¥{price*count}</span>
                            <p>
                                <span onClick={this.minus}><Icon type="minus"/></span>
                                <span>{count}</span>
                                <span onClick={this.plus}><Icon type="plus"/></span>
                            </p>
                        </div>
                    </div>
                </div>
            })}



            <div className={"shopFooter"}>
                 <div className="shopFooter-left">
                     <input type={"checkbox"} id={"iptAll"} checked={checkAll}/>
                     <label htmlFor={"iptAll"}><Icon type={"check"}/></label>
                     <span>全选</span>
                 </div>
                <div className="shopFooter-mid clearfix">
                     <h4 className="shopFooter-mid-t">
                         <span>商品总额</span>
                         <i>¥0.00</i>
                     </h4>
                    <h4 className="shopFooter-mid-b">
                        <span>商品总额</span>
                        <i>¥0.00</i>
                        <em>不含运费</em>
                    </h4>
                </div>
                <div className="shopFooter-right">
                    <a href="javascript:;" onClick={this.pay}>去结算</a>
                </div>
            </div>


        </div>
    }

    minus=()=>{
        let {count,state} =  this.props.shopCart;
        if(count<1){
            return;
        }
        count-=1;
        this.props.shopCartCount(count,state);


    }

    plus=()=>{
        let {count,state} =  this.props.shopCart;
        count+=1;
        this.props.shopCartCount(count,state);

    }

    select=()=>{
        let {count} = this.props.shopCart;
        console.log(this.state.state);
        let tongbuState=this.state.state==1?0:1;
        this.setState({
            state:this.state.state==1?0:1
        });
        this.props.shopCartCount(count,tongbuState);
    }

    pay=async ()=>{
        let result = await payData({idlx:"classify",storeID:2});
        if(result.code===0){
            alert("支付成功");
        }
        window.location.href = "#/home";
    }



}

export default connect(state=>({
    ...state.shopCart,
    ...state.detail
}),action.shopCart)(ShopCart);