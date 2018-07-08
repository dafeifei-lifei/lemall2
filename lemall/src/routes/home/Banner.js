import React from 'react';
import {Carousel, Icon} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class Banner extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        let data = this.props.dataBanner;
        return <div className={'banner'}>
            <Carousel autoplay>
                {data.map((item, index) => {
                    let {smallpic, name,idlx,id} = item;
                    return <div key={index}>
                        <Link to={`/detail/?idlx=${idlx}&id=${id}`}> <img src={smallpic} alt={name}/></Link>
                    </div>
                })
                }
            </Carousel>
            <Link to={'/home'} className={'logo'}><span></span></Link>
            <Link to={'/shopCart'} className={'shopCart'}><Icon type={'shopping-cart'}/></Link>
            <Link to={'/Personal'} className={'personal'}><Icon type={'user'}/></Link>
            <Link to={'/navSearch'} className={'search'}><span><Icon type={'search'}/>X43L</span></Link>
        </div>

    }
}
export default withRouter(connect(state=>({...state.home}))(Banner));

