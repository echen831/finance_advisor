import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Navbar } from '../navbar/navbar';
import './splash.css';

const VERTICAL_STYLES = [
  {
    'flexDirection': "column"
  },
  {
      'width': "100%",
  }

]

const Splash = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const resize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [windowWidth])

    const displayStyle = windowWidth <= 900 ? VERTICAL_STYLES : [];

    return (
        <div className='page-container splash'>
            <Navbar page={"splash"}/>
            <div className='content-container' style={displayStyle[0]}>
                <div className='intro-container' style={displayStyle[1]}>
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
                <div className='video-container' style={displayStyle[1]}>
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