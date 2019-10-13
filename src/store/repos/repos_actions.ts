import { ThunkAction } from 'redux-thunk';
import { AnyAction, Dispatch } from 'redux';
import fetch from 'isomorphic-unfetch';
import {REPOS_ACTION} from './repos_types';

const getReposUrl = (name?: string): string => `http://localhost:8077/api/repos/${name || ''}`;

export const getRepos = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: Dispatch): Promise<void> => {
    const result = await fetch(getReposUrl());
    const msg = await result.json();
    dispatch({ type: REPOS_ACTION, payload: msg });
  };
};
