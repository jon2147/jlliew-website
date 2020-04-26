import React from 'react';
import ReactDOM from 'react-dom';
import DidacticHeader from './DidacticHeader';

class DidacticPanel extends React.Component {
    render() {
        return (
            <div className="didactic-panel">
                <div className="didactic-panel-story">
                    <h2 className="didactic-panel-heading">
                        Didactic Heading
                    </h2>
                    <p className="didactic-panel-description">
                        Once more she found herself in the long hall, and close to the little glass table. “Now, I’ll manage better this time,” she said to herself, and began by taking the little golden key, and unlocking the door that led into the garden. Then she went to work nibbling at the mushroom (she had kept a piece of it in her pocket) till she was about a foot high: then she walked down the little passage: and then—she found herself at last in the beautiful garden, among the bright flower-beds and the cool fountains.
                        <br/>
                        <br/>
                        Si burion eth har selheld a anburion ro sorriend. A hwen ther o tiriel vernwen. Del on Cormorathenned, si Halmosiliath, si Osirion Brumaidha. Her o sibileth araubries mal mathras nwen bethal vuiel.
                    </p>
                </div>                
            </div>
        );
    }
}

export default DidacticPanel;