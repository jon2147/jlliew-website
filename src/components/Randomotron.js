import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


class Randomotron extends React.Component {
    constructor() {
        super();
        this.state = {
            opaque : false,
            active : false,
            display: '',
            index: -1,
            items: ['buddy', 'guy', 'friend']
        }
        this.toggleOpacity = this.toggleOpacity.bind(this);
        this.switchDisplay = this.switchDisplay.bind(this);
    }


    switchDisplay(index) {
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

        this.interval = setInterval(() => {
                this.switchDisplay(index);
            },
            1000
        );

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        if (this.state.opaque) {
            return (
                <p className="randomotron-opaque">{this.state.display}</p>
            )
        }

        return (
            <p className="randomotron">{this.state.display}</p>
        )
    }
}

export default Randomotron;