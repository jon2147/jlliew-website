import React from 'react';

import '../components/ProjectOverlay.css';

import OverlayNavigation from './OverlayNavigation';
import OverlayGallery from './OverlayGallery';
import OverlayProse from './OverlayProse';
import OverlayClose from './OverlayClose';

class ProjectOverlay extends React.Component {
    render() {
        return (
            <div id="projectOverlay" className="overlay">
                <OverlayClose />
                <div className="overlay-content">
                    <div className="overlay-content-prose"><OverlayProse /></div>
                    <div className="overlay-content-gallery"><OverlayGallery /></div>
                </div>
                <OverlayNavigation />
            </div>
        );
    }
}

export default ProjectOverlay;