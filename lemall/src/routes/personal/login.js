import React from "react"
import {connect} from "react-redux"
import {Icon, Button} from "antd"
import {Link} from "react-router-dom"
import md5 from "blueimp-md5"
import action from "../../store/action/index.js"

class Login extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <div className="loginBox">
            <div className="close" onClick={()=>{this.props.history.push("/personal")}}><Icon type="close"></Icon></div>
            <div className="title">
                <div className="logo">
                    <img src="http://i2.letvimg.com/lc04_img/201803/12/17/36/CNlogo2x.png" alt=""/>
                </div>
                <p>一个帐号玩转所有乐视服务</p>
            </div>
            <div className="loginMessage">
                <div className="userName">
                    <Icon type="user"></Icon>
                    <input type="text" placeholder="邮箱/电话" ref="userName"/>
                </div>
                <div className="userPassword">
                    <Icon type="lock"></Icon>
                    <input type="password" placeholder="密码" ref="password"/>
                    <Icon type="eye-o"></Icon>
                </div>
            </div>
            <div className="checkIn">
                <Button type="primary" onClick={this.handleLogin}>登录</Button>
                <div>
                    <span>短信验证码登录</span>
                    <span>重置密码</span>
                </div>
            </div>
            <div className="bottom">
                <p>从这里出发，开启乐视生态世界 <Link to="/personal/register"><span>立即注册</span></Link></p>
                <div className="other"><span></span><b>其他方式登录</b><span></span></div>
                <div className="logo">
                    <div>
                        <a href="javascript:;"><img
                            src="https://i1.letvimg.com/lc02_iscms/201601/08/17/00/9574f0c68c0a45e8be319cddbb988bba.png"
                            alt=""/></a>
                    </div>
                    <div>
                        <a href="javascript:;"><img
                            src="https://i2.letvimg.com/lc04_iscms/201601/08/17/00/06f459f0af924694bc362a37b487fed4.png"
                            alt=""/></a>
                    </div>

                </div>
                <div className="language">
                    <p>语文:简体中文 国家/地区:中国</p>
                    <p>客服电话:1010 9000</p>
                </div>
            </div>
        </div>
    }

    handleLogin = async () => {
        let {userName, password: passValue} = this.refs,
            name = userName.value,
            password = md5(passValue.value);

        if(!name || !passValue.value){
            alert("请输入用户名或密码");
            return;
        }
        await this.props.logining({name, password});
        userName.value=passValue.value="";
        if(this.props.loginRun){
            this.props.keepUserName(name);
            this.props.history.go(-1);
        }else {
            alert("用户名不存在，请稍后重试")
        }
    }
}

export default connect(state => ({...state.personal}), action.personal)(Login);