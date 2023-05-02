import { Injectable } from '@nestjs/common';
import { IList, IListTheme, IUser } from '@todo-nx/interfaces';
import { ListEntity } from './list.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ListService {
  constructor(@InjectRepository(ListEntity) private listRepository: Repository<ListEntity>) {
  }

  async addList(user: IUser): Promise<IList> {
    const list = new ListEntity();
    list.todos = [];
    list.userId = user.id;
    return this.listRepository.save(list);
  }

  async getLists(user: IUser): Promise<IList[]> {
    const lists = await this.listRepository.find({ relations: ['todos'], where: { userId: user.id } });
    return lists.map(l => ({ ...l, todos: l.todos ?? [] }));
  }

  async getList(id: string, user: IUser): Promise<IList> {
    return this.listRepository.findOne({ where: { id, userId: user.id } });
  }

  async removeList(list: IList, user: IUser): Promise<void> {
    await this.listRepository.delete({ id: list.id, userId: user.id });
  }

  async renameList(id: string, name: string, user: IUser): Promise<void> {
    await this.listRepository.update({ id, userId: user.id }, { name });
  }

  async setListTheme(id: string, theme: IListTheme, user: IUser): Promise<void> {
    await this.listRepository.update({ id, userId: user.id }, { theme: theme.id });
  }
}
