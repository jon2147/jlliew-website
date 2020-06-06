import React from 'react';

import AuxiliaryExperiences from './AuxiliaryExperiences';
import AuxiliaryProficiencies from './AuxiliaryProficiencies';
import HeaderProjectsLink from './HeaderProjectsLink';
import Randomotron from './Randomotron';

import './HeaderAuxiliary.css';

const projectsLink = "#projects";

class HeaderAuxiliary extends React.Component {
    render() {
        return (
            <div className="header-auxiliary">
                <AuxiliaryExperiences/>
                <HeaderProjectsLink projectsLinkURL={projectsLink} showOnMobile={false}/>
                <AuxiliaryProficiencies/>
                <Randomotron/>
            </div>
        );
    }
}

export default HeaderAuxiliary;