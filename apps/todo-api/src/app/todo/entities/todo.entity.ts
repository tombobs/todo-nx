import {Column, Entity, ManyToOne} from 'typeorm';
import {AbstractEntity} from '../../abstract.entity';
import {IList, ITodo} from '@todo-nx/interfaces';

@Entity('todo')
export class TodoEntity extends AbstractEntity {
  constructor(entity: ITodo) {
    super();
    this.id = entity?.id;
    this.title = entity?.title;
    this.isComplete = entity?.isComplete;
  }

  @Column({ default: '' })
  title: string;

  @Column({ default: false })
  isComplete: boolean;

  @Column({ default: false })
  starred: boolean;

  @Column({ default: '' })
  notes: string;

  @ManyToOne('list', 'todos', {eager: true, onDelete: 'CASCADE', cascade: true, orphanedRowAction: 'delete'})
  list: IList;
}
