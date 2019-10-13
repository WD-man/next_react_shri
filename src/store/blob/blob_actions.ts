import { Dispatch } from 'redux';
import fetch from 'isomorphic-unfetch';
import { BLOB_ACTION } from './blob_types';

const getFilesUrl = (name: string): string => `http://localhost:8077/api/files/${name || ''}`;

export const getBlob = (repo: string, path: string) => {
  const url = `${repo}/${path || ''}`;
  return async (dispatch: Dispatch) => {
    const result = await fetch(getFilesUrl(url));
    const msg = await result.json();
    dispatch({ type: BLOB_ACTION, payload: msg });
  };
};
