const FILTER_RECIPE = 'FILTER_RECIPE';
const FETCH_RECIPE = 'FETCH_RECIPE';
const recipeFilter = (filter) => ({
  type: FILTER_RECIPE,
  filter,
});

export { FILTER_RECIPE, recipeFilter, FETCH_RECIPE };
