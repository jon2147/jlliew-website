import React from 'react';
import HeaderProjectsLink from './HeaderProjectsLink';

import { bioLabel, bioDescription, contactInvitation, contactEmail } from '../data/projects.js'

import './HeaderBio.css';

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