import React from 'react';
import './HeaderBio.css';

const bioLabel = "Jonathan Liew";

const bioDescription =
"Si eth e burion nal things as raubriel ro sorriend. This is a space where things I've designed might go. This site is under construction.";

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
                    <p>{contactInvitation}</p>
                    <a className="bio-contact-link" href={"mailto:"+contactEmail}>{contactEmail}</a>
                </div>
            </div>
        );
    }
}

export default HeaderBio;