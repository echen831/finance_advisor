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
            <ul>
                {props.riskLevels.map((risk, idx) => {
                    const highlighted = currIdx === idx ? "risk selected" : 'risk'
                    return (
    
                        <div key={idx} className={highlighted} onClick={() => handleUpdate(idx)}>
                            <li>Bonds: {risk['Bonds']}</li>
                            <li>Large Cap: {risk['Large Cap']}</li>
                            <li>Mid Cap: {risk['Mid Cap']}</li>
                            <li>Foreign: {risk['Foreign']}</li>
                            <li>Small Cap: {risk['Small Cap']}</li>
                        </div>
                    )
                } )}
            </ul>
            <Link to='/calculator' style={currIdx === 10 ? { pointerEvents: "none" } : null}>Continue</Link>
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