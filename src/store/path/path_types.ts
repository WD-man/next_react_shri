export type Path = string | undefined;

export const PATH_ACTION = 'PATH';

export interface PathAction {
  type: typeof PATH_ACTION;
  payload: Path;
}
