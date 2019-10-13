import { BLOB_ACTION, BlobAction, Blob } from './blob_types';

export default (state: Blob, { type, payload }: BlobAction): Blob => {
  switch (type) {
    case BLOB_ACTION:
      return payload;
    default:
      return state || [];
  }
};
