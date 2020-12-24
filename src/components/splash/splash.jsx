import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import { Navbar } from '../navbar/navbar';
import './splash.css';

const VERTICAL_STYLES = [
  {
    'flexDirection': "column"
  },
  {
      'width': "100%"
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
        <div className='page-container'>
            <Navbar page={"splash"}/>
            <div className='content-container' style={displayStyle[0]}>
                <div className='intro-container' style={displayStyle[1]}>
                    <h2>Welcome to Easy Finance Advisor</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ultricies justo, non porttitor mauris cursus et. Vivamus a sodales nulla, vitae commodo eros. Vestibulum auctor, justo pharetra vehicula convallis, est augue tincidunt mauris, ac mattis magna lorem vel sapien. Curabitur rutrum orci metus, vitae finibus quam sollicitudin vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In at semper eros. Morbi aliquet lacus et est mattis feugiat. Aliquam faucibus quis neque eu ullamcorper. Sed in dolor nunc. Suspendisse varius magna nec ipsum pellentesque, tempus tempor dolor laoreet. Integer accumsan eu nunc eu commodo. Donec sed arcu eget ex euismod placerat non eu ligula. Fusce lobortis lorem nunc, vel viverra nisl ornare vel. Aenean ac tristique nibh, at sagittis magna. Phasellus efficitur at erat sit amet sodales. 
                    </p>
                </div>
                <div className='video-container' style={displayStyle[1]}>
                    <ReactPlayer 
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
                        controls
                    />
                </div>
            </div>
        </div>
    )
}

export default Splash;