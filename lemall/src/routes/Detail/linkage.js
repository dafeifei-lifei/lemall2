import React from "react"

class Linkage extends React.Component{
    constructor(){
        super()
    }
    render(){
        let date=new Date().toLocaleString().trim();
        date=date.match(/\d+/g);
        return <div className="linkage">
            <p>送至:</p>
            <div className="site">
                <p><span>北京</span>><span>北京市</span>><span>朝阳区</span>></p>
                <p><b>现货,</b>24:00前完成支付，预计({`${date[0]}.${date[1]}.${parseFloat(date[2])+2}`})之前发货</p>
            </div>
            <div className="detail">
                <ul className={"clearfix"}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    }
}
export default Linkage
