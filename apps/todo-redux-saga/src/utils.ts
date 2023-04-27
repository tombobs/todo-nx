import axios, { AxiosResponse } from 'axios';
import {environment} from './environments/environment';
import {ITodoState} from './app/todo/todo-store';
import {ITodo} from '@todo-nx/interfaces';
import {useEffect, useRef} from 'react';

export const getNextId = (list: {id?: number}[]): number => (list as {id: number}[]).reduce((p: number, n: {id: number}): number => Math.max(n.id, p), 0) + 1



export async function apiGet<T = any>(url: string, params?: any): Promise<T> {
  const res = await axios.get<T>(`${environment.apiUrl}/${url}`, {headers: {Authorization: authHeader() }, params });
  return res.data;
}

export async function apiDelete<T = any>(url: string, params?: any): Promise<T> {
  const res = await axios.delete<T>(`${environment.apiUrl}/${url}`, {headers: {Authorization: authHeader() }, params });
  return res.data;
}

export async function apiPost<T = any, D = any>(url: string, data: D): Promise<T> {
  const res = await axios.post(`${environment.apiUrl}/${url}`, data, {headers: {Authorization: authHeader() }});
  return res.data;
}

export async function apiPut<T = any, D = any>(url: string, data: D): Promise<T> {
  const res = await axios.put(`${environment.apiUrl}/${url}`, data, {headers: {Authorization: authHeader() }});
  return res.data;
}


function authHeader(): string {
  return `Bearer ${localStorage.getItem('token')}`;
}

export function findExistingTodo(state: ITodoState, todo: ITodo): ITodo {
  const listIndex = state.lists.findIndex(l => l.id === todo.list!.id);
  const todoIndex = state.activeList!.todos.findIndex(t => t.id === todo.id);
  return  state.lists[listIndex].todos[todoIndex];
}

export function usePrevious<T = any>(value: T) {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  },[value]);
  return ref.current;
}
