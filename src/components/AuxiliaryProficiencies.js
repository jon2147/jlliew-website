import React from 'react';

const auxiliaryLabel = "Software proficiency";
const profs = ["Photoshop", "InDesign", "Maya", "Mudbox", "Illustrator", "Acrobat", "Cinema4D", "Figma", "Sketch",
"Principle", "Sony Vegas", "Premiere", "After Effects", "Visual Studio Code", "Android Studio", "Unity"]

class AuxiliaryProficiencies extends React.Component {
 
    render() {
        return (
            <div className="software-proficiencies">
                <h2 className="auxiliary-label">{auxiliaryLabel}</h2>
                <div className="proficiencies">
                    {profs.map(src => {
                        return <span className="proficiency"
                            key={src} src={src}>
                            {src}
                        </span>;
                    })}
                </div>
            </div>
        );
    }
}

export default AuxiliaryProficiencies;