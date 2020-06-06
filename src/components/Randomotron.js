import React, {useState, useEffect} from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import './Randomotron.css';

const items = [
    (<span>Some sound dishes I've been enjoying: <a className="link" target="_blank" href="https://open.spotify.com/playlist/2422RGEkrULJt2cVXEBg9t?si=fI3OdOYdT-qJ9YWDstW5jQ">
    Spotify ♫
        </a>
    </span>),
    (<div>Cooking tip #41: if uncertain, add <i>more</i> butter.</div>),
/*(<span>
        This is <i>my</i> favourite <a className="App-link" target="_blank" href="https://commons.wikimedia.org/wiki/File:L%C3%B3magn%C3%BA_with_sand_blowing.jpg">
            big rock
            <OpenInNewIcon className="randomotron-icon"/></a>.
    </span>)*/
];

const showInterval = 4800;
const hideInterval = 2400;

function Randomotron() {

    const [item, setItem] = useState(0);
    const [display, setDisplay] = useState('');

    const [fadeIn, setFadeIn] = useState(false);

    function nextItem() {
        if (item == (items.length - 1))
        {
            setItem(0); 
        } else {
            setItem(item + 1);
        }
        setDisplay(items[item]);
    }

   useEffect (() => {
        if (fadeIn)
        {
            setTimeout(() => {
                setFadeIn(false);
            }, showInterval);
        } else {
            setTimeout(() => {
                setFadeIn(true);
                nextItem();
            }, hideInterval);
        }
   });
    
    return (
        <div className={fadeIn ? 'randomotron opaque' : 'randomotron'}>{display}</div>

    );
    
}

export default Randomotron;