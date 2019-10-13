import {Staff, STAFF_ACTION, StaffAction} from './staff_types';

export default (state: Staff, { type, payload = [] }: StaffAction) => {
  switch (type) {
    case STAFF_ACTION:
      return payload;
    default:
      return state || [];
  }
};
