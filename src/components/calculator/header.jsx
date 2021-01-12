import React from 'react';
import { Button, LinkButton } from '../portfolio/buttons';

export const Header = (props) => {
    const { data, options, handleSetTargetAmount, inputSum, clear } = props;
    return (
        <div className='header' >
            <ul className='header-titles' >
                {options.map(option => {
                    return <li key={option}>{option}: {data[option] * 100}%</li>
                })}
            </ul>
            <div className='header-btn'>
                <Button text='Rebalance'
                    handleClick={handleSetTargetAmount}
                    currIdx={inputSum} />
                <Button text='Clear'
                    handleClick={clear}
                    currIdx={inputSum} />
                <LinkButton currIdx={11}
                    link={'portfolio'}
                    text={'Back'} />
            </div>
        </div>
    )
}