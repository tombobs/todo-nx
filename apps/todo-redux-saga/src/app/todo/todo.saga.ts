import {PayloadAction} from '@reduxjs/toolkit';
import {call, put, select, takeEvery} from 'redux-saga/effects';
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
import {apiAddTodo, apiDeleteTodo, apiUpdateTodo,} from './todo.service';
import {IList, ITodo} from '@todo-nx/interfaces';

export function* todoSaga(): Generator {
  yield takeEvery(addTodo, addTodoSaga);
  yield takeEvery(updateTodo, updateTodoSaga)
  yield takeEvery(removeTodo, removeTodoSaga);
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
