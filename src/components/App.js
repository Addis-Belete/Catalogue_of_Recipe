import '../style/App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemList from '../container/ItemList';
import Ingredients from '../container/Ingeredients';
import NavBar from './NavBar';

const App = () => (
  <BrowserRouter>
    <NavBar />
    <Route path="/" exact>
      <ItemList>
        <Switch>
          <Route exact path="/" component={ItemList} />
          <Route path="/:recipe_id" component={Ingredients} />
        </Switch>
      </ItemList>
    </Route>
  </BrowserRouter>
);

export default App;
