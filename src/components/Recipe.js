/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIngredients } from '../action/ingredient';

const Recipe = ({ recipes }) => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(fetchIngredients(id));
  };

  return (
    <div>
      <h2>Recipes List</h2>
      <div>
        {recipes.map((recipe) => (
          <div key={recipe.title}>
            <Link to={`/${recipe.id}`} onClick={clickHandler(recipe.id)}>
              <p>{recipe.title}</p>
            </Link>
            <p>{recipe.id}</p>
            <img src={`${recipe.image}`} alt="recipeImage" />
          </div>
        ))}

      </div>

    </div>

  );
};

export default Recipe;
