import React, {useState, useEffect} from 'react';

const items = [
    (<span>Today is gonna be cold baloney.</span>),
    (<span>
        This is <i>my</i> favourite <a className="" target="_blank" href="https://commons.wikimedia.org/wiki/File:L%C3%B3magn%C3%BA_with_sand_blowing.jpg">
            big rock
            </a>.
    </span>),
    (<div>hello <span className="auxiliary-heading">buddy</span></div>)
];

const fadeInRate = 0.005;
const fadeOutRate = 0.0025;

function Randomotron() {

    const [item, setItem] = useState(0);
    const [display, setDisplay] = useState(items[item]);
    const [isChanging, setIsChanging] = useState(true);
    const [isFading, setIsFading] = useState(true);
    const [fadingIn, setFadingIn] = useState(true);
    const [fadeOpacity, setFadeOpacity] = useState(0.0); 


    useEffect (() => {        
        if (isFading)
        {
            if (fadingIn)
            {
                
                if (fadeOpacity >= 1){
                    setFadingIn(false);
                    setIsFading(false);
                }
                else {
                    setFadeOpacity(fadeOpacity + fadeInRate);
                }
            } else {                
                if (fadeOpacity <= 0){
                    setFadingIn(false);
                    setIsFading(false);
                    setIsChanging(true);
                } 
                else {
                    setFadeOpacity(fadeOpacity - fadeOutRate);
                }
                
            }
        } else {
            if (isChanging)
            {
                
                if (item == (items.length - 1))
                {
                    setItem(0); 
                } else {
                    setItem(item + 1);
                }
                setDisplay(items[item]);
                setIsChanging(false);
                setFadingIn(true);
                setIsFading(true);
            } else {
                setTimeout(() =>
                {
                    setIsFading(true);
                    setFadingIn(false);
                }
                , 4000);
            }
        }        

    });


    
    return (
        <p style={{opacity: fadeOpacity}}>{display}</p>

/*
        <p style={{
            fadeOpacity,
            transition: 'opacity 200ms ease-in-out'
        }}>{display}</p>*/

    );
    
}

export default Randomotron;