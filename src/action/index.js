/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import axios from 'axios';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FILTER_RECIPE = 'FILTER_RECIPE';
export const fetchRecipeRequests = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchRecipeSuccess = (recipes) => ({
  type: FETCH_USER_SUCCESS,
  payload: recipes,

});

export const fetchRecipesFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,

});

export const fetchRecipes = () => (dispatch) => {
  dispatch(fetchRecipeRequests);
  axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=2b280d469bf44b1280528a91ec861d2a&number=40')
    .then((response) => {
      const recipes = response.data;
      dispatch(fetchRecipeSuccess(recipes));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchRecipesFailure(errorMsg));
    });
};

export const fetchIngredients = (id) => (dispatch) => {
  axios.get(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=2b280d469bf44b1280528a91ec861d2a`)
    .then((response) => {
      const recipes = response.data;
    })
    .catch((error) => {
      const errorMsg = error.message;
    });
};
