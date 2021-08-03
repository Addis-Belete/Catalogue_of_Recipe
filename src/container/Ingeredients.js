/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchIngredients } from '../action/ingredient';

const Ingredients = ({ ingredients, fetchIngredients }) => {
  useEffect(() => {
    fetchIngredients();
  }, []);
  console.log(ingredients);
  return (
    <div>
      {ingredients.ingredients.map((ingredient) => (
        <div>
          <p>{ingredient.name}</p>
          <img src={ingredient.image} alt="" />
        </div>
      ))}
    </div>

  );
};
const mapStateToProps = (state) => ({
  ingredients: state.ingredient.ingredients,

});
const mapDispatchToProps = (dispatch) => ({
  fetchIngredients: () => dispatch(fetchIngredients()),

});
export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
