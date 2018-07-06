import React from 'react'
import {connect} from 'react-redux'
import television from '../../json/television'

class Television extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
            price:'',
            time:'',
            evaluate:''
        }
    }

    shopSort = (ev) => {
        let target = ev.target,
            tarClass = target.className,
            tarTag = target.tagName;
        let timeAry=[],
            priceAry=[],
            evaluate=[]
        television.forEach(({time,price,evaluate}, index) => {
          if (tarTag === 'LI' && tarClass === 'all') {
                //
            }
            if (tarTag === 'LI' && tarClass === 'new') {
               //时间排序
               this.setState({
                  time:this.state.time
                })

            }
            if (tarTag === 'LI' && tarClass === 'price') {
                //价格排序
            }
            if (tarTag === 'LI' && tarClass === 'evaluate') {
                //评价排序
            }
        });
    };

    render() {

        return <div className={'television'}>
            <div className='televisionBody'>
                <ul className={'clearfix'} onClick={this.shopSort}>
                    <li className={'all'}>全部</li>
                    <li className={'new'}>最新</li>
                    <li className={'price'}>价格</li>
                    <li className={'evaluate'}>评价数</li>
                    <li className={'filtrate'}>筛选</li>
                </ul>
            </div>
            <div className={'televisionContent'}>
                <ul>
                    {television.map((item, index) => {
                            return <li key={index}>
                                <a href='javascript:;'>
                                    <img src={item.img} alt=""/>
                                    <div className="con">
                                        <span className={'name'}>{item.name}</span>
                                        <p className={'describe'}>{item.describe}</p>
                                        <p className={'price'}>￥:{item.price}</p>
                                    </div>
                                </a>
                            </li>
                        })}
                </ul>
            </div>
        </div>
    }
}

export default connect()(Television)


