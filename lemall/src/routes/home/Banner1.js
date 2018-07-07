import React from 'react';
import {Carousel} from 'antd';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



 class Banner1 extends React.Component {
    constructor(props, context) {
        super(props, context);


    }

    render() {
        let data = this.props.dataBanner1;
        return <div className={'banner2'}><Carousel vertical autoplay={true} dots={false}>
            {data.map((item, index) => {
                let {smallpic, name, dec} = item;
                return <div className={'container'} key={index}><div className={'imgContainer'}><img src={smallpic} alt=""/></div><div className="title"><h3>{name}</h3><p>{dec}</p></div> </div>
            })}
        </Carousel>
            <Link to={'/detail/today'}>
                <div className={'today'}>
                    <span></span>
                    <img src="http://img2-lemall.letvimg.com/wap/20161217/default/5034458054181810" alt=""/>
                </div>
            </Link>

        </div>;
    }
}
export default connect(state=>({...state.home}))(Banner1);
