import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';
import {
  activeListSelector,
  addList,
  addListSuccess,
  addTodo,
  addTodoSuccess,
  apiError,
  loadLists,
  loadListsSuccess,
  removeList,
  removeListSuccess,
  removeTodo,
  removeTodoSuccess,
  renameList,
  renameListSuccess,
  selectListTheme,
  selectListThemeSuccess,
  updateTodo,
  updateTodoSuccess
} from './todo-store';
import {
  apiAddTodo,
  apiDeleteTodo,
  apiRemoveList,
  apiUpdateTodo,
  apiGetLists,
  apiPostList,
  apiRenameList, apiSetListTheme
} from './todo.service';
import {IList, IListTheme, ITodo} from '@todo-nx/interfaces';

function* addListSaga(action: PayloadAction<{ navigate: (path: string) => void }>) {
  try {
    const list: IList = yield call(apiPostList);
    yield put(addListSuccess(list));
    action.payload.navigate(`/${list.id}`);
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

function* removeListSaga(action: PayloadAction<{list: IList, navigate?: any}>) {
  try {
    yield call(apiRemoveList, action.payload.list);
    yield put(removeListSuccess(action.payload.list));
    action.payload.navigate?.('/');
  } catch (e) {
    yield put(apiError(e));
  }
}

function* renameListSaga(action: PayloadAction<{id: string, name: string}>) {
  try {
    yield call(apiRenameList, action.payload);
    yield put(renameListSuccess(action.payload));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* setListThemeSaga(action: PayloadAction<IListTheme | undefined>) {
  try {
    const activeList: IList = yield select(activeListSelector);
    yield call(apiSetListTheme, {theme: action.payload, id: activeList.id});
    yield put(selectListThemeSuccess({theme: action.payload, id: activeList.id}));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* addTodoSaga(action: PayloadAction<ITodo>) {
  try {
    const activeList: IList = yield select(activeListSelector);
    const todo: ITodo = yield call(apiAddTodo, {listId: activeList.id!, todo: action.payload});
    yield put(addTodoSuccess({listId: activeList.id!, todo}));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* updateTodoSaga(action: PayloadAction<ITodo>) {
  try {
    yield call(apiUpdateTodo, action.payload);
    yield put(updateTodoSuccess(action.payload))
  } catch (e) {
    yield put(apiError(e));
  }
}

function* removeTodoSaga(action: PayloadAction<ITodo>) {
  try {
    yield call(apiDeleteTodo, action.payload.id!);
    yield put(removeTodoSuccess(action.payload))
  } catch (e) {
    yield put(apiError(e));
  }
}

function* apiErrorSaga(action: PayloadAction<any>) {
  console.log(action.payload);
  alert('error');
}


export function* todoSaga(): Generator {
  yield takeEvery(loadLists, loadListsSaga);
  yield takeEvery(addList, addListSaga);
  yield takeEvery(removeList, removeListSaga);
  yield takeEvery(renameList, renameListSaga);
  yield takeEvery(selectListTheme, setListThemeSaga);


  yield takeEvery(addTodo, addTodoSaga);
  yield takeEvery(updateTodo, updateTodoSaga)
  yield takeEvery(removeTodo, removeTodoSaga);

  yield takeEvery(apiError, apiErrorSaga);
}
