import React from 'react';
import './OverlayNavigation.css';

import Close from '@material-ui/icons/Close';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

// Overlay object (or w.e control object) should feed this with data eventually

function closeOverlay() {
    document.getElementById("projectOverlay").className = "overlay";
}

class OverlayNavigation extends React.Component {
    render() {
        return (
            <div className="overlay-nav">
                <a className="overlay-nav-link" >
                    <ArrowBack className="overlay-nav-icon" />
                    <span className="overlay-nav-text">Ancient Priest's Staff</span>
                </a>
                <a className="overlay-nav-link forward" >
                    <ArrowForward className="overlay-nav-icon forward-mobile" />
                    <span className="overlay-nav-text">Pictoria Media</span>
                    <ArrowForward className="overlay-nav-icon forward" />
                </a>
                <a className="overlay-close-mobile" onClick={closeOverlay}>
                    <Close /><span className="overlay-close-text-mobile">Close</span>
                </a>
            </div>
        );
    }
}

export default OverlayNavigation;