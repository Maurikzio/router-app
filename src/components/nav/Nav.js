import React from 'react';
import { Link } from 'react-router-dom';

import './nav-styles.css';

export default function Nav(){
    return (
        <ul className='nav-container'>
            <Link to='/router-app/'>
                <li className='nav-item'>Home</li>
            </Link>
            <Link to='/router-app/posts'>
                <li className='nav-item'>Posts</li>
            </Link>
            <Link to='/router-app/pictures'>
                <li className='nav-item'>Pictures</li>
            </Link>
            <Link to='/router-app/contacts'>
                <li className='nav-item'>Contacts</li>
            </Link>
        </ul>
    )
}