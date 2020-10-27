import React from 'react';
import HeaderProjectsLink from './HeaderProjectsLink';

import './HeaderBio.css';

const bioLabel = "Jonathan Liew";

const bioDescription =
"Si eth e burion nal eoth as raubriel ro sorriend. This is a space where projects I've worked on might go. This site is under construction. For neole selusid del oelest, muries nen ef cabapret e oelespitel.";

const contactInvitation = 
"Send me an email if you'd like to get in touch";
const contactEmail = "design@jlliew.com";

class HeaderBio extends React.Component {
    render() {
        return (
            <div className="header-bio">
                <h1 className="bio-label">{bioLabel}</h1>
                <p className="bio-description">{bioDescription}</p>
                <div className="bio-contact">
                    <HeaderProjectsLink showOnMobile={true}/>
                    <p>{contactInvitation}</p>
                    <a className="bio-contact-link" href={"mailto:"+contactEmail}>{contactEmail}</a>
                </div>
            </div>
        );
    }
}

export default HeaderBio;