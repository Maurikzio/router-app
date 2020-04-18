import React from 'react';
import { Link } from 'react-router-dom';

import './nav-styles.css';

export default function Nav(){
    return (
        <ul className='nav-container'>
            <Link to='/'>
                <li className='nav-item'>Home</li>
            </Link>
            <Link to='/posts'>
                <li className='nav-item'>Posts</li>
            </Link>
            <Link to='/pictures'>
                <li className='nav-item'>Pictures</li>
            </Link>
            <Link to='/contacts'>
                <li className='nav-item'>Contacts</li>
            </Link>
        </ul>
    )
}