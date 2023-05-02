import { IList } from './list.interface';

export interface ITodo {
  id?: string;
  title: string;
  isComplete?: boolean;
  list?: IList;
  starred?: boolean;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}
