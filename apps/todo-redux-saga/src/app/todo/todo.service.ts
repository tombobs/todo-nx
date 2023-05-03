import { ITodo } from '@todo-nx/interfaces';
import {HttpUtils} from '@todo-nx/utils';
import { environment } from '../../environments/environment';

const {apiPost, apiDelete, apiPut} = new HttpUtils(environment);


export async function apiAddTodo({ listId, todo }: { listId: string, todo: ITodo }): Promise<ITodo> {
  return apiPost(`todo/${listId}/add`, todo);
}

export async function apiDeleteTodo(todoId: string): Promise<void> {
  return apiDelete(`todo/${todoId}`);
}

export async function apiUpdateTodo(todo: ITodo): Promise<void> {
  return apiPut(`todo/${todo.id}`, todo);
}

