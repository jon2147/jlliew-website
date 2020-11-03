import React from 'react';



class AuxiliaryExperiences extends React.Component {
    render() {
        return (
            <div className="recent-experience">                    
                <h2 className="auxiliary-label">
                    Recent experience
                </h2>
                <div className="experiences">
                    <span className="experience">
                        <img src="/images/unimelb.svg"
                            alt="Digital Designer, University of Melbourne"
                            className="experience-graphic" />
                        <div className="experience-position">Digital Designer</div>
                        <div className="experience-workplace">University of Melbourne</div>
                    </span>
                    <span className="experience">
                        <img src="/images/pictoria.svg"
                                alt="Graphic Designer, Pictoria Media"
                                className="experience-graphic" />
                            <div className="experience-position">Graphic Designer</div>
                            <div className="experience-workplace">Pictoria Media</div>
                    </span>
                    <span className="experience">
                        <img src="/images/wartide.svg"
                                alt="Freelance Artist, WartideCCG"
                                className="experience-graphic" />
                            <div className="experience-position">Freelance Artist</div>
                            <div className="experience-workplace">@WartideCCG</div>
                    </span>
                </div>
            </div>
        );
    }
}

export default AuxiliaryExperiences;