import { Body, Controller, Delete, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ITodo, IUser } from '@todo-nx/interfaces';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { JwtAuthGuard, UserFromToken } from '@todo-nx/authentication-api';

@UseGuards(JwtAuthGuard)
@Controller('todo')
export class TodoController {

  constructor(private todoService: TodoService) {
  }

  @Post(':listId/add')
  @HttpCode(HttpStatus.CREATED)
  addTodo(@UserFromToken() user: IUser, @Param('listId') listId: string, @Body() todo: ITodo): Promise<TodoEntity> {
    return this.todoService.addTodo(listId, todo, user);
  }

  @Delete(':todoId')
  @HttpCode(HttpStatus.OK)
  deleteTodo(@UserFromToken() user: IUser, @Param('todoId') todoId: string): Promise<void> {
    return this.todoService.removeTodo(todoId, user);
  }

  @Put(':todoId')
  @HttpCode(HttpStatus.OK)
  updateTodo(@UserFromToken() user: IUser, @Param('todoId') todoId: string, @Body() todo: ITodo): Promise<void> {
    return this.todoService.updateTodo(todo, user);
  }
}
