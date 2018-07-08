import React from "react"
import {Link} from "react-router-dom"
import {Icon} from "antd"
class NavList extends React.Component {
    constructor() {
        super();
        this.state = {
            clickIndex: 0
        }
    }

    render() {
        return <div className="NavListBox">
            <div className="title">
                <Link to="/personal/user"><i></i></Link>
                <p>{this.props.title}</p>
                <span>{this.props.titleLeft}</span>
            </div>
            {
                this.props.isShow ? <div className="line">
                    <ul className="clearfix">
                        {
                            this.props.list.map((item, index) => {
                                return <li className={index === this.state.clickIndex ? "active" : ""} key={index}
                                           onClick={this.active.bind(this, index)}>
                                    <a href="javascript:;"><b>{item}</b></a>
                                </li>
                            })
                        }
                    </ul>
                </div> : ""
            }
            <div className="empty">
                <div><Icon type={this.props.type}></Icon></div>
                <p>{this.props.emptyRight}{this.props.list[this.state.clickIndex]}{this.props.emptyLeft}</p>
            </div>
        </div>
    }

    active = (index) => {
        this.setState({
            clickIndex: index
        })
    }
}

export default NavList