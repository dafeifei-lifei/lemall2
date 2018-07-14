import React from "react"
import {connect} from "react-redux"
import {Icon,Alert,Button} from "antd"
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
            first:0,
            price:0,
            count:1,
            nowPrice:0 ,
            flag:true, //是否从后台获取数据
            dialog:false,
            allPrice:0.00
        }
    }

    async componentDidMount(){
        document.documentElement.scrollTop=0;
        let result = await checkLogin();
            if(this.props.shopCart.unpay.length<this.props.Cart.length) {
                this.props.addShop(this.props.Cart.slice(this.props.shopCart.unpay.length));
           }
    }

    render() {
        let {count,state,checkAll,unpay} = this.props.shopCart;
        let obj = {},cur={};
        for(let i=0;i<unpay.length;i++){
            cur = {id:unpay[i].id,idlx:unpay[i].idlx};
            if(obj[cur.id+cur.idlx]){
                obj[cur.id+cur.idlx]++;
            }else{
                obj[cur.id+cur.idlx]=1;
            }
        }
        let newunpay = [];
        for (let attr in obj){
            newunpay.push(
                unpay.find((item,index)=>{

                    if(parseFloat(item.id)===parseFloat(attr)&&item.idlx===/[a-zA-Z]+/g.exec(attr)[0]){
                        item.count = parseInt(obj[attr]);
                        return true;
                    }
                 })
            );
        }
        unpay = newunpay;
        return <div className={"shopCartBox"}>
            <div className={this.state.dialog?'dialogShoe':"dialog"}></div>

            <div className={"shopHead"}>
                <Icon type="left" onClick={() => this.props.history.go(-1)}/>
                <span>购物车</span>
                <Icon type="form"/>
            </div>
            {unpay.length===0?<Alert type="warning" description="当前还没有任何课程，快去购买吧"/>:null}

            {unpay.map((item,index)=>{
                let {name,smallpic,price,dec,check,id,idlx,count} = item;
                if(item.describe){
                    dec = item.describe;
                }
                return <div className={"shopBody"} key={index}>
                    <div>
                        <span>乐视自营</span>
                        <div></div>
                        <Icon type='close' classNam='close' onClick={this.removeThis.bind(this,id,idlx,index,count,price)}></Icon>
                    </div>
                    <div className="content">
                        <div className={"select_check"}>
                            <input type={"checkbox"} id={"ipt"}  checked={check}/>
                            <label htmlFor={"ipt"} onClick={this.props.handleSelect.bind(this,id,idlx)}><Icon type={"check"} /></label>
                        </div>
                        <div>
                            <a><img
                                src={smallpic}
                                alt={dec}/></a>
                            <div className={"shop"}>
                                <span>{name}</span>
                                <span>{dec}</span>
                            </div>
                        </div>
                        <div>
                            <span className={"span1"}>¥{count*price}</span>
                            <p>
                                <span onClick={this.minus.bind(this,id,idlx,index,count,price)}><Icon type="minus"/></span>
                                <span ref={"value"+id+idlx} id={index}>{count}</span>
                                <span ref={index} onClick={this.plus.bind(this,id,idlx,index,count,price)} ><Icon type="plus"/></span>
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

    removeThis= async (id,idlx,index,count,price)=>{

        for(let i=0;i<count;i++){
            await this.props.remove({id:id,idlx:idlx});
            let all = [...this.props.select,...this.props.dataBanner,...this.props.dataHot,...this.props.dataBig,...this.props.dataFitting];
            let data = all.find((item) => {
                return parseFloat(item.id) === parseFloat(id) && item.idlx === idlx;
            });
            this.props.classify_cart_remove(data);

            this.props.removeShop(data);
        }
    };

    minus= async (id,idlx,index,count,price)=>{
        if( this.refs["value"+id+idlx].innerHTML<=1)return;

        await this.props.remove({id:id,idlx:idlx});

        let all = [...this.props.select,...this.props.dataBanner,...this.props.dataHot,...this.props.dataBig,...this.props.dataFitting];
        let data = all.find((item) => {
            return parseFloat(item.id) === parseFloat(id) && item.idlx === idlx;
        });
        this.props.classify_cart_remove(data);
        this.refs["value"+id+idlx].innerHTML=parseInt(this.refs["value"+id+idlx].innerHTML)-1;
        this.props.removeShop(data);
    };

    plus= async (id,idlx,index,count,price) =>{
        await this.props.add({id:id,idlx:idlx});

        let all = [...this.props.select,...this.props.dataBanner,...this.props.dataHot,...this.props.dataBig,...this.props.dataFitting];
        let data = all.find((item) => {
            return parseFloat(item.id) === parseFloat(id) && item.idlx === idlx;
        });
        this.props.classify_cart(data);
        this.refs["value"+id+idlx].innerHTML=parseInt(this.refs["value"+id+idlx].innerHTML)+1;


        this.props.addShop(data);

        // this.setState({
        //     count:this.refs["value"+id+idlx].innerHTML,
        // })
    };

    select=()=>{
        let {count} = this.props.shopCart;
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
            this.props.history.push("/personal/login");
            return;
        }


        //=>获取所有被选中的存储ID
        let selectIDList = [];
        this.props.shopCart.unpay.forEach(item => {
            if (item.check) {
                selectIDList.push({storeID:item.id,idlx:item.idlx});
            }
        });
        if (selectIDList.length === 0) {
            alert('没有要被结算的订单!');
            return;
        }

        selectIDList.forEach(({storeID,idlx}={},index) => {
            setTimeout(()=>{
                payShopCart(storeID,idlx);
            },40*index);
        });

        setTimeout( async ()=>{
            let canshu = ["banner","hotSale","bigScreen","fitting","list","classify"];
            await this.props.queryUnpay(canshu);
            await this.props.queryPay(canshu);
            this.props.classify_cart("shanchu");
        },500);
    }

}

export default connect(state=>({
    ...state.shopCart,
    ...state.detail,
    ...state.home,
    ...state.select
}),{...action.shopCart,...action.detail,...action.detail})(ShopCart);