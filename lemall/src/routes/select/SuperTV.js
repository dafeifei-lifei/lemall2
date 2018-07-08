import React from "react"
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import '../../static/css/select.less'
import action from "../../store/action"


class Select extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.selectData();
    }
    render() {
        let {fenlei,select} = this.props;
        let data = fenlei;
        if(data.length===0)return "";
        let obj = [];
        for (let attr in data[0]) {
            obj.push(attr);
        }
        let x = data[0]['超级电视'][0];


        return <section className={'supertvBox'}>
            {/*右边导航*/}
            <div className={'sou_r '}>
                {/*上面的图*/}
                <div className="sou_r_top">
                    <img src={x['head'][0].pic} alt=""/>
                </div>
                {/*中间列表*/}
                <div className="sou_r_middle">
                    <h3>爆款推荐</h3>
                    <ul className="sou_r_list">
                        {x['爆款推荐'].map((item, index) => {
                            return <li key={index}>
                                <Link to={`/detail/?idlx=classify&id=${index+1}`}>
                                    <img src={item.pic} alt=""/>
                                    <p>{item.name}</p>
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
                {/*底部列表*/}
                <ul className="sou_r_bottom">
                    {x['series'].map((item, index) => {
                        return <li key={index}>
                            <div className={'sou_r_bottom_pic'}>
                                <img src={item.pic} alt=""/>
                            </div>
                            <div className={'sou_r_bottom_text clearfix'}>
                                <span>{item.name}</span>
                                <em>&gt;</em>
                            </div>
                        </li>
                    })}
                </ul>
            </div>

        </section>
    }

}

export default connect(state=>state.select,action.select)(Select);