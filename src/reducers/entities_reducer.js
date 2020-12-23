import { combineReducers } from 'redux';
import { riskLevelsReducer } from './risk_levels_reducer';


export const entitiesReducer = combineReducers({
    riskLevels: riskLevelsReducer
});