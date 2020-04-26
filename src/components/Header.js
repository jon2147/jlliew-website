import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            
            <header className="folio-header">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                

                <div className="header-bio">
                    <h1 className="bio-label">
                        Jonathan Liew
                    </h1>
                    <p className="bio-description">Si eth e burion nal things as raubriel ro sorriend. This is a space where things I've designed might go. Her o sibileth araubries malmathras nwenverbethal.</p>
                    <div class="bio-contact">
                        <p>Send me an email if you'd like to get in touch</p>
                        <a className="bio-contact-link" href="mailto:design@jlliew.com">design@jlliew.com</a>
                    </div>
                </div>
                <div className="header-divider"/>
                <div className="header-auxiliary">
                    <div className="recent-experience">
                    
                        <h2 className="auxiliary-label">
                            Recent experience
                        </h2>
                        <div className="experiences">
                            <div className="experience"></div>
                        </div>
                    </div>
                    <div className="view-work-link">
                        View Projects
                        <i class="material-icons">&#xe5db;</i>
                    </div>
                </div>
            </header>
            
            

            /* original
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
            */


        );
    }
}

export default Header;