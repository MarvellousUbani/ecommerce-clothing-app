import React, { useEffect } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import CheckoutPage from './page/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './page/signin-and-signup-page/signin-and-signup.component';

import {selectCurrentUser} from './redux/user/user.selectors';
import {checkUserSession} from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {

 useEffect(() => {
   checkUserSession();
 }, [checkUserSession]);

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (< SignInAndSignUpPage />) } />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);