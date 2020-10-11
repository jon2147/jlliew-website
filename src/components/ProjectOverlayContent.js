import React from 'react';


import Close from '@material-ui/icons/Close';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';

import '../components/ProjectOverlay.css';


const projectTitle = "University of Melbourne";
const projectSubtitle = "Lachlan James @WartideCCG";
const projectDescription = "The cleaners have done their job on you. They're hip to it, man, they're in the groove. They've hosed you down, you're good as new; and they're lining up to inspect you. Hey, little train, wait for me! I once was blind, but now I see. Have you left a seat for me? Is that such a stretch of the imagination?";
const projectTags = ["Interaction Design", "User Experience"];

const projectDescriptionLong = `"Jehoshaphat," he whispered.

At the sun's dictate, half of the gorge was lit in cold brilliance, while the other half stood in a modest shroud.

At each side a host of gargantuan figures stood vigilant. All were clad in ornate mail and mantled in ritual drapery. Their faces were obscured by great crowns, and held outward were long rods that decreed their business - a duty forgotten and foreign to the Earth that remained - as their stone bodies receded into cliff.

The cool mist and shadow of the valley afforded Ahasuerus a tranquil comfort as he advanced. Of the plant-life that managed to persist in the cold, moss clothed the monolithic statues as hanging vines bound them in fellowship.

In the shadow of the valley, the stone guardians were a sombre blue. The air was still, as if half the valley was held in water and out of time. He reached a fold of stone and laid against the rocky cradle.

Lying still, Ahasuerus felt as if he were floating in the blue-green of the ocean. The titans' silhouettes became leviathans coursing the sea's corridor - passive in their movements yet never without watchful eyes as they circled round. They would trail silently through the depths, where light could only strain through.

The water was cool, but did not threaten to chill. He drifted alone, looking down for the seabed, only to find the ocean's boundaries to be more blue and green. Its turquoise expanse reached out into eternity.

He felt a cold stream through his nostrils, revitalising his tired body and alerting him to the situation; he was drowning.

Ahasuerus beat at the water, pushing and kicking as water brought fire to his lungs and his nose burned with froth. He thrashed his arms and legs, but they could not deliver. He couldn't feel any rise, and would only catch the tease of a lighter green amidst his frenzy.

The water took him with cold as his arms began to tire, and soon he could protest no more.

Ahasuerus' eyes struggled to persist against green oblivion, when he heard muffled voices calling his name. Filled with hope as well as water, Ahasuerus willed his eyes open, and saw an anguilliform figure heading towards him.

What seemed like a large snake twisted its tail to support its human torso. Ahasuerus couldn't speak and there was no tolerating the gallons that flooded his body, save for the brief instant the creature held his head in its unexpectedly smooth hands; the world froze.

It was beautiful. Its piercing grey-blue eyes made for momentary recess before Ahasuerus felt its soft fingers press hard at and into his own eyes—

Frost combed Ahasuerus' skin as he woke to a crisp dawn.
`;


function closeNav() {
    document.getElementById("myNav").className = "overlay";
}

// JON:use CSS order property for image display on mobile etc.

class ProjectOverlayContent extends React.Component {



    render() {
        return (

            <div id="myNav" className="overlay">
                <a href="javascript:void(0)" onClick={closeNav}><Close className="close-overlay-icon" /></a>

                <div className="overlay-content">
                    <div className="overlay-content-left">
                        <div className="project-subtitle">{projectSubtitle}</div>
                        <div className="project-title">{projectTitle}</div>
                        <div className="project-description">{projectDescription}</div>
                        <div className="project-tags">
                            {projectTags.map(src => {
                                return <span className="project-tag"
                                    key={src} src={src}>
                                    {src}
                                </span>;
                            })}
                        </div>
                    </div>

                    <div className="overlay-content-right">
                        <div><img src="./images/thumbnails/wartide_apstaff_thumb.jpg"/></div>
                    </div>
                </div>

                <div className="overlay-nav">
                    <a className="overlay-nav-link" href="javascript:void(0)">
                        <ArrowBack className="overlay-nav-icon" />
                        Ancient Priest's Staff
                    </a>
                    <a className="overlay-nav-link forward" href="javascript:void(0)">
                        <ArrowForward className="overlay-nav-icon forward-mobile" />
                        Pictoria Media
                        <ArrowForward className="overlay-nav-icon forward" />
                    </a>
                </div>
            </div>
        );
    }
}

export default ProjectOverlayContent;