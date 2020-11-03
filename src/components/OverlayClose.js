import React from 'react';
import './OverlayClose.css';
import { NavLink } from 'react-router-dom';


import Close from '@material-ui/icons/Close';

class OverlayClose extends React.Component {
    render() {
        return (
            <NavLink to="/" className="overlay-close" onClick={this.props.closeOverlay}>
                <Close className="overlay-close-icon" />
                <span className="overlay-close-text">Close</span>
            </NavLink>
        );
    }
}

export default OverlayClose;