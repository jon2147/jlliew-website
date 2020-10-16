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
                <OverlayClose closeOverlay={this.props.closeOverlay} />
                <div className={this.props.contentFadeIn ? "overlay-content" : "overlay-content transparent"}>
                    <div className="overlay-content-prose"><OverlayProse
                        projectProseData={this.props.projectProseData}
                    /></div>
                    <div className="overlay-content-gallery"><OverlayGallery
                        projectGalleryData={this.props.projectGalleryData}
                    /></div>
                </div>
                <OverlayNavigation
                    contentFadeIn={this.props.contentFadeIn}
                    projectNavData={this.props.projectNavData}
                    previousProject={this.props.previousProject}
                    nextProject={this.props.nextProject}
                    closeOverlay={this.props.closeOverlay}
                />
            </div>
        );
    }
}

export default ProjectOverlay;