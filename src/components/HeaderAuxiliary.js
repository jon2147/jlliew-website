import React from 'react';

import AuxiliaryExperiences from './AuxiliaryExperiences';
import AuxiliaryProficiencies from './AuxiliaryProficiencies';
import Randomotron from './Randomotron';

import ArrowDownward from '@material-ui/icons/ArrowDownward';

// Projects Link
const projectsLink = (
    <a className="projects-link" href="google.com">
        View Projects
        <ArrowDownward className="projects-icon"/>
    </a>
);

class HeaderAuxiliary extends React.Component {
    render() {
        return (
            <div className="header-auxiliary">
                <AuxiliaryExperiences/>
                {projectsLink}
                <AuxiliaryProficiencies/>
                <Randomotron/>
            </div>
        );
    }
}

export default HeaderAuxiliary;