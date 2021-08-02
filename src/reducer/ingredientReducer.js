import {
  FETCH_INGREDIENT_FAILURE, FETCH_INGREDIENT_REQUEST, FETCH_INGREDIENT_SUCCESS, fetchIngredients,
} from '../action/ingredient';

const initialState = {
  loading: false,
  ingredients: [{
    name: 'bocola',
    image: '',

  }],
  error: '',
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENT_REQUEST:
      return {
        loading: true,
        ingredients: [],
        error: '',
      };
    case FETCH_INGREDIENT_SUCCESS:
      return {
        loading: false,
        ingredients: action.payload,
        error: '',

      };
    case FETCH_INGREDIENT_FAILURE:
      return {
        loading: false,
        ingredients: [],
        error: action.payload,

      };
    default:
      return state;
  }
};
export default ingredientReducer;
