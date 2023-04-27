import {Module} from '@nestjs/common';
import {TodoController} from './todo.controller';
import {TodoService} from './todo.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TodoEntity} from './todo.entity';
import {ListModule} from '../list/list.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TodoEntity]),
    ListModule
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
