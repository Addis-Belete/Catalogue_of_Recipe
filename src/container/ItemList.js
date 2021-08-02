/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/jsx-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from '../action';

const ItemList = ({ recipes, fetchRecipes }) => {
  console.log(recipes);
  useEffect(() => {
    fetchRecipes();
  }, []);
  return recipes.loading ? (
    <h2>Loading...</h2>
  ) : recipes.error ? (
    <h2>{recipes.error}</h2>
  ) : (
    <div>
      <h2>Recipes List</h2>
      <div>
        {recipes.recipes.results.map((recipe) => (
          <div key={recipe.title}>

            <p>{recipe.title}</p>
            <p>{recipe.id}</p>
            <img src={`${recipe.image}`} alt="recipeImage" />
          </div>
        ))}

      </div>

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
