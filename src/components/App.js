/* eslint-disable no-unused-vars */
import '../style/App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from '../container/ItemList';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ItemList} />

    </Switch>
  </BrowserRouter>
);

export default App;
