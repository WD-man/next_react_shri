interface BlobItem {
  raw: string;
}
export type Blob = BlobItem[] | undefined;

export const BLOB_ACTION = 'BLOB';

export interface BlobAction {
  type: typeof BLOB_ACTION;
  payload: Blob;
}
