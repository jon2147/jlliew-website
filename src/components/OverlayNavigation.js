import React from 'react';
import './OverlayNavigation.css';

import Close from '@material-ui/icons/Close';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import { NavLink } from 'react-router-dom';

// Overlay object (or w.e control object) should feed this with data eventually


class OverlayNavigation extends React.Component {
    render() {
        const backwardNavLinkRoute = this.props.projectNavData[2] ? this.props.projectNavData[2] : "";
        const forwardNavLinkRoute = this.props.projectNavData[3] ? this.props.projectNavData[3] : "";

        return (

            <div className="overlay-nav">
                <NavLink to={backwardNavLinkRoute} className="overlay-nav-link" onClick={this.props.previousProject} >
                    <ArrowBack className="overlay-nav-icon" />
                    <span className={this.props.contentFadeIn ? "overlay-nav-text" : "overlay-nav-text transparent"}>
                        {this.props.projectNavData[0]}</span>
                </NavLink>
                <NavLink to={forwardNavLinkRoute} className="overlay-nav-link forward" onClick={this.props.nextProject} >
                    <ArrowForward className="overlay-nav-icon forward-mobile" />
                    <span className={this.props.contentFadeIn ? "overlay-nav-text" : "overlay-nav-text transparent"}>
                        {this.props.projectNavData[1]}</span>
                    <ArrowForward className="overlay-nav-icon forward" />
                </NavLink>
                <NavLink to="/" className="overlay-close-mobile" onClick={this.props.closeOverlay}>
                    <Close /><span className="overlay-close-text-mobile">Close</span>
                </NavLink>
            </div>
        );
    }
}

export default OverlayNavigation;