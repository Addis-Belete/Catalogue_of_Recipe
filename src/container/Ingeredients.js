import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Styles from '../style/ingredients.module.css';

const Ingredients = () => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains('close-ingredients')) {
      history.push('');
    }
  };
  const ingredients = useSelector((state) => state.ingredient);

  const ingred = ingredients.ingredients.meals;

  return (
    <div
      className={`${'close-ingredients'} ${Styles.ingredient} ${Styles.tablet}`}
      role="button"
      tabIndex="0"
      onClick={exitDetailHandler}
      onKeyDown={exitDetailHandler}
    >
      <div className="ingredient-list">
        <div>
          <span
            className={`${'close-ingredients'} ${Styles.span}`}
            role="button"
            tabIndex="0"
            onClick={exitDetailHandler}
            onKeyDown={exitDetailHandler}
          >
            Close

          </span>

        </div>
        <h2 className={Styles.h2}>Ingredients</h2>
        <ul className={Styles.ul}>

          {ingred.map((ingredient) => (
            <>
              <li key={ingredient.strIngredient1} className={Styles.li}>
                {ingredient.strIngredient1}
              </li>
              <li key={ingredient.strIngredient2} className={Styles.li}>
                {ingredient.strIngredient2}
              </li>
              <li key={ingredient.strIngredient3} className={Styles.li}>
                {ingredient.strIngredient3}
              </li>
              <li key={ingredient.strIngredient4} className={Styles.li}>
                {ingredient.strIngredient4}
              </li>
              <li key={ingredient.strIngredient5} className={Styles.li}>
                {ingredient.strIngredient5}
              </li>
              <li key={ingredient.strIngredient6} className={Styles.li}>
                {ingredient.strIngredient6}
              </li>

            </>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
