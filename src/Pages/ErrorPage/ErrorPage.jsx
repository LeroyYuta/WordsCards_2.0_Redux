import React from 'react';
import { robot404 } from '../index';

const ErrorPage = () => {
    return (
        <div className='error-page'>
            <h1>404</h1>
            <h1>Ooops! Something's wrong...</h1>
            <img className='robot' src={robot404} alt='404' />
        </div>
    )
}

export default ErrorPage;