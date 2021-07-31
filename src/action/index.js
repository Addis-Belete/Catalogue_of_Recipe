import axios from 'axios';

const FILTER_RECIPE = 'FILTER_RECIPE';
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const recipeFilter = (filter) => ({
  type: FILTER_RECIPE,
  filter,
});
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
  axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=2b280d469bf44b1280528a91ec861d2a&number=20')
    .then((response) => {
      const recipes = response.results;
      dispatch(fetchRecipeSuccess(recipes));
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchRecipesFailure(errorMsg));
    });
};
