import React from 'react';
import ReactDOM from 'react-dom';

class DidacticHeader extends React.Component {
    render() {
        return (
            <div className="didactic-header">
                <div className="didactic-header-links">
                    <a className="didactic-header-link" href="">Interaction</a>
                    <a className="didactic-header-link" href="">Print</a>
                    <a className="didactic-header-link" href="">Motion</a>
                </div>
            </div>
        );
    }
}

export default DidacticHeader;