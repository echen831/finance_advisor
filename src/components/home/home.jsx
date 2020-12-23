import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dispatchSRLIdx } from '../../actions/risk_level_idx_actions';
import { RowItem } from './row_item';
import { RiskLevelSelector } from './risk_level_selector';

import './home.css';


const Home = (props) => {

    const [currIdx, setCurrIdx] = useState(props.currentIdx);

    useEffect(() => {
        props.setCurrentIdx(currIdx)
    }, [currIdx])

    // const handleUpdate = (idx) => {
    //     props.setCurrentIdx(idx)
    //     setCurrIdx(idx);
    // }

    return (
        <div className='home-container'>
            <h1>This is the Home Page</h1>
            <RiskLevelSelector setCurrIdx={setCurrIdx}/>
            {/* <select name="" id="" onChange={(e)=> setCurrIdx(Number(e.target.value))}>
                {[1,2,3,4,5,6,7,8,9,10].map(level => (
                    <option value={level} key={level}>{level}</option>
                ))}
            </select> */}
            <ul className='risk-container'>
                {props.riskLevels.map((risk, idx) => {
                    return <RowItem idx={idx} risk={risk} currIdx={currIdx} />
                } )}
            </ul>
            <p><Link to='/calculator' style={currIdx === 0 ? { pointerEvents: "none" } : null}>Continue</Link></p>
            
        </div>
    )
}

/**
 * Container for Home component
 */

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