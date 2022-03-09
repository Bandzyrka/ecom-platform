import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const PlaceHoldPage = () =>(
  <div>
    <h1>
      PlaceHoldPage
    </h1>
  </div>
)

function App() {
  return (
    <div> 
    <BrowserRouter>
      <Switch> 
        <Route exact path="/" component={HomePage} />
        <Route exact path="/placeholder" component={PlaceHoldPage} /> 
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
