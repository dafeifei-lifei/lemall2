import React from 'react'
import {Icon} from 'antd'

export default class Maintain extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    render() {
        return <div className={'maintainBox'}>
            <div className={'titleBox clearfix'}>
                <Icon type={'left'} style={{fontSize: '25px', float: 'left', margin: '10px'}}/>
                <span  className={'title'} style={{
                    fontSize: '15px',
                    textAlign: 'center',
                    margin: '10px',

                }}>安装维修</span>
                <Icon type={'ellipsis'} style={{fontSize: '25px', float: 'right', margin: '10px'}}/>
            </div>
            <div className={'conBox'}>
                <div className={'con'}>
                   <Icon type={'tool'}  style={{fontSize: '100px',color:'red'}}/>
                    <p>您还没有预约过上门安装维修</p>
                    <p>乐视 • TV超级电视</p>
                </div>
                <p className={'footer'}>立即预约</p>
            </div>

        </div>
    }
}



