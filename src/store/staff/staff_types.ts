import {RepositoryItemProps} from '../../components/common_blocks/repository/__item';
export type Staff = RepositoryItemProps[] | undefined;

export const STAFF_ACTION = 'Staff';

export interface StaffAction {
  type: typeof STAFF_ACTION;
  payload: Staff;
}
