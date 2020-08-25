import React from 'react';



class ProjectTile extends React.Component {

    

    render() {

        const diff = this.props.diff;

        return (
            <div className="project-tile">
                <a href="google.com">
                    <img src={ diff ? 
                        "./images/thumbnails/wartide_apstaff_thumb.jpg" :
                        "./images/thumbnails/unimelb_study_thumb.jpg"
                    } class="tile-image"/>
                </a>
            </div>
        );
    }
}

export default ProjectTile;