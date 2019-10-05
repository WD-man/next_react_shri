import actions from './actions';

export default (state, { type, payload = [] }) => {
  switch (type) {
    case actions.PASS:
      return payload;
    default:
      return state || '';
  }
};
