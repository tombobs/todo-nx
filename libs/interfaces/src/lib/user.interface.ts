import {IAbstractEntity} from '@todo-nx/interfaces';

export interface IUser extends IAbstractEntity {
  name: string;
  email: string;
  password?: string;
  code?: string;
}
