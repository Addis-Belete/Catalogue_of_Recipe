/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

const Recipe = ({ recipes }) => (
  <div>
    <h2>Recipes List</h2>
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.title}>

          <p>{recipe.title}</p>
          <p>{recipe.id}</p>
          <img src={`${recipe.image}`} alt="recipeImage" />
        </div>
      ))}

    </div>

  </div>

);

export default Recipe;
