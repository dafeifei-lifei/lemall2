import React from "react"
import {connect} from "react-redux"
import {Icon,Button} from "antd"
import action from "../../store/action/index.js"
import md5 from "blueimp-md5"
import axios from "./../../api/index.js"
class Register extends React.Component{
    constructor(){
        super();
        this.state = {
            isShow: false,
            tip:"请输入正确的用户名！",
            pass:false
        }
    }
    render(){
        return <div className="registerBox">
            <div className={this.state.isShow ? "tipShow" : "tip"}>
                <span>{this.state.tip}</span>
            </div>
            <div className="close" onClick={()=>{this.props.history.push("/personal")}}><Icon type="close"></Icon></div>
            <div className="title">
                <div className="logo">
                    <img src="http://i2.letvimg.com/lc04_img/201803/12/17/36/CNlogo2x.png" alt=""/>
                </div>
                <p>一个帐号玩转所有乐视服务</p>
            </div>
            <div className="loginMessage" onBlur={this.tip}>
                <div className="userName">
                    <Icon type="user"></Icon>
                    <input type="text" placeholder="姓名" ref="name"/>
                </div>
                <div className="email">
                    <Icon type="mail"></Icon>
                    <input type="email" placeholder="请输入正确格式的邮箱" ref="email"/>
                </div>
                <div className="phone">
                    <Icon type="phone"></Icon>
                    <input type="email" placeholder="请输入正确的电话" ref="phone"/>
                </div>
                <div className="userPassword">
                    <Icon type="lock"></Icon>
                    <input type={this.state.pass?"text":"password"} placeholder="请设置8位验证密码" ref="password"/>
                    <Icon type={this.state.pass?"eye":"eye-o"} onClick={()=>{
                        this.setState({
                            pass:!this.state.pass
                        })
                    }}></Icon>
                </div>
            </div>
            <div className="checkIn">
                <div>
                    <img src="https://i2.letvimg.com/lc02_iscms/201510/12/18/40/68f6330f9aca42db8e89c70fc459e28b.png" alt=""/>
                    <span>我已阅读并同意</span>
                    <b>乐视用户协议</b>
                </div>
                <Button type="primary" onClick={this.handleRegister}>注册</Button>
                <p><Icon type="mail"></Icon>短信验证</p>
            </div>
            <div className="bottom">
                <p>语言:简体中文 国家/地区:中国</p>
                <p>客服电话:10109000</p>
            </div>
        </div>
    }
    handleRegister=async ()=>{
        let {name,email,phone,password}=this.refs,
            nameValue=name.value,
            emailValue=email.value,
            phoneValue=phone.value,
            passwordValue=password.value;
        if(!nameValue || !emailValue ||!phoneValue ||!passwordValue){
            this.setState({
                isShow:!this.state.isShow,
                tip:"请设置完整信息！"
            });
            name.Value=email.Value=phone.Value=password.Value="";
            setTimeout(()=>{
                this.setState({
                    isShow:!this.state.isShow
                });
            },1500);

            return;
        }
            passwordValue=md5(passwordValue);
        console.log(nameValue, passwordValue, phoneValue, emailValue);
        await this.props.register({name:nameValue,password:passwordValue,phone:phoneValue,email:emailValue});
        name.value=email.value=phone.value=password.value="";
        if(this.props.isRegister){
            this.props.keepUserName(nameValue);
            this.props.history.push("/personal");

        }else{
            this.setState({
                isShow:!this.state.isShow,
                tip:"注册失败，请稍后重试！"
            });
            setTimeout(()=>{
                this.setState({
                    isShow:!this.state.isShow
                });
            },1500);
        }
    };

    tip=(ev)=>{
        let target=ev.target,
            parClass=target.parentNode.className,
            _this=this;
        if(parClass==="userName"&&target.value) {
            async function fn() {
                    let result = await axios.get("/personal/checkingName", {
                        params: {
                            name: target.value
                        }
                    });
                    if (parseFloat(result.code) === 1) {
                        _this.setState({
                            isShow: !_this.state.isShow,
                            tip: result.data
                        });
                        target.value = "";
                        setTimeout(() => {
                            _this.setState({
                                isShow: !_this.state.isShow
                            });
                        }, 2000);
                    }
            }
            fn();
        }
        if(parClass==="email"&&target.value){
            if(!/^\w+((-\w+)|(.\w+))@[A-Za-z0-9)]+([-.][A-Za-z0-9]+)*(\.[A-Za-z0-9]+)$/i.test(target.value)){

                this.setState({
                    isShow:!this.state.isShow,
                    tip:"请使用正确的邮箱！"
                });
                target.value = "";
                setTimeout(()=>{
                    this.setState({
                        isShow:!this.state.isShow
                    });
                },2000);
            }
        }
        if(parClass==="phone"&&target.value){
            async function fn() {
                if(/^\d{11}$/i.test(target.value)){
                    let result=await axios.get("/personal/checkingPhone",{
                        params:{
                            phone:target.value
                        }
                    });
                    if(parseFloat(result.code)===1){
                        _this.setState({
                            isShow:!_this.state.isShow,
                            tip:result.data
                        });
                        target.value = "";
                        setTimeout(()=>{
                            _this.setState({
                                isShow:!_this.state.isShow
                            });
                        },2000);
                    }
                }else {
                    _this.setState({
                        isShow:!_this.state.isShow,
                        tip:"请使用正确的电话！"
                    });
                    target.value = "";
                    setTimeout(()=>{
                        _this.setState({
                            isShow:!_this.state.isShow
                        });
                    },2000);
                }
            }
            fn();
        }
        if(parClass==="userPassword"&&target.value){
            if(!/^\d{8}$/i.test(target.value)){
                this.setState({
                    isShow:!this.state.isShow,
                    tip:"请设置8位密码！"
                });
                target.value = "";
                setTimeout(()=>{
                    this.setState({
                        isShow:!this.state.isShow
                    });
                },2000);
            }
        }

    }
}
export default connect(state=>({...state.personal}),action.personal)(Register);