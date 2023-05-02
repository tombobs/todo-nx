import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoEntity } from './todo.entity';
import { Repository } from 'typeorm';
import { ITodo, IUser } from '@todo-nx/interfaces';
import { ListService } from '../list/list.service';

@Injectable()
export class TodoService {

  constructor(@InjectRepository(TodoEntity) private todoRepository: Repository<TodoEntity>,
              private listService: ListService) {
  }

  async addTodo(listId: string, todo: ITodo, user: IUser): Promise<TodoEntity> {
    const entity = new TodoEntity(todo);
    entity.userId = user.id;
    entity.list = await this.listService.getList(listId, user);
    return this.todoRepository.save(entity);
  }

  async removeTodo(id: string, user: IUser): Promise<void> {
    await this.todoRepository.delete({ id, userId: user.id });
  }

  async updateTodo(todo: ITodo, user: IUser): Promise<void> {
    await this.todoRepository.update({ id: todo.id, userId: user.id }, todo);
  }
}
