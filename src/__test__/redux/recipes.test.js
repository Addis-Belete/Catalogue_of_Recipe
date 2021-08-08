import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../../action';
import recipeReducer from '../../reducer/recipeReducer';

describe('Recipe Reducer', () => {
  it('Should return initial state', () => {
    expect(recipeReducer(undefined, { type: '' })).toEqual({
      error: '',
      loading: false,
      recipes: {
        meals: [
          {
            idMeal: 2020,
            strMeal: 'hello world',
          },
        ],
      },
    });
  });
  it('Should handle FETCH_USER_REQUEST', () => {
    const requestAction = {
      type: FETCH_USER_REQUEST,

    };
    expect(recipeReducer({}, requestAction)).toEqual({ loading: true });
  });
  it('Should handle FETCH_USER_SUCCESS', () => {
    const recipes = {
      meals: [{ strMeals: 'pasta' }],

    };
    const successAction = {
      type: FETCH_USER_SUCCESS,
      payload: recipes,
    };

    expect(recipeReducer(recipes, successAction)).toEqual({
      error: '',
      loading: false,
      recipes: {
        meals: [
          {
            strMeals: 'pasta',
          },
        ],
      },
    });
  });
  it('should handle FETCH_USER_FAILURE', () => {
    const failureAction = {
      type: FETCH_USER_FAILURE,
      payload: 'yes',
    };
    expect(recipeReducer({}, failureAction)).toEqual({
      error: 'yes',
      loading: false,
      recipes: [],
    });
  });
});
