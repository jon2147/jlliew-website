import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


class Randomotron extends React.Component {
    constructor() {
        super();
        this.state = {
            opaque : false,
            displaying : [0,1,2],
            display: '',
            index: -1,
            items: [
                (<span>Today is gonna be cold baloney.</span>),
                (<span>
                    This is a link to something <a className="" href="google.com">tasty</a>.
                </span>),
                (<div>hello <span className="auxiliary-heading">buddy</span></div>)
            ]
        }
        this.toggleOpacity = this.toggleOpacity.bind(this);
        this.switchItem = this.switchItem.bind(this);
    }


    switchItem(index) {
        index = this.state.index;
        if (index == (this.state.items.length - 1))
        {
            this.setState({
                display: this.state.items[0],
                index: 0
            })
        } else {
            this.setState({
                display: this.state.items[index + 1],
                index: this.state.index + 1
            })
        }
        
    }

    toggleOpacity() {
        this.setState({
            opaque: !this.state.opaque
        })
    }

    componentDidMount() {
        this.toggleOpacity();
        let index = this.state.index;

        this.interval2 = setInterval(() => {
                this.toggleOpacity();
            },
            1000
        );

        this.interval = setInterval(() => {
                this.switchItem(index);                
            },
            3000
        );

    }

    componentWillUnmount() {
        clearInterval(this.interval);
        clearInterval(this.interval2);
    }

    render() {
        return (
            <p className={this.state.opaque ? "randomotron" : "randomotron-opaque"}>{this.state.display}</p>
        )
    }
}

export default Randomotron;