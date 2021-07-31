/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore } from 'redux';
import { FILTER_RECIPE } from '../action';
import RecipeData from '../Api/Recipe-data';

const initialState = [];
const recipeReducer = (state = Data()) => state;
const store = createStore(recipeReducer);
export default store;
