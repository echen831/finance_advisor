import React from 'react';

export const Table = (props) => {
    const { displayStyle, options, difference, showAmt, targetValues, suggestions, handleInputChange } = props;

    return (
        <div className='table-container' style={displayStyle[0]}>
            <div className='input-container' style={displayStyle[1]}>
                <div className='input'>
                    <li>Options</li>
                    <li>Current Amount</li>
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
                                <input type="number" id='userInput' 
                                    onChange={(e) => handleInputChange(e, option)} />
                            </li>
                            <li id={displayDiffColor}>{showAmt ? displayDiff : null}</li>
                            <li>{showAmt ? targetValues[option] : null}</li>
                        </div>
                    )
                })}
            </div>
            <div className='suggestion-container' style={displayStyle[1]}>
                <li>Suggested Transactions</li>
                {suggestions.map((str, idx) => {
                    return <li key={idx}>{str}</li>
                })}
            </div>

        </div>  
    )
}