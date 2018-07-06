import React from 'react'

import {Icon, Carousel} from 'antd'

export default class Letv extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className={'LetvBox'}>
            <header>
                <p><Icon type={'menu-unfold '}/>Letv乐迷社区</p>
            </header>
            <div className={'nav'}>
                <span>首页</span>
                <span>电视</span>
                <span>客服</span>
                <span>同城</span>
            </div>
            <div className={'banner'}>
                <Carousel autoplay>
                    <img src="https://i0.letvimg.com/lc03_lemi/201806/19/17/13/5b28c93062a9e.jpg" alt=""/>
                    <img src="https://i0.letvimg.com/lc03_lemi/201806/15/11/11/5b232e4b0c499.jpg" alt=""/>
                    <img src="https://i3.letvimg.com/lc03_lemi/201805/28/14/19/5b0b9f6b9ff9e.jpg" alt=""/>
                    <img src="https://i2.letvimg.com/lc04_lemi/201805/11/19/21/5af57c9ceb10d.jpg" alt=""/>
                </Carousel>
            </div>
            <div className={'list'}>
                <h3 className={'h'}><b>推荐话题</b></h3>
                <ul>
                    <li>
                        <img src="https://i0.letvimg.com/lc05_lemi/201805/28/17/49/5b0bd04d8050b.jpg" alt=""/>
                        <div>
                            <h3>《超级片单》天天有剧刷 5月28日~6月3日精彩不断</h3>
                            <p>
                                每日片单星期一（5月28日）电视剧：09：00《西部世界 第二季》18：00《她很漂亮》20：00《萌妻食神》20：00</p>
                        </div>

                    </li>
                    <li>
                        <img src="https://i1.letvimg.com/lc05_lemi/201805/14/15/50/5af93fc3a3000.jpg" alt=""/>
                       <div> <h3>【图说超级电视】0514期 还你一个绚丽多彩的世界！</h3>
                           <p>还你一个绚丽多彩的世界只因不断革新的画质处理技术------HDR 4k超高清A+级屏幕 极色炫彩画质引擎 &nb</p></div>
                    </li>
                    <li>
                        <img src="https://i3.letvimg.com/lc03_lemi/201805/25/19/29/5b07f39414369.jpg" alt=""/>
                       <div> <h3>《超级片单》天天有剧刷0525/26/27期 现在朝那地平线出发！</h3>
                           <p>因为地平线一直在那。你想到达那儿，但你永远到达不了。就是那样，遥不可及难以放弃。”Johnny说看过的一</p></div>
                    </li>
                    <li>
                        <img src="https://i2.letvimg.com/lc05_lemi/201805/24/18/06/5b068e5792e22.jpg" alt=""/>
                       <div> <h3>《超级片单》天天有剧刷 5月28日~6月3日精彩不断</h3>
                           <p>每日片单星期一（5月28日）电视剧：09：00《西部世界 第二季》18：00《她很漂亮》20：00《萌妻食神》20：00</p></div>
                    </li>
                    <li>
                        <img src="https://i1.letvimg.com/lc07_lemi/201805/22/16/12/5b03d0e7b1642.jpg" alt=""/>
                       <div> <h3>《超级片单》天天有剧刷 5月28日~6月3日精彩不断</h3>
                           <p>
                               每日片单星期一（5月28日）电视剧：09：00《西部世界 第二季》18：00《她很漂亮》20：00《萌妻食神》20：00</p></div>
                    </li>
                    <li>
                        <img src="https://i0.letvimg.com/lc05_lemi/201805/28/17/49/5b0bd04d8050b.jpg" alt=""/>
                       <div> <h3>《超级片单》天天有剧刷 5月28日~6月3日精彩不断</h3>
                           <p>每日片单星期一（5月28日）电视剧：09：00《西部世界 第二季》18：00《她很漂亮》20：00《萌妻食神》20：00</p></div>
                    </li>
                </ul>
            </div>
        </div>
    }
}



