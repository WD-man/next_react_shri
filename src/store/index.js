import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import immutable from 'seamless-immutable';
import reposReducer from './repos';
import staffReducer from './staff';
import pathReducer from './path';
import blobReducer from './blob';

const initialState = immutable({
  repos: [],
});

const rootReducer = combineReducers({
  repos: reposReducer,
  staff: staffReducer,
  path: pathReducer,
  blob: blobReducer,
});

export default (preloadedState = initialState) => {
  return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
};
