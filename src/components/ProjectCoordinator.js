import React from 'react';
import ProjectTiles from './ProjectTiles';
import ProjectOverlay from './ProjectOverlay';

import { projectData, canonicalURL, siteDescription } from '../data/projects.js'
import { Helmet } from 'react-helmet';


const fadeOutInterval = 200;
const defaultPageTitle = "Design";


class ProjectCoordinator extends React.Component {


    constructor() {
        super();
        this.state = {
            activeProjectIndex: 0,
            contentFadeIn: true,
            projectTileData: [],
            projectProseData: [],
            projectNavData: [],
            projectGalleryData: [],
            pageTitle: defaultPageTitle,
            pageDescription: siteDescription,
            pageCanonicalURL: canonicalURL
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
        this.setState({ pageTitle: projectData[projectIndex].projectTitle, pageCanonicalURL: canonicalURL + projectData[projectIndex].projectURL});
        this.setState({ pageDescription: projectData[projectIndex].projectDescription });


        const proseData = [{
            projectTitle: projectData[projectIndex].projectTitle,
            projectSubtitle: projectData[projectIndex].projectSubtitle,
            projectDescription: projectData[projectIndex].projectDescription,
            projectTags: projectData[projectIndex].projectTags
        }];

        this.setState({ projectProseData: proseData });


        const galleryData = projectData[projectIndex].projectImages;
        this.setState({ projectGalleryData: galleryData });


        const navBackwardIndex = projectIndex == 0 ? projectData.length - 1 : projectIndex - 1;
        const navForwardIndex = projectIndex >= (projectData.length - 1) ? 0 : projectIndex + 1;

        const navData = [
            projectData[navBackwardIndex].projectTitle,
            projectData[navForwardIndex].projectTitle,
            projectData[navBackwardIndex].projectURL,
            projectData[navForwardIndex].projectURL
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
        this.setState({ pageTitle: defaultPageTitle, pageCanonicalURL: canonicalURL });
        this.setState({ pageDescription: siteDescription });
    }


    componentDidMount() {

        const providedURL = window.location.href;
        const originURL = window.location.origin;
        let navigatingToProject = false;
        const length = projectData.length;

        // Prepare an array of thumbnails for the project tiles to send to the ProjectTiles element
        const tileData = [];

        projectData.map((project, index) => {

            // Prepare the data for the ProjectTiles
            tileData[index] = [project.projectThumbnail, project.projectTitle, project.projectURL];

            // Check if the current URL matches a project entry
            if (providedURL == originURL + project.projectURL) {
                this.setActiveProject(index);
                this.openOverlay();
                navigatingToProject = true;
            }

            if (index === length - 1) {
                if (navigatingToProject == false) {

                    // If we've gotten to the end of the map and we're not navigating to a project, close the overlay; redirect to origin if dirty URL is detected
                    if (providedURL == originURL || providedURL == originURL + "/#projects" || providedURL == originURL + "/") {
                        this.closeOverlay();
                    } else {
                        // Because we already redirect to origin when an invalid URL is detected (through Firebase), update the browser-displayed URL to match this
                        window.history.replaceState({}, "", originURL);
                    }
                }
            }
        });

        this.setState({ projectTileData: tileData });

        // Respond to a browser navigation event
        window.onpopstate = this.onBrowserNavigationEvent;
    }

    onBrowserNavigationEvent = (e) => {
        const providedURL = window.location.href;
        const originURL = window.location.origin;
        let navigatingToProject = false;
        const length = projectData.length;

        projectData.map((project, index) => {
            // Check if the current URL matches a project entry
            if (providedURL == originURL + project.projectURL) {
                this.changeActiveProject(index);
                this.openOverlay();
                navigatingToProject = true;
            }

            // If we've gotten to the end of the map and we're not navigating to a project, close the overlay
            if (index === length - 1) {
                if (navigatingToProject == false) {
                    this.closeOverlay();
                }
            }
        });

    };

    render() {

        return (
            <div className="project-coordinator">
                <Helmet>
                    <title>{"Jonathan Liew | " + this.state.pageTitle}</title>
                    <link rel="canonical" href={this.state.pageCanonicalURL} />
                </Helmet>
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