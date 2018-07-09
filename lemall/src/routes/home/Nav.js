import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd'

export default class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render(){
        return <ul className={'nav'}>
            <li><Link to={'/select'}><i className={'fenlei'}></i><span>全部分类</span></Link></li>
            <li><Link to={'/home/tv'}><i className={'tv'}></i><span>超级电视</span></Link></li>
            <li><Link to={'/home/vip'}><i className={'vip'}></i><span>会员购买</span></Link></li>
            <li><Link to={'/home/install'}><i className={'install'}></i><span>安装维修</span></Link></li>
            <li><Link to={'/home/lemi'}><i className={'lemi'}></i><span>乐迷社区</span></Link></li>
        </ul>
    }
}
