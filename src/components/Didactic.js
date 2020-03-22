import React from 'react';
import ReactDOM from 'react-dom';

import DidacticGallery from '../components/DidacticGallery';
import DidacticPanel from '../components/DidacticPanel';
import DidacticHeader from '../components/DidacticHeader';


class Didactic extends React.Component {
    render() {
        return (
            <div className="didactic">
                <DidacticGallery/>
                <DidacticPanel/>
            </div>
        );
    }
}

export default Didactic;