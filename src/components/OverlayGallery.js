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
                    {/*Image slider */}{/*Image slider                     <img className="rename-me-image" src="./images/wartide_apstaff.jpg" />*/}

                    <div class="slider">
                        <div class="slide" id="slide-1">
                            <img className="rename-me-image" src="./images/wartide_apstaff.jpg" />
                        </div>
                        <div class="slide" id="slide-2">
                            <img className="rename-me-image" src="./images/study_oyl_better.jpg" />
                        </div>
                        <div class="slide" id="slide-3">
                            <img className="rename-me-image" src="./images/fivex_fb_wrap.png" />
                        </div>
                        <div class="slide" id="slide-4">
                            <img className="rename-me-image" src="./images/thumbnails/ms_joseph_thumb.jpg" />
                        </div>
                    </div>
                </div>


                {/* Image navigation */}
                <span className="image-nav">
                    <span className="image-nav-direction">
                        <ArrowBack />
                    </span>
                    <span className="image-nav-position">
                        {imageURLs.map((src, index) => {
                            return <a href={"#slide-" + (index + 1)}>
                                <span className="image-nav-position-dot" key={src}>
                                    <StopRounded className="image-nav-position-dot-icon" />
                                </span>
                            </a>;
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