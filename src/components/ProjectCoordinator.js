import React from 'react';
import ProjectTiles from './ProjectTiles';
import ProjectOverlay from './ProjectOverlay';

import { projectData } from '../data/projects.js'



const fadeOutInterval = 200;

class ProjectCoordinator extends React.Component {


    constructor() {
        super();
        this.state = {
            activeProjectIndex: 0,
            contentFadeIn: true,
            projectTileData: [],
            projectProseData: [],
            projectNavData: [],
            projectGalleryData: []
        };

        this.setActiveProject = this.setActiveProject.bind(this);
        this.changeActiveProject = this.changeActiveProject.bind(this);
        this.nextProject = this.nextProject.bind(this);
        this.previousProject = this.previousProject.bind(this);

        this.openOverlay = this.openOverlay.bind(this);
        this.closeOverlay = this.closeOverlay.bind(this);


    }

    setActiveProject(projectIndex) {
        this.setState({ activeProjectIndex: projectIndex });
        this.setState({ contentFadeIn: true });


        const proseData = [{
            projectTitle: projectData[projectIndex].projectTitle,
            projectSubtitle: projectData[projectIndex].projectSubtitle,
            projectDescription: projectData[projectIndex].projectDescription,
            projectTags: projectData[projectIndex].projectTags
        }];

        this.setState({ projectProseData: proseData });

        
        const galleryData = projectData[projectIndex].projectImages;
        this.setState({ projectGalleryData: galleryData });


        const navData = [
            projectData[projectIndex == 0 ? projectData.length - 1 : projectIndex - 1].projectTitle,
            projectData[projectIndex >= (projectData.length - 1) ? 0 : projectIndex + 1].projectTitle
        ];

        this.setState({ projectNavData: navData });

        

    }


    changeActiveProject(projectIndex) {
        if (projectIndex == this.state.activeProjectIndex) {
            return;
        }
        this.setState({ contentFadeIn: false });
        setTimeout(() => this.setActiveProject(projectIndex),
            fadeOutInterval);
    }

    nextProject() {
        const activeIndex = this.state.activeProjectIndex;

        activeIndex >= (projectData.length - 1) ?
            this.changeActiveProject(0) : this.changeActiveProject(activeIndex + 1);
    }

    previousProject() {
        const activeIndex = this.state.activeProjectIndex;

        activeIndex == 0 ?
            this.changeActiveProject(projectData.length - 1) : this.changeActiveProject(activeIndex - 1);
    }


    openOverlay() {
        document.getElementById("projectOverlay").className = "overlay open";
    }

    closeOverlay() {
        document.getElementById("projectOverlay").className = "overlay";
    }


    componentDidMount() {
        // set initial project so that overlay has data
        this.setActiveProject(0);

        // Prepare an array of thumbnails for the project tiles to send to the ProjectTiles element
        const tileData = [];

        projectData.map((project, index) => {
            tileData[index] = project.projectThumbnail;
        });

        this.setState({ projectTileData: tileData });

    }

    render() {

        return (
            <div className="project-coordinator">
                <ProjectOverlay
                    contentFadeIn={this.state.contentFadeIn}
                    projectProseData={this.state.projectProseData}
                    projectNavData={this.state.projectNavData}
                    projectGalleryData={this.state.projectGalleryData}

                    closeOverlay={this.closeOverlay}
                    previousProject={this.previousProject}
                    nextProject={this.nextProject}
                />
                <main id="projects">
                    <ProjectTiles
                        projectTileData={this.state.projectTileData}
                        openOverlay={this.openOverlay}
                        setActiveProject={this.setActiveProject} />
                </main>
            </div>
        );
    }
}

export default ProjectCoordinator;