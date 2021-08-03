import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchIngredients } from '../action/ingredient';
import styles from '../style/style.module.css';

const Recipe = ({ recipes }) => {
  const dispatch = useDispatch();
  const clickHandler = (id) => {
    dispatch(fetchIngredients(id));
  };

  return (
    <div>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.title}>
            <Link to={`/${recipe.id}`} onClick={clickHandler(recipe.id)}>
              <img className={styles.img} src={`${recipe.image}`} alt="recipeImage" />
              <p className={styles.p}>{recipe.title}</p>
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
