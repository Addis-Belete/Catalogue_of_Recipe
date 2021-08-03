import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from '../container/ItemList';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ItemList} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
