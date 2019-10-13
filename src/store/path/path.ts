import {Path, PATH_ACTION, PathAction} from './path_types';

export default (state: Path, { type, payload }: PathAction) => {
  switch (type) {
    case PATH_ACTION:
      return payload;
    default:
      return state || '';
  }
};
