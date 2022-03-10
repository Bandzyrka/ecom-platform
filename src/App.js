import React from 'react';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component'
import Header from './components/header/header.component'
import SignInAndSingUp from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }  
  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user})
      console.log(this.state.currentUser)
    })
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  
  render(){
    return (
      <div> 
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
        <Switch> 
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSingUp} /> 
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
