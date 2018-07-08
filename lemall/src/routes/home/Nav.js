import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd'

export default class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render(){
        return <ul className={'nav'}>
            <li><Link to={'/select'}><Icon type={'bars'} className={'fenlei'}/><span>全部分类</span></Link></li>
            <li><Link to={'/home/tv'}><Icon type={'desktop'} className={'tv'}/><span>超级电视</span></Link></li>
            <li><Link to={'/home/vip'}><Icon type={'bank'} className={'vip'}/><span>会员购买</span></Link></li>
            <li><Link to={'/home/install'}><Icon type={'tool'} className={'install'}/><span>安装维修</span></Link></li>
            <li><Link to={'/home/lemi'}><Icon type={'team'} className={'lemi'}/><span>乐迷社区</span></Link></li>
        </ul>
    }
}
