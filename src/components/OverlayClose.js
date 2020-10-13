import React from 'react';
import './OverlayClose.css';

import Close from '@material-ui/icons/Close';

function closeOverlay() {
    document.getElementById("projectOverlay").className = "overlay";
}

class OverlayClose extends React.Component {
    render() {
        return (
            <a className="overlay-close" href="javascript:void(0)" onClick={closeOverlay}>
                <Close className="overlay-close-icon" />
                <span className="overlay-close-text">Close</span>
            </a>
        );
    }
}

export default OverlayClose;