import React from 'react';
import { Navbar } from '../navbar/navbar';
import './splash.css';

const Splash = () => {

    return (
        <div className='page-container'>
            <Navbar page={"splash"}/>
            <div className='content-container'>
                <div className='intro-container'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet ultricies justo, non porttitor mauris cursus et. Vivamus a sodales nulla, vitae commodo eros. Vestibulum auctor, justo pharetra vehicula convallis, est augue tincidunt mauris, ac mattis magna lorem vel sapien. Curabitur rutrum orci metus, vitae finibus quam sollicitudin vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In at semper eros. Morbi aliquet lacus et est mattis feugiat. Aliquam faucibus quis neque eu ullamcorper. Sed in dolor nunc. Suspendisse varius magna nec ipsum pellentesque, tempus tempor dolor laoreet. Integer accumsan eu nunc eu commodo. Donec sed arcu eget ex euismod placerat non eu ligula. Fusce lobortis lorem nunc, vel viverra nisl ornare vel. Aenean ac tristique nibh, at sagittis magna. Phasellus efficitur at erat sit amet sodales. 
                    </p>
                </div>
                <div className='video-container'>

                </div>
            </div>
        </div>
    )
}

export default Splash;