import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './portfolio/portfolio';
import Calculator from './calculator/calculator';
import Splash from './splash/splash';

import './App.css';
export const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Splash} />
          <Route exact path='/portfolio' component={Portfolio}/>
          <Route exact path='/calculator' component={Calculator}/>
      </Switch>
    </div>
  )
}

