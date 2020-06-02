import React from 'react';
import ReactDOM from 'react-dom';

import HeaderBio from './HeaderBio';
import HeaderAuxiliary from './HeaderAuxiliary';


import Menu from '@material-ui/icons/Menu';



// Header Menu
const headerMenu = (
    <div className="header-menu">
            <Menu className="header-menu-icon"/>
            <a className="header-menu-item" href="#work">Work</a>
            <a className="header-menu-item" href="#about">About</a>
            <a className="header-menu-item" href="#contact">Contact</a> 
    </div>
);

class Header extends React.Component {

    render() {

        return (
            
            <header className="folio-header">                
                <div className="header-container">
                    <HeaderBio/>
                    <div className="header-divider"/>
                    <HeaderAuxiliary />
                </div>
                {/*{headerMenu}*/}
            </header>
        );
    }
}

export default Header;