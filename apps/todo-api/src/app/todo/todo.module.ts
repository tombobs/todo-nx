import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodoEntity} from './entities/todo.entity';
import {ListEntity} from './entities/list.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity, ListEntity])
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
