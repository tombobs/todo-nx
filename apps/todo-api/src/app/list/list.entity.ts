import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../shared/abstract.entity';
import { IList, ITodo } from '@todo-nx/interfaces';

@Entity('list')
export class ListEntity extends AbstractEntity implements IList {

  @Column({ default: 'Untitled list' })
  name: string;

  @Column({ default: 0 })
  theme?: number;

  @Column({ nullable: false })
  userId: string;

  @OneToMany('todo', 'list')
  todos: ITodo[];

  constructor(entity?: IList) {
    super(entity);
  }
}
