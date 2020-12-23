export const SET_RISK_LEVEL_IDX = 'SET_RISK_LEVEL_IDX';

const setRiskLevelIdx = (idx) => {
    return {
        type: SET_RISK_LEVEL_IDX,
        idx
    }
}

export const dispatchSRLIdx = (idx) => dispatch => {
    dispatch(setRiskLevelIdx(idx))
}