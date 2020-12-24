import React from 'react';
import { LinkButton } from '../portfolio/buttons'
import './navbar.css';

export const Navbar = ({ page }) => {

    const button = page !== 'splash' ? 
                    <LinkButton currIdx={1} link={''} text={'Home'} /> :
                    <LinkButton currIdx={1} link={'portfolio'} text={'Get Started'} />
    return(
        <div className='navbar-header'>
            <h1>Easy Finance Advisor</h1>
            {button}

        </div>
    )
}