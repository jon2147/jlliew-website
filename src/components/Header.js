import React from 'react';
import ReactDOM from 'react-dom';

import ArrowDownward from '@material-ui/icons/ArrowDownward';

import {ReactComponent as UnimelbLogo} from './images/unimelb.svg';




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
                                <div className="experience">
                                    <UnimelbLogo 
                                    alt="Digital Designer, University of Melbourne"
                                    width="3rem" height="auto"
                                     />
                                    {/*<img src={UnimelbLogo}
                                        alt="Digital Designer, University of Melbourne"
                                        className="experience-graphic">
                                    </img>*/}
                                    <div className="experience-position">Digital Designer</div>
                                    <div className="experience-workplace">University of Melbourne</div>
                                </div>
                                <div className="experience">
                                    <div className="experience-graphic"></div>
                                    <div className="experience-position">Graphic Designer</div>
                                    <div className="experience-workplace">Pictoria Media</div>
                                </div>
                                <div className="experience">
                                    <div className="experience-graphic"></div>
                                    <div className="experience-position">Freelance Artist</div>
                                    <div className="experience-workplace">@WartideCCG</div>
                                </div>
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