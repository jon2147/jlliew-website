import React from 'react' // React must be in scope to use JSX

export const projectData = [
    {
        projectTitle: "Ancient Priest's Staff",
        projectSubtitle: "Lachlan James @WartideCCG",
        projectDescription: "I've been brought on to complete a series of illustrations for Lachlan James' collectible card game Wartide. Each piece is required to reflect the utility of the card within the context of the game, as well as contribute to the Lore of Wartide.\n\nThe initial test piece commissioned by Lachlan - 'Ancient Priest's Staff ' (pictured) - is intended to create intrigue and ambiguity surrounding the eponymous staff, its people and its history.\n\nEach piece is being composed to advantage their specified dimensions, while also providing plenty of extra bleed for confident printing. Colours are dynamically tested with grayscale & CMYK proofs to ensure optimal values, regardless of context.",
        projectThumbnail: "./images/thumbnails/wartide_apstaff_thumb.jpg",
        projectTags: ["Card Game", "Illustration", "Concept Art"],
        projectImages: [
            {
                imageURL: "./images/wartide_apstaff.jpg",
                imageAlt: "Wartide - Ancient Priest's Staff",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/wartide_vshift.png",
                imageAlt: "Wartide - Void Shift",
                desktopContain: true,
                mobileContain: false
            }
        ]
    },
    {
        projectTitle: "Pursuit: COVID-19 Vaccine Special Report",
        projectSubtitle: "University of Melbourne",
        projectDescription: <div>
            <p>As the world fell into lockdown, the media team at <i>Pursuit</i> raced to prepare a report on <a href="https://pursuit.unimelb.edu.au/articles/the-science-behind-the-search-for-a-covid-19-vaccine" target="_blank">the search for a COVID-19 vaccine</a>. They enlisted our help to generate motion graphics and a novel interactive piece for the five-part report.</p>
            <p>We spent some weeks acquainting ourselves with cellular biology, and drafted scripts with Pursuit's senior editors for the publication's explainer videos. The information needed to be as digestible and accurate as possible, so it was a treat to hear the academics were happy with our comparably trivial work; here's hoping the remaining readership are just as thrilled.</p>
            <p>The video I've included is a relic from an earlier draft to which the team were certainly partial, using modified elements sourced from <i>Good Studio</i> stock. There's also a concept shot with abandoned designs for the video's molecular elements.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/unimelb_pursuit_thumb.jpg",
        projectTags: ["After Effects", "Illustrator", "Animation", "Motion Graphics", "Adobe Media Encoder", "COVID-19", "2020"],
        projectImages: [
            {
                imageURL: "./images/pursuit/pursuit_article_header.jpg",
                imageAlt: "Pursuit Article Header",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/pursuit/pursuit_article_featured.jpg",
                imageAlt: "Pursuit Article Front Page Feature",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/pursuit/pursuit_bts_anim.mp4",
                imageAlt: "Pursuit Behind the Scenes Animation",
                desktopContain: false,
                mobileContain: false,
                isVideo: true
            },
            {
                imageURL: "./images/pursuit/pursuit_bts_concept.jpg",
                imageAlt: "Pursuit Behind the Scenes Concept",
                desktopContain: false,
                mobileContain: false
            }
        ]
    },
    {
        projectTitle: "University of Melbourne",
        projectSubtitle: "Digital Designer",
        projectDescription: <div>
        <p>As the world fell into lockdown, the media team at <i>Pursuit</i> raced to prepare a report on <a href="https://pursuit.unimelb.edu.au/articles/the-science-behind-the-search-for-a-covid-19-vaccine" target="_blank">the search for a COVID-19 vaccine</a>. They enlisted our help to generate motion graphics and a novel interactive piece for the five-part report.</p>
        <p>We spent some weeks acquainting ourselves with cellular biology, and drafted scripts with Pursuit's senior editors for the publication's explainer videos. The information needed to be as digestible and accurate as possible, so it was a treat to hear the academics were happy with our comparably trivial work; here's hoping the remaining readership are just as thrilled.</p>
        <p>The video I've included is a relic from an earlier draft to which the team were certainly partial, using modified elements sourced from <i>Good Studio</i> stock.</p>
    </div>,
        projectThumbnail: "./images/thumbnails/unimelb_study_thumb.jpg",
        projectTags: ["Interaction Design", "User Experience"],
        projectImages: [
            {
                imageURL: "./images/study_oyl_inner.jpg",
                imageAlt: "Study: One Year Later Booklet",
                desktopContain: false,
                mobileContain: false
            },
            {
                imageURL: "./images/unimelb/study_scp_principle.gif",
                imageAlt: "",
                desktopContain: true,
                mobileContain: true
            }
        ]
    },
    {
        projectTitle: "Pictoria Media",
        projectSubtitle: "Graphic Designer",
        projectDescription: "Under Pictoria Media, I've primarily worked on a bi-monthly catalogue for the Bestfurn Furniture & Bedding Group, for which I've consolidated hundreds of media assets to ensure convenient & organised access, participated in studio shoots – decorating the set, working with resident photographers & a rotation of production staff – in addition to the design of and planning for the catalogue.",
        projectThumbnail: "./images/thumbnails/bestfurn_daisy_thumb.jpg",
        projectTags: ["Graphic Design", "Pre-press", "VFX Production", "Animation & Compositing"],
        projectImages: [
            {
                imageURL: "./images/thumbnails/bestfurn_daisy_thumb.jpg",
                imageAlt: "Daisy 3 Piece Recliner Suite Hero",
                desktopContain: false,
                mobileContain: false
            }
        ]
    },

    {
        projectTitle: "Fivex Art Prize 2020",
        projectSubtitle: "Digital Billboard Art",
        projectDescription: <div>
            <p>Although I didn't win, my submissions for the new annual Fivex Art Prize are getting a spot here. <a href="https://www.fivexartprize.com.au/gallery/" target="_blank">Winning artworks</a> were to be showcased intermittently among advertising content on a pair of LED billboards on the corner of Flinders and Elizabeth streets.</p>
            <p>I conceived the piece as one that might inspire its viewers to i. seek out the potential of their world with a quixotic mind; and ii. to find themselves and others in that same world.</p>
            <p>I chose the figure of a swimmer / diver as I felt it would capture a sense of individual freedom, as well as one of aspirational determination. The swimmer navigates the atomic complexity of their surroundings – of which they are made up and in which they are reflected – in an endeavour tempered by an appreciation of their world.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/fivex_podium_thumb.jpg",
        projectTags: ["Digital Painting", "LED billboard", "Flinders St", "Elizabeth St", "QMS Media"],
        projectImages: [
            {
                imageURL: "./images/fivex_fb_wrap.png",
                imageAlt: "Fivex Art Prize Billboard Wrap Artwork",
                desktopContain: false,
                mobileContain: true
            },
            {
                imageURL: "./images/fivex_fb_podium.png",
                imageAlt: "Fivex Art Prize Billboard Podium Artwork",
                desktopContain: true,
                mobileContain: true
            }
        ]
    },
    {
        projectTitle: "Evans & Partners",
        projectSubtitle: "Graphic Design",
        projectDescription: "",
        projectThumbnail: "./images/thumbnails/enp_guide_thumb.jpg",
        projectTags: [],
        projectImages: [
            {
                imageURL: "./images/thumbnails/enp_guide_thumb.jpg",
                imageAlt: "Wartide - Ancient Priest's Staff",
                desktopContain: true,
                mobileContain: false
            }
        ]
    },
    {
        projectTitle: "Master Studies",
        projectSubtitle: "Originals by Joseph Singer Sargent",
        projectDescription: "Master studies are great for practice because .",
        projectThumbnail: "./images/masters/egypt_jss.jpg",
        projectTags: ["Master Studies", "Digital Painting", "Portrait Art"],
        projectImages: [
            {
                imageURL: "./images/masters/jpulitzer_jss.jpg",
                imageAlt: "Joseph Pulitzer Master Study (original by Joseph Singer Sargent)",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/masters/egypt_jss.jpg",
                imageAlt: "Egyptian Woman Master Study (original by Joseph Singer Sargent)",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/masters/henry_jss.jpg",
                imageAlt: "Henry Master Study (original by Joseph Singer Sargent)",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/masters/joachim_jss.jpg",
                imageAlt: "Joseph Joachim Master Study (original by Joseph Singer Sargent)",
                desktopContain: true,
                mobileContain: false
            }
        ]
    }
];