/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { fetchRecipes } from '../action';

const ItemList = ({ recipes, fetchRecipes }) => {
  console.log(recipes);
  const [fil, setFil] = useState('');
  useEffect(() => {
    fetchRecipes();
  }, []);

  const search = (recipes) => recipes.recipes.results.filter((result) => result.title.toLowerCase().indexOf(fil) > -1);
  return (
    <div>
      <input type="text" placeholder="Search for recipes" value={fil} onChange={(e) => setFil(e.target.value)} />
      <Recipe recipes={search(recipes)} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  recipes: state.recipe,

});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
