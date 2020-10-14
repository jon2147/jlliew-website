import React from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import './OverlayGallery.css';

import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import StopRounded from '@material-ui/icons/StopRounded';



// Overlay object (or w.e control object) should feed the gallery with the array of images
// AND this is really only what it needs, because use/navigation is not connected to other projects; it is self-contained

const imageURLs = [
    "./images/wartide_apstaff.jpg",
    "./images/study_oyl_better.jpg",
    "./images/thumbnails/ms_joseph_thumb.jpg",
    "./images/thumbnails/unimelb_pursuit_thumb.jpg",
    "./images/thumbnails/enp_guide_thumb.jpg",
    "./images/thumbnails/bestfurn_daisy_thumb.jpg",
    "./images/fivex_fb_wrap.png",
    "./images/wartide_vshift.png"
]

class OverlayGallery extends React.Component {


    render() {
        return (
            <div className="gallery">

                <div className="image-container" data-flickity='{ 
                            "wrapAround": true,
                            "imagesLoaded" : true,
                            "draggable" : true,
                            "accessibility" : true,
                            "autoPlay" : 2800,
                            "setGallerySize": false,
                            "prevNextButtons" : false,
                            "pageDots" : false,
                            "cellSelector" : ".carousel-cell"
                         }'>

                    {imageURLs.map((imgURL, index) => {
                        return (<div className="carousel-cell">
                            <img className="rename-me-image" src={imgURL} />
                        </div>);
                    })}
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