import React from 'react';

import { createStructuredSelector } from 'reselect'
import { Switch, Route, Redirect } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component'
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sing-up/sign-in-and-sign-up.component';
import { connect } from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div> 
      <GlobalStyle />
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
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
