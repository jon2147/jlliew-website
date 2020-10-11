import React from 'react';
import './HeaderProjectsLink.css';
import ArrowDownward from '@material-ui/icons/ArrowDownward';


class HeaderProjectsLink extends React.Component {
    render() {
        const projectsLinkURL = this.props.projectsLinkURL;
        const showOnMobile = this.props.showOnMobile;
        const linkLabel = this.props.linkLabel;

        return (
            <a className={showOnMobile ? "projects-link bio" : "projects-link"}
                href={projectsLinkURL ? projectsLinkURL : "#projects"}>
                {linkLabel ? linkLabel : "View projects"}
                <ArrowDownward className="projects-icon" />
            </a>
        );
    }
}

export default HeaderProjectsLink;