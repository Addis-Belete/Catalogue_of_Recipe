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
  const ingred = ingredients.ingredients.ingredients;

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

            <li key={ingredient.name} className={Styles.li}>{ingredient.name}</li>

          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ingredients;
