import React, {useState, useEffect} from 'react';
import './Randomotron.css';

import { randomotronItems } from '../data/randomotron-items.js'

const items = randomotronItems;

const showInterval = 4800;
const hideInterval = 2400;

function Randomotron() {

    const [item, setItem] = useState(0);
    const [display, setDisplay] = useState('');

    const [fadeIn, setFadeIn] = useState(false);

    function nextItem() {
        if (item === (items.length - 1))
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