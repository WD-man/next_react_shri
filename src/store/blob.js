import actions from './actions';

export default (state, { type, payload = [] }) => {
  switch (type) {
    case actions.BLOB:
      return payload;
    default:
      return state || [];
  }
};
