import React from 'react';

export const RiskLevelSelector = ( {setCurrIdx} ) => {

    return (
        <div>
            <select onChange={(e) => setCurrIdx(Number(e.target.value))}>
                <option value="none" 
                        selected disabled hidden >
                        Select Risk Level
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(level => (
                    <option value={level} key={level}>{level}</option>
                ))}
            </select>
        </div>
    )
}