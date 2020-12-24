import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { dispatchSRLIdx } from '../../actions/risk_level_idx_actions';
import { RowItem } from './row_item';
import { RiskLevelSelector } from './risk_level_selector';
import { ContinueButton, Button } from './buttons';
import { Navbar } from '../navbar/navbar';
import { Chart } from './chart';

import './home.css';



const Home = (props) => {

    const [currIdx, setCurrIdx] = useState(props.currentIdx);
    const [showChart, setShowChart] = useState(false)
    const buttonText = showChart ? "Table" : "Chart"

    useEffect(() => {
        props.setCurrentIdx(currIdx)
    }, [currIdx])

    const handleToggle = () => {
        setShowChart(!showChart)
    }

    return (
        <div className='home-container'>
            <Navbar/>
            <div className='select-container'>
                
                <RiskLevelSelector setCurrIdx={setCurrIdx}/>
                <Button text={buttonText}
                              handleClick={handleToggle}
                              currIdx={currIdx}/>
                <ContinueButton currIdx={currIdx}/>
            </div>
            <div className='chart-container'>
                {
                    showChart ? <Chart data={props.riskLevels[currIdx]}/> :
                    <ul className='risk-container'>
                        {props.riskLevels.map((risk, idx) => {
                            return <RowItem idx={idx} 
                                            risk={risk} 
                                            currIdx={currIdx}/>
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