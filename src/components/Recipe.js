import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
