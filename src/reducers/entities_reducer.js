import { combineReducers } from 'redux';
import { riskLevelsReducer } from './risk_levels_reducer';
import { riskLevelIdxReducer } from './risk_level_idx_reducer';


export const entitiesReducer = combineReducers({
    riskLevels: riskLevelsReducer,
    current: riskLevelIdxReducer
});