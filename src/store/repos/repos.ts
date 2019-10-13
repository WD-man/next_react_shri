import {REPOS_ACTION, Repos, ReposAction} from './repos_types';
// import actions from '../actions';

export default (state: Repos, { type, payload = [] }: ReposAction) => {
  switch (type) {
    case REPOS_ACTION:
      return payload;
    default:
      return state || [];
  }
};
