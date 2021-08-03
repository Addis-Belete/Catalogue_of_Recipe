/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Ingredients = () => {
  const history = useHistory;
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains('close-meal-detail')) {
      history.push('/');
    }
  };
  const ingredients = useSelector((state) => state.ingredient);
  const ingred = ingredients.ingredients.ingredients;
  console.log(ingred);
  return (
    <div>
      {ingred.map((ingredient) => (
        <div key={ingredient.name}>
          <p>{ingredient.name}</p>
          <img src={ingredient.image} alt="" />
        </div>
      ))}
    </div>

  );
};

export default Ingredients;
