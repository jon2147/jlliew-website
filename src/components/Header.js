import React from 'react';
import ReactDOM from 'react-dom';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Menu from '@material-ui/icons/Menu';

import Randomotron from './Randomotron';


class Header extends React.Component {



    state = {
        profs: ["Photoshop","InDesign","Maya","Mudbox","Illustrator","Acrobat","Cinema4D","Figma","Sketch",
        "Principle","Sony Vegas","Premiere","After Effects","Visual Studio Code","Android Studio","Unity"]
    }


    render() {

        const { profs } = this.state

        return (
            
            <header className="folio-header">                
                <div className="header-container">
                    <div className="header-bio">
                        <h1 className="bio-label">
                            Jonathan Liew
                        </h1>
                        <p className="bio-description">
                            Si eth e burion nal things as raubriel ro sorriend. This is a space where things I've designed might go. Her o sibileth araubries malmathras nwenverbethal.
                        </p>
                        <div className="bio-contact">
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
                                <span className="experience">
                                    <img src="./images/unimelb.svg"
                                        alt="Digital Designer, University of Melbourne"
                                        className="experience-graphic" />
                                    <div className="experience-position">Digital Designer</div>
                                    <div className="experience-workplace">University of Melbourne</div>
                                </span>
                                <span className="experience">
                                    <img src="./images/pictoria.svg"
                                            alt="Graphic Designer, Pictoria Media"
                                            className="experience-graphic" />
                                        <div className="experience-position">Graphic Designer</div>
                                        <div className="experience-workplace">Pictoria Media</div>
                                </span>
                                <span className="experience">
                                    <img src="./images/wartide.svg"
                                            alt="Freelance Artist, WartideCCG"
                                            className="experience-graphic" />
                                        <div className="experience-position">Freelance Artist</div>
                                        <div className="experience-workplace">@WartideCCG</div>
                                </span>
                            </div>
                        </div>
                        <a className="projects-link" href="google.com">
                            View Projects
                            <ArrowDownward className="projects-icon"/>
                        </a>
                        <div className="software-proficiencies">
                            <h2 className="auxiliary-label">
                                Software proficiency
                            </h2>
                            <div className="proficiencies">
                                {profs.map(src => {
                                    return <span
                                        className="proficiency"
                                        key={src} src={src}>
                                            {src}
                                        </span>;
                                })}
                            </div>
                        </div>
                        <Randomotron/>
                    </div>
                </div>
                {/*<div className="header-menu">
                        <Menu className="header-menu-icon"/>
                        <a className="header-menu-item" href="#work">Work</a>
                        <a className="header-menu-item" href="#about">About</a>
                        <a className="header-menu-item" href="#contact">Contact</a> 
                </div>*/}
            </header>
        );
    }
}

export default Header;