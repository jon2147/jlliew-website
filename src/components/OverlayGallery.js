import React from 'react';
import './OverlayGallery.css';

import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import StopRounded from '@material-ui/icons/StopRounded';



// Overlay object (or w.e control object) should feed the gallery with the array of images
// AND this is really only what it needs, because use/navigation is not connected to other projects; it is self-contained

const imageURLs = ["./images/wartide_apstaff.jpg", "./images/study_oyl_better", ".images/thumbnails/ms_joseph_thumb.jpg", ".images/thumbnails/wartide_vshift_thumb.jpg"]


class OverlayGallery extends React.Component {
    render() {
        return (
            <div className="gallery">
                <div className="image-container">
                    <img className="rename-me-image" src="./images/wartide_apstaff.jpg" />
                </div>
                <span className="image-nav">
                    <span className="image-nav-direction">
                        <ArrowBack />
                    </span>
                    <span className="image-nav-position">
                        {imageURLs.map(src => {
                            return <span className="image-nav-position-dot" key={src}>
                                <StopRounded className="image-nav-position-dot-icon" />
                            </span>;
                        })}
                    </span>
                    <span className="image-nav-direction forward">
                        <ArrowForward />
                    </span>
                </span>
            </div>
        );
    }
}

export default OverlayGallery;