import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put} from '@nestjs/common';
import {IList, IListTheme, ITodo} from '@todo-nx/interfaces';
import {TodoService} from './todo.service';
import {TodoEntity} from './entities/todo.entity';

@Controller('todo')
export class TodoController {

  constructor(private todoService: TodoService) {
  }

  @Post(':listId/add')
  @HttpCode(HttpStatus.CREATED)
  addTodo(@Param('listId') listId: string, @Body() todo: ITodo): Promise<TodoEntity> {
    return this.todoService.addTodo(listId, todo);
  }

  @Delete(':todoId')
  @HttpCode(HttpStatus.OK)
  deleteTodo(@Param('todoId') todoId: string): Promise<void> {
    return this.todoService.removeTodo(todoId);
  }

  @Put(':todoId')
  @HttpCode(HttpStatus.OK)
  updateTodo(@Param('todoId') todoId: string, @Body() todo: ITodo): Promise<void> {
    return this.todoService.updateTodo(todo);
  }

  // LISTS
  @Post('new-list')
  @HttpCode(HttpStatus.CREATED)
  addNewList(): Promise<IList> {
    return this.todoService.addList();
  }

  @Get('lists')
  @HttpCode(HttpStatus.OK)
  getLists(): Promise<IList[]> {
    return this.todoService.getLists();
  }

  @Post('remove-list')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeList(@Body() list: IList): Promise<void> {
    return this.todoService.removeList(list)
  }

  @Post('rename-list/:listId')
  @HttpCode(HttpStatus.NO_CONTENT)
  renameList(@Param('listId') id: string, @Body('name') name: string): Promise<void> {
    return this.todoService.renameList(id, name);
  }

  @Post('set-list-theme/:listId')
  @HttpCode(HttpStatus.NO_CONTENT)
  setListTheme(@Param('listId') id: string, @Body('theme') theme: IListTheme): Promise<void> {
    return this.todoService.setListTheme(id, theme);
  }
}
