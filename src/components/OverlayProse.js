import React from 'react';
import './OverlayProse.css';



// This would only be fed its text (self-contained like gallery)

const projectTitle = "University of Melbourne";
const projectSubtitle = "Lachlan James @WartideCCG";
const projectDescription = "The cleaners have done their job on you. They're hip to it, man, they're in the groove. They've hosed you down, you're good as new; and they're lining up to inspect you. Hey, little train, wait for me! I once was blind, but now I see. Have you left a seat for me? Is that such a stretch of the imagination?";
const projectTags = ["Interaction Design", "User Experience"];

const projectDescriptionLong = `The cool mist and shadow of the valley afforded Ahasuerus a tranquil comfort as he advanced. Of the plant-life that managed to persist in the cold, moss clothed the monolithic statues as hanging vines bound them in fellowship. The air was still, as if half the valley was held in water and out of time. He reached a fold of stone and laid against the rocky cradle.

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

class OverlayProse extends React.Component {




    render() {

        const proseData = [];
        var projectTags = [];

        this.props.projectProseData.map((prose, index) => {
            proseData.projectSubtitle = prose.projectSubtitle;
            proseData.projectTitle = prose.projectTitle;
            proseData.projectDescription = prose.projectDescription;
            projectTags = prose.projectTags;
        })

        return (
            <div className="prose">
                <div className="project-subtitle">{proseData.projectSubtitle}</div>
                <div className="project-title">{proseData.projectTitle}</div>
                <div className="project-description">{proseData.projectDescription}</div>
                <div className="project-tags">
                    {projectTags.map(src => {
                        return <span className="project-tag"
                            key={src}>
                            {src}
                        </span>;
                    })}
                </div>
            </div>
        );
    }
}

export default OverlayProse;