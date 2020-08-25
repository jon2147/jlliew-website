import React from 'react';
import ReactDOM from 'react-dom';


/* Detect type of touch device and add class to the wrapper 
if (navigator.msMaxTouchPoints) {
    $('#slider').addClass('ms-touch');
}*/


class DidacticSlider extends React.Component {

    state = {
        imgs: ["/images/study_oyl_better.jpg","/images/wartide_apstaff.jpg","/images/study_oyl_inner.jpg",
                "/images/wartide_shift.png", "/images/fivex_fb_wrap.png"
        ],
    }

    render() {
        const {imgs } = this.state

        return (
            <div className="didactic-slides" >
                <div className="didactic-slider">
                    {imgs.map(src => {
                        return <img className="slide-image" key={src} src={src} width="100%" height="100%" />;
                    })}
                </div>
              
            </div> 
        );
    }
}

export default DidacticSlider;