import React from 'react';
import ReactDOM from 'react-dom';

class DidacticGallery extends React.Component {
    render() {
        return (
            <div className="didactic-gallery">
                <div className="didactic-image"
                    style={
                        {backgroundImage: `url(images/study_oyl_better.jpg`}
                    }>                
                </div>
                <div className="didactic-image"
                    style={
                        {backgroundImage: `url(images/wartide_apstaff.jpg`}
                    }>                
                </div>
                <div className="didactic-image"
                    style={
                        {backgroundImage: `url(images/study_oyl_inner.jpg`}
                    }>
                </div>
            </div>
        );
    }
}

export default DidacticGallery;