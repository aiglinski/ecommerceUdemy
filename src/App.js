import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/Homepage/homepage.components';
import ShopPage from './Pages/Shop/shop.component'

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
