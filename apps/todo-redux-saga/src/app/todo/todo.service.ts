import {apiDelete, apiGet, apiPost, apiPut} from '../../utils';
import {IList, IListTheme, ITodo} from '@todo-nx/interfaces';

export async function apiPostList(): Promise<IList> {
  return apiPost('todo/new-list', {});
}

export async function apiGetLists(): Promise<IList[]> {
  return apiGet('todo/lists');
}

export async function apiRemoveList(list: IList): Promise<IList[]> {
  return apiPost('todo/remove-list', list);
}

export async function apiRenameList({id, name}: {id: string, name: string}): Promise<void> {
  return apiPost('todo/rename-list/' + id, {name});
}

export async function apiSetListTheme({id, theme}: {id: string, theme: IListTheme | undefined}): Promise<void> {
  return apiPost('todo/set-list-theme/' + id, {theme});
}

export async function apiAddTodo({listId, todo}: {listId: string, todo: ITodo}): Promise<ITodo> {
  return apiPost(`todo/${listId}/add`, todo);
}

export async function apiDeleteTodo(todoId: string): Promise<void> {
  return apiDelete(`todo/${todoId}`);
}

export async function apiUpdateTodo(todo: ITodo): Promise<void> {
  return apiPut(`todo/${todo.id}`, todo);
}

