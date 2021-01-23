import React from 'react';
import { LinkButton } from '../portfolio/buttons'
import { Link } from 'react-router-dom';
import './navbar.css';

export const Navbar = ({ page }) => {

    // const button = page !== 'splash' ? 
    //                 <LinkButton currIdx={1} link={''} text={'Home'} /> :
    //                 <LinkButton currIdx={1} link={'portfolio'} text={'Get Started'} />

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