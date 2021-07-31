/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore } from 'redux';
import axios from 'axios';
import { FILTER_RECIPE } from '../action';
import RecipeData from '../Api/Recipe-data';

const RECIPES_LOAD = 'RECIPES_LOAD';
const initialState = [];
const recipeReducer = (state = initialState, action) => state;

const fetchRecipes = async (dispatch, getState) => {
  const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch?apiKey=2b280d469bf44b1280528a91ec861d2a&number=20');
  dispatch({ type: RECIPES_LOAD, payload: response.results });
};

export { recipeReducer, fetchRecipes };
