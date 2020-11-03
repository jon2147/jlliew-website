import React from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import './OverlayGallery.css';

import Slider from './Slider';


import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import PositionDot from '@material-ui/icons/Lens';


class OverlayGallery extends React.Component {



    render() {

        const galleryData = this.props.projectGalleryData;

        const showNav = galleryData.length > 1 ? true : false;


        return (
            <div className="gallery">

                {/* Carousel cells */}
                <Slider
                    options={{
                        wrapAround: true,
                        imagesLoaded: true,
                        draggable: true,
                        accessibility: true,
                        autoPlay: 8200,
                        pauseAutoPlayOnHover: true,
                        setGallerySize: false,
                        prevNextButtons: false,
                        pageDots: false,
                        cellSelector: '.carousel-cell'
                    }}
                >
                    {galleryData.map((galleryImage, index) => {

                        const isVideo = galleryImage.isVideo;
                        const isCustom = galleryImage.isCustom;
                        const cNameString = "cell-content"
                            + (galleryImage.desktopContain ? " desktop-contain" : "")
                            + (galleryImage.mobileContain ? " mobile-contain" : "");

                        return (<div className="carousel-cell" key={index}>
                            { isCustom ? <div className={cNameString}>{galleryImage.imageURL}</div>
                                :
                                isVideo ?
                                    <video controls loop muted autoPlay="autoplay" className={cNameString}
                                        src={galleryImage.imageURL} alt={galleryImage.imageAlt} type="video/mp4" />
                                    :
                                    <img className={cNameString}
                                        src={galleryImage.imageURL} alt={galleryImage.imageAlt} />}

                        </div>);
                    })}

                </Slider>


                {/* Carousel navigation; use style={{ display: showNav ? "flex" : "none" }} to hide nav for single-image project */}
                <span className={showNav ? "carousel-nav" : "carousel-nav single"} >
                    <a className="carousel-nav-direction" style={{ display: showNav ? "flex" : "none" }}>
                        <ArrowBack />
                    </a>
                    <span className="carousel-nav-position">
                        {galleryData.map((image, index) => {
                            return <a className={index == 0 ?
                                "carousel-nav-position-dot selected" : "carousel-nav-position-dot"} key={index}>
                                <PositionDot className="carousel-nav-position-dot-icon" />
                            </a>;
                        })}
                    </span>
                    <a className="carousel-nav-direction forward" style={{ display: showNav ? "flex" : "none" }} >
                        <ArrowForward />
                    </a>
                </span>
            </div >
        );
    }
}

export default OverlayGallery;