import {all, takeEvery} from 'redux-saga/effects';
import {todoSaga} from '../todo/todo.saga';
import {listSaga} from '../list/list.saga';
import {PayloadAction} from '@reduxjs/toolkit';
import {apiError} from '../todo/todo-store';


export function* rootSaga () {
  yield all([
    todoSaga(),
    listSaga(),
    takeEvery(apiError, apiErrorSaga)
  ]);
}

function* apiErrorSaga(action: PayloadAction<any>) {
  console.log(action.payload);
  alert('error');
}
