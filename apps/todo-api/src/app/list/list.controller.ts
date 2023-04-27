import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, UseGuards} from '@nestjs/common';
import {IList, IListTheme, IUser} from '@todo-nx/interfaces';
import {JwtAuthGuard, UserFromToken} from '@todo-nx/authentication-api';
import {ListService} from './list.service';

@UseGuards(JwtAuthGuard)
@Controller('list')
export class ListController {

  constructor(private listService: ListService) {
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  addNewList(@UserFromToken() user: IUser): Promise<IList> {
    return this.listService.addList(user);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getLists(@UserFromToken() user: IUser): Promise<IList[]> {
    return this.listService.getLists(user);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  removeList(@UserFromToken() user: IUser, @Body() list: IList): Promise<void> {
    return this.listService.removeList(list, user);
  }

  @Post('rename/:listId')
  @HttpCode(HttpStatus.NO_CONTENT)
  renameList(@UserFromToken() user: IUser, @Param('listId') id: string, @Body('name') name: string): Promise<void> {
    return this.listService.renameList(id, name, user);
  }

  @Post('set-theme/:listId')
  @HttpCode(HttpStatus.NO_CONTENT)
  setListTheme(@UserFromToken() user: IUser, @Param('listId') id: string, @Body('theme') theme: IListTheme): Promise<void> {
    return this.listService.setListTheme(id, theme, user);
  }
}
