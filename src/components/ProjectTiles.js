import React from 'react';
import './ProjectTiles.css';
import { NavLink } from 'react-router-dom';

class ProjectTiles extends React.Component {

  render() {
    return (
      <div className="project-tiles">

        {this.props.projectTileData.map((tile, index) => {
          return <NavLink to={tile[2]} className="project-tile"
            onClick={() => {
              this.props.openOverlay();
              this.props.setActiveProject(index);
            }}
            key={index}>
            <img className="tile-image" src={tile[0]} alt={tile[1]} />
          </NavLink>;
        })}
      </div>
    );
  }
}

export default ProjectTiles;