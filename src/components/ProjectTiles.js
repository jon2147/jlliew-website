import React from 'react';

import ProjectTile from '../components/ProjectTile';

import '../components/ProjectTiles.css';
import '../components/ProjectOverlay.css';

import ProjectOverlayContent from './ProjectOverlayContent';


// import json
// map json objects to ProjectTile objects

// import json
// map json object to project tile
// render project tiles


function openOverlay() {
  document.getElementById("myNav").className = "overlay open";

}




// overlay div should be refactored to ProjectOverlay object, which includes ProjectOVerlayContent itself

class ProjectTiles extends React.Component {



  render() {
    return (
      <div>
        <div className="project-tiles">
          <ProjectTile diff={0} />
          <ProjectTile diff={1} />
          <ProjectTile diff={2} />
          <ProjectTile diff={3} />
          <ProjectTile diff={4} />
          <ProjectTile diff={5} />
          <ProjectTile diff={6} />
          <ProjectTile diff={7} />
          <ProjectTile diff={8} />
          <ProjectTile diff={9} />

        </div>
      </div>
    );
  }
}

export default ProjectTiles;