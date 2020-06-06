import React from 'react';
import './HeaderProjectsLink.css';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

const linkLabel = "View Projects";

class HeaderProjectsLink extends React.Component {
    render() {
        const projectsLinkURL = this.props.projectsLinkURL;
        const showOnMobile = this.props.showOnMobile;

        return (
            <a className={showOnMobile ? "projects-link bio" : "projects-link"} href={projectsLinkURL}>
        {linkLabel}
        <ArrowDownward className="projects-icon"/>
            </a>
        );
    }
}

export default HeaderProjectsLink;