import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component'
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }  
  
  render(){
    return (
      <div> 
      <Header/>
        <Switch> 
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp/>)} /> 
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
} 
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,

})



export default connect(mapStateToProps)(App);
  