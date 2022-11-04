import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../../index';

const Header = () => {
    const [active, setActive] = useState('main');

    const handleClick = (e) => {
        const target = e.target;
        const activeClassName = target.classList.value;
        setActive(activeClassName);
    }

    return (
        <div className='header'>
            <div className='header-container'>
                <Link to='/'><img className='logo' src={logo} alt='logo' /></Link>
                <nav className='nav'>
                    <Link to='/' className={active === 'main' ? 'main active' : 'main'} onClick={(e) => handleClick(e)}>MAIN</Link>
                    <Link to='/table' className={active === 'table' ? 'table active' : 'table'} onClick={(e) => handleClick(e)}>TABLE</Link>
                    <Link to='/cards' className={active === 'cards' ? 'cards active' : 'cards'} onClick={(e) => handleClick(e)}>CARDS</Link>
                    <Link to='/game' className={active === 'game' ? 'game active' : 'game'} onClick={(e) => handleClick(e)}>GAME</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;
