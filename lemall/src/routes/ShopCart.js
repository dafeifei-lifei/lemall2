import React from "react"
import {connect} from "react-redux"
import {Icon,Alert} from "antd"
import "../static/css/shopCart.less"
import "../static/css/reset.min.css"
import action from "../store/action"
import {payShopCart} from "../api/shopCart";
import {checkLogin} from "../api/personal";



class ShopCart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            state:this.props.shopCart.state,
            count:1,
            first:0,
            price:0,
            allPrice:0
        }
    }

    async componentDidMount(){
        let result = await checkLogin();
        if (parseFloat(result.code) === 0) {
            await this.props.queryUnpay("classify");
            await this.props.addShop(this.props.Cart);
            console.log(this.props.shopCart.unpay);
        }else if(this.props.shopCart.unpay.length===0){
        this.props.addShop(this.props.Cart);
        }
        this.setState({
            first:1
        })
    }

    render() {
        console.log(this);
        let {count,state,checkAll,unpay} = this.props.shopCart;
        // let {Cart,shopCart:[unpay]} =this.props;
        // console.log(Cart,unpay);
        // let allShop = [...Cart,...unpay];
         console.log(unpay);


        return <div className={"shopCartBox"}>
            <div className={"shopHead"}>
                <Icon type="left" onClick={() => this.props.history.go(-1)}/>
                <span>购物车</span>
                <Icon type="form"/>
            </div>
            {unpay.length===0?<Alert type="warning" description="当前还没有任何课程，快去购买吧"/>:null}
            {unpay.map((item,index)=>{
                let {name,smallpic,price,dec,check,id,idlx} = item;
                console.log(name);
                return <div className={"shopBody"} key={index}>
                    <div><span>乐视自营</span></div>
                    <div>
                        <div className={"select_check"}>
                            {/*checked={!!state}*/}
                            <input type={"checkbox"} id={"ipt"}  checked={check}  />
                            <label htmlFor={"ipt"} onClick={this.props.handleSelect.bind(this,id)}><Icon type={"check"} /></label>
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
                            <span className={"span1"}>¥{price*this.state.count}</span>
                            <p>
                                <span onClick={this.minus.bind(this,id,idlx,index)}><Icon type="minus"/></span>
                                <span>1</span>
                                <span ref={index} onClick={this.plus.bind(this,id,idlx,index)} ><Icon type="plus"/></span>
                            </p>
                        </div>
                    </div>
                </div>
            })}



            <div className={"shopFooter"}>
                 <div className="shopFooter-left">
                     <input type={"checkbox"} id={"iptAll"} checked={this.props.selectAll} />
                     <label htmlFor={"iptAll"} onClick={this.props.handleSelect.bind(this,"all")}><Icon type={"check"} /></label>
                     <span >全选</span>
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
                    <a href="javascript:;" onClick={this.handlePay}>去结算</a>
                </div>
            </div>


        </div>
    }

    minus= async (id,idlx,index)=>{
        // let {count,state} =  this.props.shopCart;
        // if(count<1){
        //     return;
        // }
        // count-=1;
        // this.props.shopCartCount(count,state);
        await this.props.add({id:id,idlx:idlx});
        // this.setState({
        //     count:this.state.count+1
        // });
        if(this.refs[index].previousSibling.innerHTML<=1)return;
        this.refs[index].previousSibling.innerHTML=parseFloat(this.refs[index].previousSibling.innerHTML)-1;
        this.setState({
            count:this.refs[index].previousSibling.innerHTML
        })

    }

    plus= async (id,idlx,index) =>{
        await this.props.add({id:id,idlx:idlx});
        // this.setState({
        //     count:this.state.count+1
        // });
        this.refs[index].previousSibling.innerHTML=parseFloat(this.refs[index].previousSibling.innerHTML)+1;
        console.log(id,idlx);
        this.setState({
            count:this.refs[index].previousSibling.innerHTML
        })

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

  

    handlePay = async () => {
        //=>验证当前是否登录
        let result = await checkLogin();
        if (parseFloat(result.code) !== 0) {
            alert('请先登录');
            return;
        }

        
        //=>获取所有被选中的存储ID
        let selectIDList = [];
        this.props.shopCart.unpay.forEach(item => {
            if (item.check) {
                selectIDList.push({storeID:item.storeID,idlx:item.idlx});
            }
        });
        console.log(selectIDList);

        if (selectIDList.length === 0) {
            alert('没有要被结算的订单!');
            return;
        }
        console.log(selectIDList);
        selectIDList = selectIDList.map(({storeID,idlx}={}) => {
            console.log(storeID,idlx);
            return payShopCart(storeID,idlx);
        });
        Promise.all(selectIDList).then(() => {
            console.log(1);
            this.props.queryUnpay("classify");
            this.props.queryPay("classify");
        });
    }

}

export default connect(state=>({
    ...state.shopCart,
    ...state.detail
}),{...action.shopCart,...action.detail})(ShopCart);