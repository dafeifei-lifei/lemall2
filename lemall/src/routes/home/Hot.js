import React from 'react';
import data from '../../static/json/home.json';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Hot extends React.Component{
    constructor(props,context){
        super(props,context);

    }
    render(){
        console.log(this.props.dataHot);
        let {smallpic:smallpic1,id:id1,idlx:idlx1} =this.props.dataHot[0];
        let {smallpic:smallpic2,id:id2,idlx:idlx2} =this.props.dataHot[1];
        let {smallpic:smallpic3,id:id3,idlx:idlx3} =this.props.dataHot[2];
        return <div className={'hot'}>
            <h2>热卖精选</h2>
            <ul className={'containerBox clearfix'}>
                <li className={'containerLeft'}>
                    <div  className={'left'}>
                        <Link to={`/detail/?idlx=${idlx1}&id=${id1}`}><img src={smallpic1}/></Link>
                    </div>
                </li>
                <li className={'containerRight'}>
                    <div className={'top'}><Link to={`/detail/?idlx=${idlx2}&id=${id2}`}><img src={smallpic2} alt="" /></Link></div>
                    <div className={'bottom'}><Link to={`/detail/?idlx=${idlx3}&id=${id3}`}><img src={smallpic3} alt="" /></Link>
                    </div>
                </li>
            </ul>
        </div>;
    }
}
export  default connect(state=>({...state.home}))(Hot);
