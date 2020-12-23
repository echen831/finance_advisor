import { SET_RISK_LEVEL_IDX } from '../actions/risk_level_idx_actions';


export const riskLevelIdxReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case SET_RISK_LEVEL_IDX:
            let newState = Object.assign({}, oldState, {currentIdx: action.idx})
            return newState;
        default:
            return oldState;
    }
}