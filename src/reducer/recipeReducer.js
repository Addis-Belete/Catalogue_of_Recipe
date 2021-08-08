import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../action';

const initialState = {
  loading: false,
  recipes: { meals: [{ strMeal: 'hello world', idMeal: 2020 }] },
  error: '',

};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,

      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        recipes: action.payload,
        error: '',
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        recipes: [],
        error: action.payload,

      };
    default:
      return state;
  }
};
export default recipeReducer;
