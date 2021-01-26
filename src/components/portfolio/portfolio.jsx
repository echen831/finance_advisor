import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { dispatchSRLIdx } from '../../actions/risk_level_idx_actions';
import { RowItem } from './row_item';
import { RiskLevelSelector } from './risk_level_selector';
import { LinkButton, Button } from './buttons';
import { Navbar } from '../navbar/navbar';
import { Chart } from './chart';

import './portfolio.css';



const Portfolio = ({currentIdx, setCurrentIdx, riskLevels}) => {

    const [currIdx, setCurrIdx] = useState(currentIdx);
    const [showChart, setShowChart] = useState(false)
    const buttonText = showChart ? "Table" : "Chart"

    useEffect(() => {
        setCurrentIdx(currIdx)
    }, [currIdx, setCurrentIdx])

    const handleToggle = () => {
        setShowChart(!showChart)
    }

    return (
        <div className='page-container'>
            <Navbar/>
            <h4>Select a Risk Level to get started</h4>
            <div className='select-container'>
                <RiskLevelSelector setCurrIdx={setCurrIdx} 
                                   currIdx={currIdx}/>
                <Button text={buttonText}
                              handleClick={handleToggle}
                              currIdx={currIdx}
                              classname={'btn-chart'}/>
                <LinkButton currIdx={currIdx} 
                            link={'calculator'} 
                            text={'Calculator'}
                            classname={'btn-calculator'}/>

            </div>
            <div className='chart-container'>
                {
                    showChart ? <Chart data={riskLevels[currIdx]}/> :
                    <ul className='risk-container'>
                        {riskLevels.map((risk, idx) => {
                            return <RowItem idx={idx}
                                            key={idx} 
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
 * Container for Portfolio component
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

export default connect(mSTP, mDTP)(Portfolio)