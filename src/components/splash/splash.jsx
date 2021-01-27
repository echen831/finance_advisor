import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Navbar } from '../navbar/navbar';
import './splash.css';


const Splash = () => {

    return (
        <div className='page-container splash'>
            <Navbar page={"splash"}/>
            <div className='content-container' >
                <div className='intro-container' >
                    <h2>Welcome to Easy Finance Advisor</h2>
                    <p>
                        Easy Finance Advisor helps you determine how much money 
                        you need to invest in options based on different risk 
                        levels.   Choose a risk level and enter amounts of money 
                        you wish to invest in each option.  Easy Finance Advisor 
                        will suggest appropriate adjustments for you based on 
                        the risk level you chose.  
                    </p>
                    <p> Click Get Started to get started today! </p>
                </div>
                <div className='video-container' >
                    <ReactPlayer 
                        url='https://vimeo.com/494534666' 
                        controls
                    />
                </div>
            </div>
        </div>
    )
}

export default Splash;