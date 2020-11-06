import React from 'react';
import HeaderProjectsLink from './HeaderProjectsLink';

import './HeaderBio.css';

const bioLabel = "Jonathan Liew";

const bioDescription =
"Hello! This is a space I put together to showcase my work as a designer and illustrator. I have a background in games design, and am passionate about the stories we tell through the experiences we create.";

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