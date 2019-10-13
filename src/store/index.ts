import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reposReducer from './repos/repos';
import staffReducer from './staff/staff';
import pathReducer from './path/path';
import blobReducer from './blob/blob';

const initialState = {
  repos: []
};

const rootReducer = combineReducers({
  repos: reposReducer,
  staff: staffReducer,
  path: pathReducer,
  blob: blobReducer,
});

export type State = ReturnType<typeof rootReducer>;

export default (preloadedState = initialState) => {
  return createStore(rootReducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
};
