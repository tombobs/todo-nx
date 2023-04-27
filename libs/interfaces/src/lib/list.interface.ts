import {ITodo} from './todo.interface';
import {IAbstractEntity} from './abstract-entity.interface';

export interface IList extends IAbstractEntity {
  name: string;
  todos: ITodo[];
  theme?: number;
}

