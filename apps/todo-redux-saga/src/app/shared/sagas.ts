import { all, put, takeEvery } from 'redux-saga/effects';
import { todoSaga } from '../todo/todo.saga';
import { listSaga } from '../list/list.saga';
import { PayloadAction } from '@reduxjs/toolkit';
import { apiError } from '../todo/todo-store';
import { AxiosError } from 'axios';
import { showErrorSnackbar } from '@todo-nx/react-components';
import { environment } from '../../environments/environment';


export function* rootSaga() {
  yield all([
    todoSaga(),
    listSaga(),
    takeEvery(apiError, apiErrorSaga)
  ]);
}

function* apiErrorSaga(action: PayloadAction<AxiosError>) {
  debugger;
  switch (action.payload.response?.status) {
    case 401:
      return location.href = environment.ssoApiUrl;
    default:
      yield put(showErrorSnackbar({message: 'Sorry - something went wrong'}));
  }
}
