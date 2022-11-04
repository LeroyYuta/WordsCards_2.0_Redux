import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

const HomePage = () => {
    return (
        <div className='home-page'>
            <h1 className='home-title'>WELCOME TO THE "WORDS CARDS"!</h1>
            <Link to='/cards'><Button className='check' label="LET'S GO!" /></Link>
        </div>
    )
}

export default HomePage;
