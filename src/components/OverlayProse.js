import React from 'react';
import './OverlayProse.css';

class OverlayProse extends React.Component {

    render() {

        const proseData = this.props.projectProseData;

        return (
            <div className="prose">
                <div className="project-subtitle">{proseData.projectSubtitle}</div>
                <div className="project-title">{proseData.projectTitle}</div>
                <div className="project-description">{proseData.projectDescription}</div>
                <div className="project-tags">
                    {
                        proseData.projectTags ?
                            proseData.projectTags.map(src => {
                                return <span className="project-tag"
                                    key={src}>
                                    {src}
                                </span>;
                            }) : null
                    }
                </div>
            </div>
        );
    }
}

export default OverlayProse;