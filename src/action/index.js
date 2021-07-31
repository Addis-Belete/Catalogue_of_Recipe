const FILTER_RECIPE = 'FILTER_RECIPE';
const FETCH_RECIPE = 'FETCH_RECIPE';
const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
const recipeFilter = (filter) => ({
  type: FILTER_RECIPE,
  filter,
});
export const fetchRecipeRequests = () => ({
  type: FETCH_USER_REQUEST,
});

export const fetchRecipeSuccess = (recipes) => ({
  type: FETCH_USER_SUCCESS,

});
export { FILTER_RECIPE, recipeFilter, FETCH_RECIPE };
