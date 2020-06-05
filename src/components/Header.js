import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

import HeaderBio from './HeaderBio';
import HeaderAuxiliary from './HeaderAuxiliary';



import Menu from '@material-ui/icons/Menu';


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