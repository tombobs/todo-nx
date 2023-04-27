import {apiDelete, apiPost, apiPut} from '../../utils';
import {ITodo} from '@todo-nx/interfaces';

export async function apiAddTodo({listId, todo}: {listId: string, todo: ITodo}): Promise<ITodo> {
  return apiPost(`todo/${listId}/add`, todo);
}

export async function apiDeleteTodo(todoId: string): Promise<void> {
  return apiDelete(`todo/${todoId}`);
}

export async function apiUpdateTodo(todo: ITodo): Promise<void> {
  return apiPut(`todo/${todo.id}`, todo);
}

