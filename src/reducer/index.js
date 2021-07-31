/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore } from 'redux';
import { FILTER_RECIPE } from '../action';
import RecipeData from '../Api/Recipe-data';

const Data = () => {
  let initialState = [{ id: 1, title: 'food' }];
  RecipeData().then((resp) => { initialState = resp.results; });
  return initialState;
};
console.log(Data());
const recipeReducer = (state = Data()) => state;
const store = createStore(recipeReducer);
export default store;
