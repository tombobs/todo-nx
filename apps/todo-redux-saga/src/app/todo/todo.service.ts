import { ITodo } from '@todo-nx/interfaces';
import {UiHttpUtils} from '@todo-nx/utils';
import { environment } from '../../environments/environment';

const http = new UiHttpUtils(environment);


export async function apiAddTodo({ listId, todo }: { listId: string, todo: ITodo }): Promise<ITodo> {
  return http.apiPost(`todo/${listId}/add`, todo);
}

export async function apiDeleteTodo(todoId: string): Promise<void> {
  return http.apiDelete(`todo/${todoId}`);
}

export async function apiUpdateTodo(todo: ITodo): Promise<void> {
  return http.apiPut(`todo/${todo.id}`, todo);
}

