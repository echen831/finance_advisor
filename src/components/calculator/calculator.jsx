import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { rebalance, round, findDiff } from '../../util/rebalance'; 
import { Navbar } from '../navbar/navbar';
import { Button, LinkButton } from '../portfolio/buttons';
import './calculator.css'

const INITIAL_VALUES = { 'Bonds': 0, 
                         'Large Cap': 0, 
                         'Mid Cap': 0, 
                         'Foreign': 0, 
                         'Small Cap': 0 
                        };

const VERTICAL_STYLES = [
    {
        'flexDirection': 'column'
    },
    {
        'width': '100%',
        'marginBottom': '1%'
    }
]



const Calculator = (props) => {
    const [inputSum, setInputSum] = useState(0);
    const [inputs, setInputs] = useState(INITIAL_VALUES);
    const [targetValues, setTargetValues] = useState(INITIAL_VALUES);
    const [difference, setDifference ] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [showAmt, setShowAmt] = useState(false)
    const options = Object.keys(props.data)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const resize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize)
        }
    }, [windowWidth])

    useEffect(() => {
        setInputSum(Object.values(inputs).reduce((a,c) => a + c, 0))
    }, [inputs])
    
    useEffect(() => {
        setDifference(findDiff(Object.values(targetValues), Object.values(inputs)))
    },[targetValues])

    useEffect(() => {
        setSuggestions(rebalance(difference, options))
    }, [difference])

    const handleInputChange = (e, option) => {
        setShowAmt(false);
        setSuggestions([]);
        setInputs({...inputs, [option]: Number(e.target.value)})
    }

    const handleSetTargetAmount = () => {
        setShowAmt(true)
        setTargetValues(
            {
                'Bonds': calcTargetAmount('Bonds', props.data),
                'Large Cap': calcTargetAmount('Large Cap', props.data),
                'Mid Cap': calcTargetAmount('Mid Cap', props.data),
                'Foreign': calcTargetAmount('Foreign', props.data),
                'Small Cap': calcTargetAmount('Small Cap', props.data)
            }
        )
    }

    const calcTargetAmount = (field, targetPercentage) => {
        return round(inputSum * targetPercentage[field])
    }

    const displayStyle = windowWidth <= 900 ? VERTICAL_STYLES : [];
    
    return (
        <div className='page-container'>
            <Navbar/>
            <h3>Risk Level: {props.riskLevelIdx}</h3>
            <div className='header' style={displayStyle[0]}>
                <ul className='header-titles' style={displayStyle[1]}>
                    {options.map(option => {
                        return <li>{option}: {props.data[option] * 100}%</li>
                    })}
                </ul>
                <div className='header-btn' style={displayStyle[1]}>
                    <Button text='Rebalance' 
                            handleClick={handleSetTargetAmount}
                            currIdx={inputSum}/>
                    <LinkButton currIdx={11} 
                                link={'portfolio'}
                                text={'Back'}/>
                </div>        
            </div>

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
                                            `+${difference[idx]}`: 
                                            difference[idx];
                        const displayDiffColor = difference[idx] !== 0 ? 
                                                difference[idx] < 0 ? 
                                                'red' : 'green' : ''; 
                        return(
                            <div key={idx} className='input'>
                                <li>{option}:</li>
                                <li>
                                    <input type="number" 
                                        onChange={(e) => handleInputChange(e, option)}/>
                                </li>
                                <li id={displayDiffColor}>{showAmt ? displayDiff : null}</li>
                                <li>{showAmt ? targetValues[option] : null}</li>
                            </div>
                        )
                    })}
                </div>
                <div className='suggestion-container' style={displayStyle[1]}>
                    <li>Suggested Transactions</li>
                        {suggestions.map((str,idx) => {
                            return <li key={idx}>{str}</li>
                        })}
                </div>
            
            </div>
        </div>
    )
}

/**
 * Container for Calculator component
 */

const mSTP = (state) => {
    const currentIdx = state.entities.current.currentIdx
    return {
        data: state.entities.riskLevels[currentIdx],
        riskLevelIdx: currentIdx
    }
} 

const mDTP = (dispatch) => {
    return {}
}

export default connect(mSTP, mDTP)(Calculator)
