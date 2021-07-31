/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

const composedEnhancer = applyMiddleware(thunkMiddleware);
const RECIPES_LOAD = 'RECIPES_LOAD';
const initialState = [];
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_LOAD: {
      return action.payload;
    }
    default:
      return state;
  }
};

const fetchRecipes = async (dispatch, getState) => {
  const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=2b280d469bf44b1280528a91ec861d2a&number=20');
  console.log(response);
  dispatch({ type: RECIPES_LOAD, payload: response.results });
  const stateAfter = getState();
  console.log(stateAfter);
};
const store = createStore(recipeReducer, composedEnhancer);
console.log(store.getState());
export { recipeReducer, fetchRecipes, store };
