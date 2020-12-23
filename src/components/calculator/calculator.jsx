import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { rebalance } from '../../util/rebalance'; 

const Calculator = (props) => {

    const test = rebalance([2,1,0,-1,-2], Object.keys(props.data))

    return (
        <div>
            <h1>Risk Level: {props.riskLevelIdx}</h1>
            <div>
                {Object.keys(props.data).map((item, idx) => {
                    return <li key={idx}>{item}: {props.data[item] * 100}%</li>
                })}
            </div>
            <div>
                {test.map(str => {
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

