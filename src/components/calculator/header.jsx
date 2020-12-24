import React from 'react';
import { Button, LinkButton } from '../portfolio/buttons';

export const Header = (props) => {
    const { displayStyle, data, options, handleSetTargetAmount, inputSum } = props;
    return (
        <div className='header' style={displayStyle[0]}>
            <ul className='header-titles' style={displayStyle[1]}>
                {options.map(option => {
                    return <li>{option}: {data[option] * 100}%</li>
                })}
            </ul>
            <div className='header-btn' style={displayStyle[1]}>
                <Button text='Rebalance'
                    handleClick={handleSetTargetAmount}
                    currIdx={inputSum} />
                <LinkButton currIdx={11}
                    link={'portfolio'}
                    text={'Back'} />
            </div>
        </div>
    )
}