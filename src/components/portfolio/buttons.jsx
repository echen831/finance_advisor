import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ currIdx, link, text }) => {
    const style = currIdx === 0 ? { pointerEvents: "none", color: 'grey'} : null
    return (
          <Link className='button-container' 
                to={`/${link}`} style={style}>
                {text}
            </Link>
    )

            
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
