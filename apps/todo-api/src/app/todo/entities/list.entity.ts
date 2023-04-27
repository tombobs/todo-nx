import {Column, Entity, OneToMany} from 'typeorm';
import {AbstractEntity} from '../../abstract.entity';
import {IList, ITodo} from '@todo-nx/interfaces';

@Entity('list')
export class ListEntity extends AbstractEntity implements IList {

  constructor(entity?: IList) {
    super(entity);
  }

  @Column({ default: 'Untitled list' })
  name: string;

  @Column({default: 0})
  theme?: number;

  @OneToMany('todo', 'list')
  todos: ITodo[];
}
