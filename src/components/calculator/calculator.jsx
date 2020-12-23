import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { rebalance, round, findDiff } from '../../util/rebalance'; 

const INITIAL_VALUES = { 'Bonds': 0, 'Large Cap': 0, 'Mid Cap': 0, 'Foreign': 0, 'Small Cap': 0 };

const Calculator = (props) => {
    const [inputSum, setInputSum] = useState(0);
    const [inputs, setInputs] = useState(INITIAL_VALUES);
    const [targetValues, setTargetValues] = useState(INITIAL_VALUES);
    const [difference, setDifference ] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const options = Object.keys(props.data)

    const test = rebalance([2,1,0,-1,-2], options)

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
        setInputs({...inputs, [option]: Number(e.target.value)})
    }

    const handleSetTargetAmount = () => {
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

    return (
        <div>
            <h1>Risk Level: {props.riskLevelIdx}</h1>
            <h2>Sum: {inputSum}</h2>
            <div className='risk'>
                {options.map((item, idx) => {
                    return <li key={idx}>{item}: {props.data[item] * 100}%</li>
                })}
            </div>

            <div>
                <h3>Your Inputs</h3>
                {options.map(option => {
                    return <input key={option} type="number" onChange={(e)=>handleInputChange(e, option)}/>
                })}
            </div>
            <div>
                <h3>Difference</h3>
                {options.map((option, idx) => {
                    return <input key={option} value={difference[idx]} type="number" />
                })}
            </div>
            <div>
                <h3>Target Inputs</h3>
                {options.map(option => {
                    return <input key={option} value={targetValues[option]} type="number"/>
                })}
            </div>

            <button onClick={handleSetTargetAmount}>Rebalance</button>

            <div>
                {suggestions.map(str => {
                    return <li>{str}</li>
                })}
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

