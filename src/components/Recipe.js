/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { fetchRecipes } from '../action';

const Recipe = ({ recipes }) => {
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

export default Recipe;
