import { call, put, select, takeEvery } from 'redux-saga/effects';
import { login, loginError, loginFormValueSelector, loginSuccess } from './login.store';
import { ILoginRequest, ILoginResponse } from '@todo-nx/interfaces';
import { apiLogin } from '../shared/service';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { closeSnackbar, showErrorSnackbar } from '@todo-nx/react-components';
import { environment } from '../../environments/environment';

export function* loginSagas(): Generator {
  yield takeEvery(login, loginSaga);
  yield takeEvery(loginError, loginErrorSaga);
  yield takeEvery(loginSuccess, loginSuccessSaga);
}

function* loginSaga() {
  try {
    yield put(closeSnackbar());
    const loginRequest: ILoginRequest = yield select(loginFormValueSelector);
    const res: ILoginResponse = yield call(apiLogin, loginRequest);
    yield put(loginSuccess(res));
  } catch (e) {
    yield put(loginError(e as AxiosError));
  }
}

function* loginErrorSaga({ payload }: PayloadAction<AxiosError>) {
  let message = 'sorry - something went wrong - please try again';
  switch (payload.response?.status) {
    case 401:
      message = 'Username / password incorrect';
      break;
  }
  yield put(showErrorSnackbar({ message }));
}

function* loginSuccessSaga({ payload }: PayloadAction<ILoginResponse>) {
  localStorage.setItem(environment.accessTokenKey, payload.accessToken);
  // redirect to app
  location.href = `${environment.appUrl}?accessToken=${payload.accessToken}`;
}
