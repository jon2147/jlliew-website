import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
            <div className="header-container">
                <h1 className="header-title">Jonathan Liew</h1>
                <p className="header-intro">Si eth e burion nal things as raubriel ro sorriend. This is a space where things I've designed might go. Her o sibileth araubries malmathras nwenverbethal.</p>
                <div className="header-links">
                    <a className="header-link" href="">Interaction</a>
                    <a className="header-link" href="">Print</a>
                    <a className="header-link" href="">Motion</a>
                </div>
                <div className="contact-block">
                    <p>Send me an email if you'd like to get in touch</p>
                    <a className="email-link" href="mailto:design@jlliew.com">design@jlliew.com</a>
                </div>
                </div>
            </header>
        );
    }
}

export default Header;