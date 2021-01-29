import React from 'react';

export const Table = (props) => {
    const { options, difference, showAmt, targetValues, suggestions, handleInputChange } = props;

    return (
        <div className='table-container' >
            <div className='input-container' >
                <div className='input'>
                    <li>Options</li>
                    <li className='current-amt'>Current Amount</li>
                    <li>Difference</li>
                    <li>New Amount</li>
                </div>
                {options.map((option, idx) => {
                    const displayDiff = (difference[idx] > 0) ?
                        `+${difference[idx]}` :
                        difference[idx];
                    const displayDiffColor = difference[idx] !== 0 ?
                        difference[idx] < 0 ?
                            'red' : 'green' : '';
                    return (
                        <div key={idx} className='input'>
                            <li>{option}:</li>
                            <li>
                                <div className='input-wrapper'>
                                    <span>$</span>
                                    <input type="number" id='userInput' className='current-amt'
                                        onChange={(e) => handleInputChange(e, option)} />
                                </div>
                            </li>
                            <li id={displayDiffColor}>{showAmt ? displayDiff : null}</li>
                            <li>{showAmt ? `$${targetValues[option]}` : null}</li>
                        </div>
                    )
                })}
            </div>
            <div className='suggestion-container'>
                <h4>Suggested Transactions</h4>
                {suggestions.map((str, idx) => {
                    return <li key={idx}>{str}</li>
                })}
            </div>

        </div>  
    )
}