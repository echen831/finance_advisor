import React from 'react';
import { Link } from 'react-router-dom';

export const ContinueButton = ({ currIdx }) => {
    const style = currIdx === 0 ? { pointerEvents: "none", color: 'grey'} : null
    return <Link to='/calculator'
                 className='button-container' 
                 style={style}>
                 Continue
            </Link>
}