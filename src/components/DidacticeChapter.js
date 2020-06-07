import React from 'react';


class DidacticChapter extends React.Component {

    render () {
        
        const chapterImage = this.state.chapterImage ? this.state.chapterImage : "/images/placeholder.jpg";
        const chapterHeading = this.state.chapterHeading ? this.state.chapterHeading : 'Chapter Heading';
        const chapterSubHeading = this.state.chapterSubHeading ? this.state.chapterSubHeading : 'Chapter Subheading';
        const chapterDescription = this.state.chapterDescription ? this.state.chapterDescription : 
        '“Now, I’ll manage better this time,” she said to herself, and began by taking the little golden key, and unlocking the door that led into the garden. Then she went to work nibbling at the mushroom (she had kept a piece of it in her pocket) till she was about a foot high: then she walked down the little passage: and then—she found herself at last in the beautiful garden, among the bright flower-beds and the cool fountains.';
    }

    // TODO: Jon, continuining on from this concept - there should be a 'Didactic Story' object which has contains these 'stories'.
    // The Story keeps track of the active chapter and returns what needs to be displayed.
    // The Slider is simply a selector which sets the active Story, and if specified, active Chapter.
}

export default DidacticChapter;