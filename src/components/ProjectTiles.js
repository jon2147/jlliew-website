import React from 'react';
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
      </div>
    );
  }
}

export default ProjectTiles;