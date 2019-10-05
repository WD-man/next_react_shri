import actions from './actions';

export default (state, { type, payload = [] }) => {
  switch (type) {
    case actions.REPOS:
      return payload;
    default:
      return state || [];
  }
};
