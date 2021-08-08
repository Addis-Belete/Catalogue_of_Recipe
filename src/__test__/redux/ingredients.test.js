import ingredientReducer from '../../reducer/ingredientReducer';
import { FETCH_INGREDIENT_SUCCESS, FETCH_INGREDIENT_REQUEST } from '../../action/ingredient';

describe('Ingredients Reducer', () => {
  it('should return the initial state', () => {
    const state = ingredientReducer(undefined, { type: '' });
    expect(state).toEqual({
      loading: false,
      ingredients: { meals: [{ strIngredient1: 'egg white', image: 'egg-white.jpg' }] },
      error: '',
    });
  });
  it('should handle FETCH_INGREDIENT_REQUEST', () => {
    const startAction = {
      type: FETCH_INGREDIENT_REQUEST,

    };
    expect(ingredientReducer({}, startAction)).toEqual({
      error: '',
      ingredients: [],
      loading: true,
    });
  });
  it('should not return empty object', () => {
    const successAction = {
      type: FETCH_INGREDIENT_SUCCESS,
      payload: {

        ingredients: {
          error: '',
          ingredients: ['soy', 'sugar'],
          loading: false,
        },

      },
    };
    expect(ingredientReducer({}, successAction)).not.toEqual({});
  });
});
