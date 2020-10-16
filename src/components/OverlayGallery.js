import React from 'react';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';
import './OverlayGallery.css';

import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import PositionDot from '@material-ui/icons/Lens';


// Overlay object (or w.e control object) should feed the gallery with the array of images + contain/cover mobile/deskop options
// AND this is really only what it needs, because use/navigation is not connected to other projects; it is self-contained

const imageURLs = [
    "./images/wartide_apstaff.jpg",
    "./images/study_oyl_better.jpg",
    "./images/fivex_fb_wrap.png",
    "./images/wartide_vshift.png"
]

class OverlayGallery extends React.Component {

    

    componentDidUpdate() {

        /* Initialise Flickity carousel  */

        var flkty = new Flickity('.carousel', {
            wrapAround: true,
            imagesLoaded: true,
            draggable: true,
            accessibility: true,
            autoPlay: 6000,
            pauseAutoPlayOnHover: false,
            setGallerySize: false,
            prevNextButtons: false,
            pageDots: false,
            cellSelector: '.carousel-cell'
        });

        /* Carousel direction button navigation */

        var directionButtonBack = document.querySelector('.carousel-nav-direction');
        directionButtonBack.addEventListener('click', function () {
            flkty.previous();
        });

        var directionButtonForward = document.querySelector('.carousel-nav-direction.forward');
        directionButtonForward.addEventListener('click', function () {
            flkty.next();
        });

        /* Carousel dot position navigation */

        var positionDotGroup = document.querySelector('.carousel-nav-position');
        var positionDots = positionDotGroup.querySelectorAll('.carousel-nav-position-dot');

        flkty.on('select', function () {
            var lastPositionDot = positionDotGroup.querySelector('.selected');
            var currentPositionDot = positionDotGroup.children[flkty.selectedIndex];
            if (lastPositionDot) lastPositionDot.classList.remove('selected');
            if (currentPositionDot) currentPositionDot.classList.add('selected');
        });

        positionDots.forEach(function (dot, index) {
            dot.addEventListener('click', function (event) {
                flkty.select(index);
            })
        })

    }


    render() {

        const galleryData = this.props.projectGalleryData;
        const imageURLs = [];

        galleryData.map((galleryImage, index) => {
            imageURLs[index] = galleryImage.imageURL;
        })


        const showNav = galleryData.length > 1 ? true : false;

        console.log(galleryData)
        galleryData.map(g => {
            console.log(g.imageURL)
        })


        return (
            <div className="gallery">

                {/* Carousel cells */}
                <div className="carousel">
                    {galleryData.map((galleryImage, index) => {
                        return (<div className="carousel-cell" key={index}>
                            <img className="cell-content" src={galleryImage.imageURL} alt={galleryImage.imageAlt} />
                        </div>);
                    })}
                </div>


                {/* Carousel navigation */}
                <span className="carousel-nav" style={{ display: showNav ? "flex" : "none" }}>
                    <a className="carousel-nav-direction">
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
                    <a className="carousel-nav-direction forward" >
                        <ArrowForward />
                    </a>
                </span>
            </div >
        );
    }
}

export default OverlayGallery;