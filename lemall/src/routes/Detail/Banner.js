import React from "react"

class Banner extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            speed: 500
        }
    }

    componentWillMount() {

        let {imgData} = this.props;


        let cloneData = imgData.slice(0);
        cloneData.push(imgData[0]);
        cloneData.unshift(imgData[imgData.length-1]);
        this.cloneData = cloneData;
    }

    componentDidMount() {
        this.autoTimer = setInterval(this.autoMove, 3000);
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextState.step >= this.cloneData.length) {
            this.setState({
                step: 1,
                speed: 0
            })
        }
    }

    componentDidUpdate() {
        let {step, speed} = this.state;
        if (step === 1 && speed === 0) {
            let timer = setTimeout(() => {
                clearInterval(timer);
                this.setState({
                    step: step + 1,
                    speed: 500
                })
            }, 0)
        }
    }

    render() {
        let {step, speed} = this.state,
            {imgData} = this.props,
            wrapperStyle = {
                left: `${-step * 7.5}rem`,
                transition: `left ${speed}ms`,
                width:`${this.cloneData.length*7.5}rem`
            };
        return <div className="banner">
                <ul className="wrapper clearfix" style={wrapperStyle}>
                    {
                        this.cloneData.map((item, index) => {
                            return <li key={index}><img src={item} alt=""/></li>
                        })
                    }
                </ul>
                <ul className="focus clearfix">
                    {
                        imgData.map((item, index) => {
                            let tempIndex = step - 1;
                            step === 0 ? tempIndex = imgData.length - 1 : null;
                            step === this.cloneData.length - 1 ? tempIndex = 0 : null;
                            return <li key={index} className={index === tempIndex ? "active" : ""}></li>
                        })
                    }
                </ul>
            </div>
    }

    autoMove = () => {
        this.setState({
            step: this.state.step + 1
        })
    }
}

export default Banner