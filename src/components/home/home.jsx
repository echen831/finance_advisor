import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dispatchSRLIdx } from '../../actions/risk_level_idx_actions';
import { RowItem } from './row_item';
import { RiskLevelSelector } from './risk_level_selector';
import { ContinueButton, ToggleButton } from './buttons';
import { Chart } from './chart';

import './home.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


const Home = (props) => {

    const [currIdx, setCurrIdx] = useState(props.currentIdx);
    const [showChart, setShowChart] = useState(false)

    useEffect(() => {
        props.setCurrentIdx(currIdx)
    }, [currIdx])

    return (
        <div className='home-container'>
            <h1>This is the Home Page</h1>
            <div className='select-container'>
                <RiskLevelSelector setCurrIdx={setCurrIdx}/>
                <ContinueButton currIdx={currIdx}/>
                <ToggleButton showChart={showChart}
                              setShowChart={setShowChart}/>
            </div>
            <div>
                {
                    showChart ? <Chart data={props.riskLevels[currIdx]}/> :
                    <ul className='risk-container'>
                        {props.riskLevels.map((risk, idx) => {
                            return <RowItem idx={idx} risk={risk} currIdx={currIdx}/>
                        } )}
                    </ul>
                }
            </div>
            
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