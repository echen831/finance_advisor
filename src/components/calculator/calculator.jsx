import React from 'react';
import { connect } from 'react-redux';
import { rebalance } from '../../util/rebalance'; 

const Calculator = (props) => {

    const test = rebalance([1,2,3,4,5], [5,4,3,2,1])

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

const mSTP = (state) => {
    const currentIdx = state.entities.current.currentIdx
    return {
        data: state.entities.riskLevels[currentIdx],
        riskLevelIdx: currentIdx + 1
    }
} 

const mDTP = (dispatch) => {
    return {}
}

export default connect(mSTP, mDTP)(Calculator)

