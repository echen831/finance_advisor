import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import { Root } from './components/root';
import RiskLevels from './risk_levels.json';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = {
    entities: {
      riskLevels: RiskLevels
    }
  }
  const store = configureStore(preloadedState);

  //Window Testing

  window.dispatch = store.dispatch
  window.getState = store.getState

  ReactDOM.render(<Root store={store}/>, root)
})
