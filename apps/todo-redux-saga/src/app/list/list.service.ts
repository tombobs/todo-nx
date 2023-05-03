import { IList, IListTheme } from '@todo-nx/interfaces';
import {HttpUtils} from '@todo-nx/utils';
import { environment } from '../../environments/environment';

const http = new HttpUtils(environment);

export async function apiPostList(): Promise<IList> {
  return http.apiPost('list', {});
}

export async function apiGetLists(): Promise<IList[]> {
  return http.apiGet('list');
}

export async function apiRemoveList(list: IList): Promise<IList[]> {
  return http.apiDelete('list', list);
}

export async function apiRenameList({ id, name }: { id: string, name: string }): Promise<void> {
  return http.apiPost('list/rename/' + id, { name });
}

export async function apiSetListTheme({ id, theme }: { id: string, theme: IListTheme | undefined }): Promise<void> {
  return http.apiPost('list/set-theme/' + id, { theme });
}
