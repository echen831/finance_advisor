import React from 'react';
import { connect } from 'react-redux';

const Calculator = (props) => {

    return (
        <div>
            <h1>Risk Level: {props.riskLevelIdx}</h1>
            <div>
                {Object.keys(props.data).map((item, idx) => {
                    return <li key={idx}>{item}: {props.data[item]}</li>
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

