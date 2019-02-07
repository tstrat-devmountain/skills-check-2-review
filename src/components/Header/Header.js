import React from 'react';
import './header.css';
import logo from '../../media/shelfie_icon.png';
const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='shelfie' />
            <h1>Shelfie</h1>
        </header>
    );
};

export default Header;