import React from 'react';
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

class App extends React.Component {

  componentDidMount() {
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (< SignInAndSignUpPage />) } />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);