/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { fetchRecipes, filterRecipe } from '../action';
import store from '../store/store';
import Recipe from '../components/Recipe';
import SearchBar from './SearchBar';

const ItemList = ({ recipes, filter }) => {
  console.log(recipes);
  const handleFilterchange = (e) => {
    store.dispatch(filterRecipe(e.target.value));
  };
  let filteredRecipes = '';
  if (filter === '') {
    filteredRecipes = recipes;
  } else {
    filteredRecipes = recipes.recipes.results.filter((recipe) => recipe.title === filter);
  }
  console.log(filteredRecipes);
  return (
    <div>
      <SearchBar handleChange={handleFilterchange} />
      <Recipe recipes={filteredRecipes} />

    </div>
  );
};
const mapStateToProps = (state) => ({
  recipes: state.recipe,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
