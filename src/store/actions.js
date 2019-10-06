import fetch from 'isomorphic-unfetch';

const getReposUrl = name => `http://localhost:8077/api/repos/${name || ''}`;
const getFilesUrl = name => `http://localhost:8077/api/files/${name || ''}`;

const actions = {
  REPOS: 'REPOS',
  STAFF: 'STAFF',
  PASS: 'PASS',
  BLOB: 'BLOB',
};

export default actions;

export const getRepos = () => {
  return async dispatch => {
    const result = await fetch(getReposUrl());
    const msg = await result.json();
    dispatch({ type: actions.REPOS, payload: msg });
  };
};

export const getStaff = (repo, path) => {
  const url = `${repo}/${path || ''}`;
  return async dispatch => {
    const result = await fetch(getReposUrl(url));
    const msg = await result.json();
    dispatch({ type: actions.STAFF, payload: msg });
  };
};

export const getBlob = (repo, path) => {
  const url = `${repo}/${path || ''}`;
  return async dispatch => {
    const result = await fetch(getFilesUrl(url));
    const msg = await result.json();
    dispatch({ type: actions.BLOB, payload: msg });
  };
};
