import React from 'react';

import ProjectTile from '../components/ProjectTile';

import '../components/ProjectTiles.css';

// import json
// map json objects to ProjectTile objects

class ProjectTiles extends React.Component {
    render() {
        return (
            <div className="project-tiles">
                <ProjectTile diff={true}/>
                <ProjectTile diff={false}/>
                <ProjectTile diff={true}/>
                <ProjectTile diff={false}/>
                <ProjectTile diff={true}/>
                <ProjectTile diff={false}/>
            </div>
        );
    }
}

export default ProjectTiles;