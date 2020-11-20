import React from 'react' // React must be in scope to use JSX;
import Launch from '@material-ui/icons/Launch';


export const randomotronItems =  [
    (<span>Some sound dishes I've been enjoying: <a className="link" target="_blank" title="Spotify playlist: Heidelberg Hymnary" rel="noopener noreferrer" href="https://open.spotify.com/playlist/2422RGEkrULJt2cVXEBg9t?si=fI3OdOYdT-qJ9YWDstW5jQ">
    Spotify ♫</a></span>),
    (<div>Cooking tip #14: if uncertain, add <i>more</i> butter.</div>),
    ((<span>
        I'm trying to get back into <a className="link" target="_blank" title="Suspiria Sabbath Study" href="/images/randomotron/suspiria_sabbath_study_bw.jpg">
            daily studies<Launch className="randomotron-icon"/></a> again!
    </span>)),
    (<span>
        Here's an <a className="link" target="_blank" title="Buttered Prawn with Parsley" href="/images/redbubble/foods_that_dont_exist.jpg">
            inaugural sketch<Launch className="randomotron-icon"/></a> for a series of <i>Foods that Don't Exist</i>.
    </span>),    
    (<span>
        This is my favourite <a className="link" target="_blank" title="Lómagnú with sand blowing over Skeiðarársandur" rel="noopener noreferrer"  href="https://upload.wikimedia.org/wikipedia/commons/a/a4/L%C3%B3magn%C3%BA_with_sand_blowing.jpg">
            big rock<Launch className="randomotron-icon"/></a>.
    </span>)
];