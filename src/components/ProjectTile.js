import React from 'react';


const thumbPath = "";
const imgPath = "";

// whether a tile is active should not be specified in the JSON file BTW, this should be handled by ProjectTiles


class ProjectTile extends React.Component {


    render() {


        /* Open */
    function openOverlay() {
        document.getElementById("projectOverlay").className = "overlay open";

    }

        // This is placeholder content ++++++++++++

        const diff = this.props.diff;
        let pathy = "";

        if (diff == 0) {
            pathy = "./images/thumbnails/wartide_apstaff_thumb.jpg"
        } else if (diff == 1) {
            pathy = "./images/thumbnails/unimelb_study_thumb.jpg"
        } else if (diff == 2) {
            pathy = "./images/thumbnails/bestfurn_daisy_thumb.jpg"
        }else if (diff == 3) {
            pathy = "./images/thumbnails/enp_guide_thumb.jpg"
        }else if (diff == 4) {
            pathy = "./images/thumbnails/unimelb_pursuit_thumb.jpg"
        }else if (diff == 5) {
            pathy = "./images/thumbnails/mlily_vfx_thumb.jpg"
        } else if (diff == 6) {
            pathy = "./images/thumbnails/mlily_store_thumb.jpg"
        }else if (diff == 7) {
            pathy = "./images/thumbnails/ms_joseph_thumb.jpg"
        }else if (diff == 8) {
            pathy = "./images/thumbnails/bant_beacon_thumb.jpg"
        }else if (diff == 9) {
            pathy = "./images/thumbnails/wartide_vshift_thumb.jpg"
        }

        // This is placeholder content ++++++++++++


        // openOverlay here should (maybe actually be a part of ProjectTiles, not App.js)
        // have parameters that the ProjectTile passes through (i.e. title, subtitle, description, etc.)
        // or if not parameters, an ID referring to this data that ProjectTiles can use to populate its template with

        return (
            <div className="project-tile">
                <a href="javascript:void(0)" onClick={openOverlay}> 
                    <img src={pathy} class="tile-image" />
                </a>
            </div>
        );
    }
}

export default ProjectTile;