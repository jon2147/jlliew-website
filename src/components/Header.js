import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <h1 className="header-title">Jonathan Liew</h1>
                <p className="header-intro">This is a space where things I've designed might go.</p>
                <div className="header-links">
                    <a className="header-link" href="">Interaction</a>
                    <a className="header-link" href="">Print</a>
                    <a className="header-link" href="">Motion</a>
                </div>
                <div className="contact-block">
                    <p>Send me an email if you'd like to get in touch</p>
                    <a className="email-link" href="mailto:design@jlliew.com">design@jlliew.com</a>
                </div>
            </header>
        );
    }
}

export default Header;