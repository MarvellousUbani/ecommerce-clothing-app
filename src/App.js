import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
