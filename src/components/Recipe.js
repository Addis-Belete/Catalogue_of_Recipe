import React from 'react';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { fetchIngredients } from '../action/ingredient';
import styles from '../style/style.module.css';

const Recipe = ({ recipes }) => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(fetchIngredients(id));
  };

  return (
    <div>

      <div className={`${styles.tablet} ${styles.desktop}`}>
        {recipes.map((recipe) => (
          <div key={recipe.strMeal}>
            <Link to={`/${recipe.idMeal}`} onClick={clickHandler(recipe.idMeal)}>
              <img className={styles.img} src={`${recipe.strMealThumb}`} alt="recipeImage" />
              <p className={styles.p}>{recipe.strMeal}</p>
            </Link>
          </div>
        ))}

      </div>

    </div>

  );
};
Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string,
    }),
  ),
};
Recipe.defaultProps = {
  recipes: [],
};

export default Recipe;
