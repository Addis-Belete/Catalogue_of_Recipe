import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/rootReducer';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
