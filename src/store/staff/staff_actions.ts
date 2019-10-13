import { Dispatch } from 'redux';
import fetch from 'isomorphic-unfetch';
import {STAFF_ACTION} from './staff_types';

const getReposUrl = (name?: string): string => `http://localhost:8077/api/repos/${name || ''}`;

export const getStaff = (repo: string, path: string) => {
  const url = `${repo}/${path || ''}`;
  return async (dispatch: Dispatch) => {
    const result = await fetch(getReposUrl(url));
    const msg = await result.json();
    dispatch({ type: STAFF_ACTION, payload: msg });
  };
};
