import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dispatchSRLIdx } from '../../actions/risk_level_idx_actions';

import './home.css';


const Home = (props) => {

    const [currIdx, setCurrIdx] = useState(props.currentIdx);

    const handleUpdate = (idx) => {
        props.setCurrentIdx(idx)
        setCurrIdx(idx);
    }

    return (
        <div className='home-container'>
            <h1>This is the Home Page</h1>
            <h2>{currIdx}</h2>
            <ul className='risk-container'>
                {props.riskLevels.map((risk, idx) => {
                    const highlighted = currIdx === idx ? "risk selected" : 'risk'
                    return (
                        idx === 0 ?
                        <div className='risk'>
                                <li>Risk Level</li>
                                {Object.keys(risk).map(key => (
                                    <li key={key}>{key}</li>
                                ))}
                        </div>
                        : <div key={idx} className={highlighted} onClick={() => handleUpdate(idx)}>
                            <li>{idx}</li>
                                {Object.keys(risk).map(key => (
                                    <li key={key}>{risk[key] * 100}%</li>
                                ))}
                        </div>
                    )
                } )}
            </ul>
            <p><Link to='/calculator' style={currIdx === 0 ? { pointerEvents: "none" } : null}>Continue</Link></p>
            
        </div>
    )
}

const mSTP = ( state ) => {
    return {
        riskLevels: state.entities.riskLevels,
        currentIdx: state.entities.current.currentIdx
    }
};

const mDTP = ( dispatch ) => {
    return {
        setCurrentIdx: (idx) => dispatch(dispatchSRLIdx(idx))
    }
} 

export default connect(mSTP, mDTP)(Home)