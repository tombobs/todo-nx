import {IList, IListTheme} from '@todo-nx/interfaces';
import {apiDelete, apiGet, apiPost} from '../../utils';

export async function apiPostList(): Promise<IList> {
  return apiPost('list', {});
}

export async function apiGetLists(): Promise<IList[]> {
  return apiGet('list');
}

export async function apiRemoveList(list: IList): Promise<IList[]> {
  return apiDelete('list', list);
}

export async function apiRenameList({id, name}: {id: string, name: string}): Promise<void> {
  return apiPost('list/rename/' + id, {name});
}

export async function apiSetListTheme({id, theme}: {id: string, theme: IListTheme | undefined}): Promise<void> {
  return apiPost('list/set-theme/' + id, {theme});
}
