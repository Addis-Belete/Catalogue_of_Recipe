/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';

const Recipe = ({ recipes }) => {
  console.log(recipes);
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.title}>

          <p>{recipe.title}</p>
          <p>{recipe.id}</p>
          <img src={`${recipe.image}`} alt="recipeImage" />
        </div>
      ))}

    </div>

  );
};

export default Recipe;
