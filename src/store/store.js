import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers/root_reducer';

const middlewares = [thunk];

export const configureStore = (preloadedState = {}) => 
    createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(...middlewares)));

