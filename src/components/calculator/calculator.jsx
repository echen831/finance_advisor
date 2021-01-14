import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { rebalance, round, findDiff } from '../../util/rebalance'; 
import { Navbar } from '../navbar/navbar';
import { Header } from './header';
import { Table } from './table';
import './calculator.css'

const INITIAL_VALUES = { 'Bonds': 0, 
                         'Large Cap': 0, 
                         'Mid Cap': 0, 
                         'Foreign': 0, 
                         'Small Cap': 0 
                        };

const VERTICAL_STYLES = [
    { 'flexDirection': 'column' },
    { 'width': '100%',
      'marginBottom': '1%'
    }
]



const Calculator = (props) => {
    const history = useHistory();
    const [inputSum, setInputSum] = useState(0);
    const [inputs, setInputs] = useState(INITIAL_VALUES);
    const [targetValues, setTargetValues] = useState(INITIAL_VALUES);
    const [difference, setDifference ] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [showAmt, setShowAmt] = useState(false)
    const options = Object.keys(props.data)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // const resize = () => {
    //     setWindowWidth(window.innerWidth)
    // }
    // useEffect(() => {
    //     window.addEventListener('resize', resize);

    //     return () => {
    //         window.removeEventListener('resize', resize)
    //     }
    // }, [windowWidth])
    useEffect(() => {
        if (props.riskLevelIdx < 1 || props.riskLevelIdx > 10) {
            history.push('/portfolio')
        }
    })

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

    const handleClear = () => {
        let userInputs = document.querySelectorAll('[id=userInput]');
        userInputs.forEach(input => { input.value = null })
        setInputSum(0);
        setShowAmt(false);
        setDifference([]);
    }

    const calcTargetAmount = (field, targetPercentage) => {
        return round(inputSum * targetPercentage[field])
    }

    const displayStyle = windowWidth <= 900 ? VERTICAL_STYLES : [];
    
    return (
        <div className='page-container'>
            <Navbar/>
            <h3>Risk Level: {props.riskLevelIdx}</h3>
            <Header displayStyle={displayStyle}
                    data={props.data}
                    options={options}
                    inputSum={inputSum}
                    clear={handleClear}
                    handleSetTargetAmount={handleSetTargetAmount}/>
            <Table displayStyle={displayStyle}
                    options={options}
                    difference={difference}
                    showAmt={showAmt}
                    targetValues={targetValues}
                    suggestions={suggestions}
                    handleInputChange={handleInputChange}/>
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

