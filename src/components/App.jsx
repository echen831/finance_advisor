import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Calculator from './calculator/calculator';
import './App.css';
export const App = () => {
  return (
    <div className='App'>
      <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/calculator' component={Calculator}/>
      </Switch>
    </div>
  )
}

