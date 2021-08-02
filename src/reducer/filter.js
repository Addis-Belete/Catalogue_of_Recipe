import { FILTER_RECIPE } from '../action';

const initialState = '';

const filterReducer = (state = initialState, action) => {
  if (action.type === FILTER_RECIPE) {
    return action.type;
  }
  return state;
};
export default filterReducer;
