import fetch from 'isomorphic-unfetch';

const getUrl = name => `http://localhost:8077/api/repos/${name || ''}`;

const actions = {
  REPOS: 'REPOS',
  STAFF: 'STAFF',
  PASS: 'PASS',
};

export default actions;

export const getRepos = () => {
  return async dispatch => {
    const result = await fetch(getUrl());
    const msg = await result.json();
    dispatch({ type: actions.REPOS, payload: msg });
  };
};

export const getStaff = (repo, path) => {
  const url = `${repo}/${path || ''}`;
  return async dispatch => {
    const result = await fetch(getUrl(url));
    const msg = await result.json();
    dispatch({ type: actions.STAFF, payload: msg });
  };
};
