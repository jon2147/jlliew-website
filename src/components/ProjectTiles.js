import React from 'react';

import ProjectTile from '../components/ProjectTile';

import './ProjectTiles.css';


class ProjectTiles extends React.Component {

  render() {
    return (
      <div className="project-tiles">

        {this.props.projectTileData.map((thumbnail, index) => {
          return <a className="project-tile"
            onClick={() => {
              this.props.openOverlay();
              this.props.setActiveProject(index);
            }}
            key={index}>
            <img className="tile-image" src={thumbnail} />
          </a>;
        })}



        {/*
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
          */}
      </div>
    );
  }
}

export default ProjectTiles;