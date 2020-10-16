import React from 'react';
import './OverlayClose.css';

import Close from '@material-ui/icons/Close';

class OverlayClose extends React.Component {
    render() {
        return (
            <a className="overlay-close" onClick={this.props.closeOverlay}>
                <Close className="overlay-close-icon" />
                <span className="overlay-close-text">Close</span>
            </a>
        );
    }
}

export default OverlayClose;