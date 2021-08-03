/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const FETCH_INGREDIENT_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS';
export const FETCH_INGREDIENT_FAILURE = 'FETCH_INGREDIENT_FAILURE';

export const fetchIngredientRequests = () => ({
  type: FETCH_INGREDIENT_REQUEST,
});

export const fetchIngredientSuccess = (ingredients) => ({
  type: FETCH_INGREDIENT_SUCCESS,
  payload: ingredients,

});

export const fetchIngredientsFailure = (error) => ({
  type: FETCH_INGREDIENT_FAILURE,
  payload: error,

});
export const fetchIngredients = (id) => (dispatch) => {
  const API_KEY = process.env.REACT_APP_RECIPE_API_KEY;
  dispatch(fetchIngredientRequests);
  axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${API_KEY}`)
    .then((response) => {
      const ingredients = response.data;
      dispatch(fetchIngredientSuccess(ingredients));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchIngredientsFailure(errorMsg));
    });
};
