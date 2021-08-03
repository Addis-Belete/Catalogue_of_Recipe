/* eslint-disable no-unused-vars */

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

  return (
    <div
      className="close-meal-detail"
      role="button"
      tabIndex="0"
      onClick={exitDetailHandler}
      onKeyDown={exitDetailHandler}
    >
      <div>
        <div>
          <span
            className="close-meal-detail"
            role="button"
            tabIndex="0"
            onClick={exitDetailHandler}
            onKeyDown={exitDetailHandler}
          >
            Close

          </span>

        </div>
        <ul>

          {ingred.map((ingredient) => (

            <li key={ingredient.name}>{ingredient.name}</li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
