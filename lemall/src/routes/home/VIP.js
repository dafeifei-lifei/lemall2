import React from 'react'
import {connect} from 'react-redux'
import television from '../../json/television'

export default class VIP extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return <div className={'VIPBox'}>
            <div className={'VIPTitle'}>
                <img src="https://img1-lemall.letvimg.com/file/20161018/default/2873083648179928" alt=""/>
                <img src="https://img1-lemall.letvimg.com/wap/20160323/default/5377119576906302" alt=""/>
            </div>
            <div className="VIPCont">
                <div className={'title'}>
                    <h3>超级影视会员</h3>
                    <p>适用于乐视超级电视、智能家庭中心 屏霸、乐视盒子、手机、电脑、平板电脑</p>
                </div>
                <div className={'price'}>
                    <ul className={'clearfix'}>
                        <li>
                            <p style={{color:'red', fontSize:'.5rem'}}>￥49</p>
                            <p>1个月</p>
                        </li>
                        <li>
                            <p style={{color:'red', fontSize:'.5rem'}}>￥145</p>
                            <p>3个月</p>
                        </li>
                        <li>
                            <p style={{color:'red', fontSize:'.5rem'}}>￥490</p>
                            <p>1年</p>
                        </li>
                    </ul>
                </div>
                <div className={'VIPeEquity'}>
                    <h3>会员权益</h3>
                    <ul className={'clearfix'}>
                        <li>
                            <img src="https://img1-lemall.letvimg.com/wap/20160325/default/5559262053870908" alt=""/>
                            <p>热门影视</p>
                        </li>
                        <li>
                            <img src="https://img3-lemall.letvimg.com/le-cloud/20180314-5638df27-d6a2-44db-b663-40d48e8229ed.png" alt=""/>
                            <p>海量内容</p>
                        </li>
                        <li>
                            <img src="https://img1-lemall.letvimg.com/wap/20160325/default/5559262240083295" alt=""/>
                            <p>智能加速</p>
                        </li>
                        <li>
                            <img src="https://img2-lemall.letvimg.com/le-cloud/resource/images/lemall/image/product/leshivip/m/leshivip02.png" alt=""/>
                            <p>五屏场景</p>
                        </li>
                        <li>
                            <img src="https://img1-lemall.letvimg.com/wap/20160325/default/5559262432232346" alt=""/>
                            <p>跳过广告</p>
                        </li>
                    </ul>
                </div>
                <div className={'poster'}>
                    <h3>乐视影视会员专享</h3>
                    <ul className={'clearfix'}>
                        <li>
                            <img src="https://img1-lemall.letvimg.com//wap/20170512/default/17621406245247368" alt=""/>
                            <p>白鹿原</p>
                        </li>
                        <li>
                            <img src="https://img2-lemall.letvimg.com//wap/20170512/default/17621429398513446" alt=""/>
                            <p>欢乐颂2</p>
                        </li>
                        <li>
                            <img src="https://img2-lemall.letvimg.com//wap/20170704/default/1814844778596446" alt=""/>
                            <p>复合大师</p>
                        </li>
                        <li>
                            <img src="https://img0-lemall.letvimg.com//wap/20170522/default/18506383829249201" alt=""/>
                            <p>长城</p>
                        </li>
                        <li>
                            <img src="https://img1-lemall.letvimg.com//wap/20170623/default/884308387280896" alt=""/>
                            <p>特工皇妃楚乔传</p>
                        </li>
                        <li>
                            <img src="https://img2-lemall.letvimg.com//wap/20170623/default/884160520186869" alt=""/>
                            <p>呼啸而过的青春</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
}



