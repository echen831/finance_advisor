import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ currIdx, link }) => {
    const style = currIdx === 0 ? { pointerEvents: "none", color: 'grey'} : null
    return <Link to={`/${link}`}
                 className='button-container' 
                 style={style}>
                 {link.toUpperCase()}
            </Link>
}

export const Button = ({text, handleClick, currIdx }) => {
    const style = currIdx === 0 ? { pointerEvents: "none", color: 'grey' } : null
    return (
        <li className='button-container'
            onClick={() => handleClick()}
            style={style}
        >{text}</li>
    )
}
