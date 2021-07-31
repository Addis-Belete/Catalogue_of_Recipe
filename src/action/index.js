const FILTER_RECIPE = 'FILTER_RECIPE';
const recipeFilter = (filter) => ({
  type: FILTER_RECIPE,
  filter,
});

export { FILTER_RECIPE, recipeFilter };
