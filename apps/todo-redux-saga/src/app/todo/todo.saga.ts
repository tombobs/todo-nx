import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import {
  activeListSelector,
  addTodo,
  addTodoSuccess,
  apiError,
  removeTodo,
  removeTodoSuccess,
  updateTodo,
  updateTodoSuccess
} from './todo-store';
import { apiAddTodo, apiDeleteTodo, apiUpdateTodo, } from './todo.service';
import { IList, ITodo } from '@todo-nx/interfaces';
import { showSuccessSnackbar } from "@todo-nx/react-components";

export function* todoSaga(): Generator {
  yield takeEvery(addTodo, addTodoSaga);
  yield takeEvery(updateTodo, updateTodoSaga);
  yield takeEvery(removeTodo, removeTodoSaga);
}

function* addTodoSaga({payload}: PayloadAction<ITodo>) {
  try {
    const activeList: IList = yield select(activeListSelector);
    const todo: ITodo = yield call(apiAddTodo, { listId: activeList.id!, todo: payload });
    yield put(addTodoSuccess({ listId: activeList.id!, todo }));
    yield put(showSuccessSnackbar({message: `Todo '${payload.title}' added` }));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* updateTodoSaga({payload}: PayloadAction<ITodo>) {
  try {
    yield call(apiUpdateTodo, payload);
    yield put(updateTodoSuccess(payload));
    yield put(showSuccessSnackbar({message: `Todo '${payload.title}' updated` }));
  } catch (e) {
    yield put(apiError(e));
  }
}

function* removeTodoSaga({payload}: PayloadAction<ITodo>) {
  try {
    yield call(apiDeleteTodo, payload.id!);
    yield put(removeTodoSuccess(payload));
    yield put(showSuccessSnackbar({message: `Todo '${payload.title}' removed` }));
  } catch (e) {
    yield put(apiError(e));
  }
}
