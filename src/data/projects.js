import React from 'react' // React must be in scope to use JSX

export const projectData = [
    {
        projectTitle: "Pursuit: COVID-19 Vaccine Special Report",
        projectSubtitle: "University of Melbourne",
        projectDescription: <div>
            <p>As the world fell into lockdown, the media team at <i>Pursuit</i> raced to prepare a report on <a href="https://pursuit.unimelb.edu.au/articles/the-science-behind-the-search-for-a-covid-19-vaccine" target="_blank">the search for a COVID-19 vaccine</a>. They enlisted our help to generate motion graphics and a novel interactive piece for the five-part report.</p>
            <p>We spent some weeks acquainting ourselves with cellular biology, and drafted scripts with Pursuit's senior editors for the publication's explainer videos, making sure to keep the information as digestible and accurate as possible. By the end, the academics were happy with our comparatively trivial work – I hope the remaining readership were just as thrilled with the science.</p>
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
                imageAlt: "Pursuit Video Animation Development",
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
            <p><i>"The University of Melbourne's websites are our most globally visible asset, attracting <b>27.5 million</b> visitors a year. <b>The Digital and Online Channels (DOC)</b> team is the team responsible for them."</i> – We printed that in a book.</p>
            <p>As a part of this illustrious DOC team, I contributed to a number of major projects including: Study Find a Course (FAC) – redesigning sample course plans, course filters and in-page navigation; the university's Okta multi-factor authentication login screens; the events.unimelb LiveWhale site; and more – on top of day-to-day BAU work for our digital design system, and occasional print design for internal documentation.</p>
            <p>I left the team to tend to my mental health and attribute more time to other pursuits. If you get the opportunity to work with the DOC team, you'll find a place where you can indulge in good humour, and good will.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/unimelb_doc_thumb.jpg",
        projectTags: ["Interaction Design", "User Experience", "UX / UI", "Responsive Design", "WCAG 2.0 AA Accessibility", "Design System", "Figma", "Sketch", "InDesign", "Principle", "Print Design"],
        projectImages: [
            {
                imageURL: "./images/unimelb/unimelb_doc_stat.jpg",
                imageAlt: "Digital Online Channels Booklet Overleaf",
                desktopContain: false,
                mobileContain: false
            },
            {
                imageURL: "./images/unimelb/unimelb_megamenu.png",
                imageAlt: "Unimelb Megamenu",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/unimelb/unimelb_mfa_screens.png",
                imageAlt: "Digital Online Channels Booklet Overleaf",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/unimelb/study_ipnav_dev.png",
                imageAlt: "Study Find a Course In-page Navigation Development",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/unimelb/study_scp_principle.gif",
                imageAlt: "Study Find a Course In-page Navigation Prototype, made in Principle",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/unimelb/study_fac_filters.png",
                imageAlt: "Study Find a Course Filters UI Overhaul",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/unimelb/study_scp_semantic.jpg",
                imageAlt: "Study Sample Course Plan Semantic Colourisation",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/unimelb/unimelb_livewhale_events.png",
                imageAlt: "LiveWhale Events Component Samples",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/unimelb/study_oyl_inner.jpg",
                imageAlt: "Study: One Year Later Booklet (Inner)",
                desktopContain: false,
                mobileContain: false
            },
            {
                imageURL: "./images/unimelb/study_oyl_back.jpg",
                imageAlt: "Study: One Year Later Booklet (Back)",
                desktopContain: false,
                mobileContain: false
            }
        ]
    },
    {
        projectTitle: "Wartide CCG",
        projectSubtitle: "Lachlan James",
        projectDescription: <div>
            <p>I've been brought on to complete a series of illustrations for a collectible indie card game called Wartide. I've composed many of my pieces with an ensemble of figures, using a human frame to create intrigue and dimensionality surrounding the card's object, individual character or event.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/wartide_apstaff_thumb.jpg",
        projectTags: ["Digital Painting", "Collectible Card Game", "Illustration", "Concept Art"],
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
        projectTitle: "Melbourne Pollen App Redesign",
        projectSubtitle: "University of Melbourne",
        projectDescription: <div>
            <p><i>Melbourne Pollen</i> lets its users keep track of the level of pollen in the air, which is particularly beneficial for those prone to the effects of hay fever, seasonal asthma or other allergic conditions.</p>
            <p>Just before the 2019 bushfires made air quality monitoring an increasing necessity for the general public, the team behind Pollen proposed a new progressive web app (PWA) that would incorporate additional broadcasts and user tools, superseding the existing service. We iterated with the Pollen team (who've been working pro bono!– <a href="https://www.melbournepollen.com.au/who-are-we/meet-team/" target="_blank">here they are</a>) to provide modular, adaptable designs to guide the development of their new app.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/pollen_grid_thumb.jpg",
        projectTags: ["Progressive Web App", "Interaction Design", "User Interaction", "Style Guide", "Pollen"],
        projectImages: [
            {
                imageURL: "./images/pollen/pollen_general.png",
                imageAlt: "Pollen App Preview",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/pollen/pollen_logo_variants.jpg",
                imageAlt: "Pollen Logo Proposals",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/pollen/pollen_colour_excerpt.jpg",
                imageAlt: "Pollen Style Guide Colour Excerpt",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/pollen/pollen_pwa_dvm.jpg",
                imageAlt: "Pollen PWA Desktop vs Mobile",
                desktopContain: true,
                mobileContain: true
            }
        ]
    },
    {
        projectTitle: "Bestfurn Furniture & Bedding",
        projectSubtitle: "Pictoria Media",
        projectDescription: <div>
            <p>Under Pictoria Media, I primarily worked on a bi-monthly catalogue for the <i>Bestfurn Furniture &amp; Bedding Group</i>, consolidating hundreds of media assets, participating in studio shoots – decorating the set, working with resident photographers and a rotation of production staff – in addition to the design of and planning for the catalogue.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/bestfurn_gilmore_thumb.jpg",
        projectTags: ["Graphic Design", "Pre-press", "Photoshop", "InDesign"],
        projectImages: [
            {
                imageURL: "./images/bestfurn/bestfurn_190304_gilmore.jpg",
                imageAlt: "Bestfurn Gilmore Recliner Suite",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/bestfurn/bestfurn_diaz_edit.jpg",
                imageAlt: "Bestfurn Diaz Cover Shoot to Asset",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/bestfurn/bestfurn_190708_spread_a.jpg",
                imageAlt: "Bestfurn July August Winter Spread",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/bestfurn/bestfurn_191112_shotlist.jpg",
                imageAlt: "Bestfurn Spring Summer Shoot Plan",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/bestfurn/bestfurn_daisy_hero.jpg",
                imageAlt: "Bestfurn Daisy Hero",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/bestfurn/bestfurn_190102_spread.jpg",
                imageAlt: "Bestfurn Jan Feb Warehouse Sale Spread",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/bestfurn/bestfurn_190102_back.jpg",
                imageAlt: "Bestfurn Jan Feb Warehouse Sale Back",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/bestfurn/bestfurn_190708_front.jpg",
                imageAlt: "Bestfurn Jan Feb Warehouse Sale Back",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/bestfurn/bestfurn_cooper_mockup.jpg",
                imageAlt: "Cooper Kids Collection Concept to Final Result",
                desktopContain: false,
                mobileContain: false
            }
        ]
    },
    {
        projectTitle: "MLILY Australia",
        projectSubtitle: "Pictoria Media",
        projectDescription: <div>
            <p>One of Pictoria Media's frequent clients <i>MLILY Australia</i>, were preparing for the AIFF (Australian International Furniture Fair – not the audio file format), and required video content to showcase their new technologies. I was responsible for storyboarding, animating, editing and compositing 3D visualisations for their Active Touch and Copper Fusion products.</p>
            <p>I also worked on point of sale material (pullup and hang banners, feather flags, window decals, etc.) with which staff could adorn their stores and show off their Mancunian partners.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/mlily_vfx_thumb.jpg",
        projectTags: ["Graphic Design", "Pre-press", "VFX Production", "Animation & Compositing", "POS"],
        projectImages: [
            {
                imageURL: "./images/mlily/mlily_pos_pullup_manu.jpg",
                imageAlt: "MLILY Point of Sale Pullup Banner - Manchester United",
                desktopContain: false,
                mobileContain: false
            },
            {
                imageURL: "./images/mlily/mlily_pcm_storyboard.jpg",
                imageAlt: "MLILY PCM Active Touch Technology Storyboard",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/mlily/mlily_pcm_vfx.jpg",
                imageAlt: "MLILY PCM Active Touch VFX Samples",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/mlily/mlily_cf_draft_render.mp4",
                imageAlt: "MLILY Copper Fusion Mattress Draft Render",
                desktopContain: true,
                mobileContain: true,
                isVideo: true
            },
            {
                imageURL: "./images/mlily/mlily_pos_context.jpg",
                imageAlt: "MLILY Point of Sale Pullup Banner - Manchester United",
                desktopContain: false,
                mobileContain: false
            },
            {
                imageURL: "./images/mlily/mlily_pos_decal.jpg",
                imageAlt: "MLILY Point of Sale Window Decal - David de Gea",
                desktopContain: true,
                mobileContain: true
            },
            {
                imageURL: "./images/mlily/mlily_pos_pullup_wisteria.jpg",
                imageAlt: "MLILY Point of Sale Pullup Banner - Wisteria",
                desktopContain: true,
                mobileContain: true
            }
        ]
    },
    {
        projectTitle: "Fivex Art Prize 2020",
        projectSubtitle: "Digital Billboard Art",
        projectDescription: <div>
            <p>The new annual <a href="https://www.fivexartprize.com.au/gallery/" target="_blank">Fivex Art Prize</a> intended for a selection of paired artworks to be displayed on LED billboards on the corner of Flinders and Elizabeth streets. My submissions were <i>not</i> selected, but I've arranged for them to be displayed here.</p>
            <p>I conceived this piece as one that might inspire its viewers to i. seek out the potential of their world with a quixotic mind; and ii. to find themselves and others in that same world. The swimmer is a figure of individual freedom, and as a diver one of determined curiosity. They navigate the atomic complexity of their surroundings – of which they are made up and in which they are reflected – in an endeavour tempered by an appreciation of their world.</p>
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
        projectSubtitle: "Algo Trading Services",
        projectDescription: <div>
            <p>The stock-broking solutions firm (then transitioning from <i>Evans &amp; Peters</i>) hired Algo Trading Services to produce an administration portal for staff members, and they required a design overhaul.</p>
            <p>I prepared a series of visual guides, each containing applications of my new designs and notes on appropriate styling, visual indicators, and form flow– making interactions meaningful and clear, and all in keeping with the established brand identity of Evans &amp; Partners.</p>
        </div>,
        projectThumbnail: "./images/thumbnails/enp_guide_thumb.jpg",
        projectTags: [],
        projectImages: [
            {
                imageURL: "./images/enp/enp_cover.jpg",
                imageAlt: "Wartide - Ancient Priest's Staff",
                desktopContain: false,
                mobileContain: false
            }
        ]
    },
    {
        projectTitle: "Master Portrait Studies",
        projectSubtitle: "Originals by John Singer Sargent",
        projectDescription: <div>
            <p>Studying works from masters like John Singer Sargent is one of my favourite ways to improve my drawing/painting. It's helpful for gaining insight into how to simplify and capture a potential subject, while honing your mechanics through the reproduction. A fun way to see how you went is to run a <a href="https://www.google.com/searchbyimage?&amp;image_url=jlliew.com/images/masters/jpulitzer_jss.jpg" target="_blank">reverse Google image search</a> – you know you've done alright when it directs you to the original!</p>
        </div>,
        projectThumbnail: "./images/thumbnails/ms_joseph_thumb.jpg",
        projectTags: ["Master Studies", "Digital Painting", "Portrait Art"],
        projectImages: [
            {
                imageURL: "./images/masters/jpulitzer_jss.jpg",
                imageAlt: "Joseph Pulitzer Master Study (original by John Singer Sargent)",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/masters/egypt_jss.jpg",
                imageAlt: "Egyptian Woman Master Study (original by John Singer Sargent)",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/masters/henry_jss.jpg",
                imageAlt: "Sir Henry Hughes Wilson Master Study (original by John Singer Sargent)",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/masters/joachim_jss.jpg",
                imageAlt: "Joseph Joachim Master Study (original by Joseph Singer Sargent)",
                desktopContain: true,
                mobileContain: true
            }
        ]
    },
    
    {
        projectTitle: "Red Country",
        projectSubtitle: "Game Design Studio 2015",
        projectDescription: <div>
            <p><i>Red Country</i> was a real-time online multiplayer (and very student-made) game centred around uncertainty and deception, taking place in the fictional Red Country National Park. Unfortunate Red Country patrons are given no assurance of enemy or ally, relying on the tools available and the geography itself to survive a predatory doppelgänger.</p>
            <p>As lead artist, I produced concept art and modelled many of our 3D assets. We were also required to submit <a href="https://youtu.be/A8NFMhy85SE" target="_blank">a trailer</a> with our game; I edited and produced the music for it. The voice clips following the intro are voice commands straight from the game, and if you can believe it, I voiced these as well as the intro!</p>
        </div>,
        projectThumbnail: "./images/thumbnails/redcountry_thumb.jpg",
        projectTags: ["Concept Art", "3D Modelling", "Level Design", "Video Editing", "Music Production"],
        projectImages: [
            {
                imageURL: "./images/redcountry/rc_cover.jpg",
                imageAlt: "Red Country Temp Image",
                desktopContain: true,
                mobileContain: false
            },
            {
                imageURL: "./images/redcountry/rc_characters.jpg",
                imageAlt: "Red Country Temp Image",
                desktopContain: false,
                mobileContain: false
            },
            {
                imageURL: "./images/redcountry/rc_screenshots.jpg",
                imageAlt: "Red Country Temp Image",
                desktopContain: true,
                mobileContain: false
            },
            /*{
                imageURL: <iframe width="100%" height="100%" src="https://www.youtube.com/embed/A8NFMhy85SE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
                imageAlt: "Red Country Trailer",
                desktopContain: true,
                mobileContain: false,
                isCustom: true
            }*/
        ]
    }
];