import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../shared/abstract.entity';
import { IList, ITodo } from '@todo-nx/interfaces';

@Entity('todo')
export class TodoEntity extends AbstractEntity {
  @Column({ default: '' })
  title: string;
  @Column({ default: false })
  isComplete: boolean;
  @Column({ default: false })
  starred: boolean;
  @Column({ default: '' })
  notes: string;
  @Column({ nullable: false })
  userId: string;
  @ManyToOne('list', 'todos', { eager: true, onDelete: 'CASCADE', cascade: true, orphanedRowAction: 'delete' })
  list: IList;

  constructor(entity: ITodo) {
    super();
    this.id = entity?.id;
    this.title = entity?.title;
    this.isComplete = entity?.isComplete;
    this.list = entity?.list;
  }
}
