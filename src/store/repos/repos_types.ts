export type Repos = string[] | undefined;

export const REPOS_ACTION = 'REPOS';

export interface ReposAction {
  type: typeof REPOS_ACTION;
  payload: Repos;
}
