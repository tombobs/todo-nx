import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {TodoEntity} from './entities/todo.entity';
import {Repository} from 'typeorm';
import {ListEntity} from './entities/list.entity';
import {IList, IListTheme, ITodo} from '@todo-nx/interfaces';

@Injectable()
export class TodoService {

  constructor(@InjectRepository(TodoEntity) private todoRepository: Repository<TodoEntity>,
              @InjectRepository(ListEntity) private listRepository: Repository<ListEntity>) {
  }

  async addList(): Promise<IList> {
    const list = new ListEntity();
    list.todos = [];
    return this.listRepository.save(list);
  }

  async getLists(): Promise<IList[]> {
    const lists = await this.listRepository.find({relations: ['todos']});
    return lists.map(l => ({ ...l, todos: l.todos ?? [] }))
  }

  async removeList(list: IList): Promise<void> {
    await this.listRepository.remove(new ListEntity(list));
  }

  async renameList(id: string, name: string): Promise<void> {
    const list = await this.listRepository.findOne({where: {id}});
    list.name = name;
    await this.listRepository.save(list);
  }

  async setListTheme(id: string, theme: IListTheme): Promise<void> {
    const list = await this.listRepository.findOne({where: {id}});
    list.theme = theme?.id;
    await this.listRepository.save(list);
  }

  async addTodo(listId: string, todo: ITodo) {
    const entity = new TodoEntity(todo);
    entity.list = await this.listRepository.findOne({where: {id: listId}});
    return this.todoRepository.save(entity)
  }

  async removeTodo(id: string) {
    const entity = await this.todoRepository.findOne({where: {id}});
    await this.todoRepository.remove(entity);
  }

  async updateTodo(todo: ITodo) {
    await this.todoRepository.update({id: todo.id}, todo);
  }
}
