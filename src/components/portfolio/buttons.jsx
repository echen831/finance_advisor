import React from 'react';
import { Link } from 'react-router-dom';

export const LinkButton = ({ currIdx, link, text, classname }) => {
    const style = currIdx === 0 ? { pointerEvents: "none" } : null
    return (
          <button className={`btn ${classname}`} style={style}>
            <Link 
                className='btn-link'  
                to={`/${link}`}>
                {text}
            </Link>
          </button>
    )

            
}



export const Button = ({ text, handleClick, currIdx, classname }) => {
    // const style = currIdx === 0 ? { pointerEvents: "none" } : null
    return (
        <button className={`btn ${classname}`}
                onClick={handleClick}
                // style={style}
        >{text}</button>
    )
}
