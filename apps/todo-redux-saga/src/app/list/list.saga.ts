import { PayloadAction } from '@reduxjs/toolkit';
import { IList, IListTheme } from '@todo-nx/interfaces';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { apiGetLists, apiPostList, apiRemoveList, apiRenameList, apiSetListTheme } from './list.service';
import {
  activeListSelector,
  addList,
  addListSuccess,
  apiError,
  loadLists,
  loadListsSuccess,
  removeList,
  removeListSuccess,
  renameList,
  renameListSuccess,
  selectListTheme,
  selectListThemeSuccess
} from '../todo/todo-store';

export function* listSaga(): Generator {
  yield takeEvery(loadLists, loadListsSaga);
  yield takeEvery(addList, addListSaga);
  yield takeEvery(removeList, removeListSaga);
  yield takeEvery(renameList, renameListSaga);
  yield takeEvery(selectListTheme, setListThemeSaga);
}

function* addListSaga({payload}: PayloadAction<{ navigate: (path: string) => void }>) {
  try {
    const list: IList = yield call(apiPostList);
    yield put(addListSuccess(list));
    payload.navigate(`/${list.id}`);
  } catch (e) {
    yield put(apiError(e));
  }
}

function* loadListsSaga() {
  try {
    const lists: IList[] = yield call(apiGetLists);
    yield put(loadListsSuccess(lists));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* removeListSaga({payload}: PayloadAction<{ list: IList, navigate?: any }>) {
  try {
    yield call(apiRemoveList, payload.list);
    yield put(removeListSuccess(payload.list));
    payload.navigate?.('/');
  } catch (e) {
    yield put(apiError(e));
  }
}

function* renameListSaga({payload}: PayloadAction<{ id: string, name: string }>) {
  try {
    yield call(apiRenameList, payload);
    yield put(renameListSuccess(payload));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* setListThemeSaga({payload}: PayloadAction<IListTheme | undefined>) {
  try {
    const activeList: IList = yield select(activeListSelector);
    yield call(apiSetListTheme, { theme: payload, id: activeList.id });
    yield put(selectListThemeSuccess({ theme: payload, id: activeList.id }));
  } catch (e) {
    yield put(apiError(e));
  }
}
