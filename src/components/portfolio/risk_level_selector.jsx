import React from 'react';

export const RiskLevelSelector = ( {setCurrIdx, currIdx} ) => {

    const defaultVal = currIdx === 0 ? "Select Risk Level" : currIdx;
    return (
        <div className='selector'>
            <select defaultValue={defaultVal} 
                    onChange={(e) => setCurrIdx(Number(e.target.value))}>
                <option 
                        disabled hidden >
                        Select Risk Level
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => (
                    <option value={level} key={level}>{level}</option>
                ))}
            </select>
        </div>
    )
}