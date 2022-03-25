import React,{ lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component';

const HomePage = lazy(()=> import('./pages/homepage/homepage.component'))
const ShopPage = lazy(()=> import('./pages/shop-page/shop-page.component'))
const CheckoutPage = lazy(()=> import('./pages/checkout-page/checkout-page.component'))
const SignInAndSignUp = lazy(()=> import('./pages/sign-in-and-sing-up/sign-in-and-sign-up.component'))


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
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSignUp/>)} /> 
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
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
