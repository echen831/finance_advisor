import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = ({ page }) => {

    const link = page !== 'splash' ? 
                <Link to=''>Home</Link> :
                <Link to='/portfolio'>Get Started</Link>
    return(
        <nav className='nav'>
            <span>Easy Finance Advisor</span>
            <ul className='link-list'>
                <li className='link'>{link}</li>
            </ul>
        </nav>

    )
}