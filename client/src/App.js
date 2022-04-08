import React,{ lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { GlobalStyle } from './global.styles';
import Header from './components/header/header.component'
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';
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
           <ErrorBoundary>
              <Suspense fallback={<Spinner />}>
                <Routes> 
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/shop" element={<ShopPage />} />
                  <Route exact path="/signin" render={() => this.props.currentUser ? (<Navigate to="/"/>) : (<SignInAndSignUp/>)} /> 
                  <Route exact path="/checkout" element={<CheckoutPage />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
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
