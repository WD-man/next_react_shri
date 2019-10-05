import actions from './actions';

export default (state, { type, payload = [] }) => {
  switch (type) {
    case actions.STAFF:
      return payload;
    default:
      return state || [];
  }
};
