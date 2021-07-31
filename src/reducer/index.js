import { FILTER_RECIPE } from '../action';
import RecipeData from '../Api/Recipe-data';

const initialState = RecipeData();

const recipeReducer = (state = initialState, action) => {
  if (action.type === FILTER_RECIPE) {
    return action.filter;
  }
  return state;
};

export default recipeReducer;
