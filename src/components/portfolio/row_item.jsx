import React from 'react';
import { Link } from 'react-router-dom';

export const RowItem = ({ risk, idx, currIdx }) => {
    const highlighted = currIdx === idx ? "risk selected" : 'risk'
    const clickable = currIdx === idx ? null : { pointerEvents: "none" }
    const riskKeys = Object.keys(risk);

    const rowHeader = <div className='risk-header'>
                        <li>Risk Level</li>
                        {riskKeys.map((key,idx) => (
                            <li key={idx}>{key}</li>
                        ))}
                    </div>

    const row = <Link to='/calculator' style={clickable}>
                    <div key={idx} className={highlighted}>                 
                            <li>{idx}</li>
                            {riskKeys.map((key, idx) => (
                                <li key={idx}>{risk[key] * 100}%</li>
                            ))}
                    </div>
                </Link>               

    return idx === 0 ? rowHeader : row   
}
