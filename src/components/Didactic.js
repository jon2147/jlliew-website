import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/css/Didactic.css';

import DidacticGallery from '../components/DidacticGallery';
import DidacticPanel from '../components/DidacticPanel';
import DidacticHeader from '../components/DidacticHeader';
import DidacticSlider from '../components/DidacticSlider';


class Didactic extends React.Component {
    render() {
        return (
            <div className="didactic">
                <DidacticSlider/>
                <DidacticPanel/>
            </div>
        );
    }
}

export default Didactic;