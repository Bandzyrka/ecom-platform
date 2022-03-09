import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component'
import Header from './components/header/header.component'
import SignInAndSingUp from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';

function App() {
  return (
    <div> 
    <BrowserRouter>
      <Header />
      <Switch> 
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSingUp} /> 
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
