import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {IAbstractEntity} from '@todo-nx/interfaces';

export abstract class AbstractEntity implements IAbstractEntity {

  constructor(entity?: IAbstractEntity) {
    this.id = entity?.id;
    this.updatedAt = entity?.updatedAt;
    this.createdAt = entity?.createdAt;
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
