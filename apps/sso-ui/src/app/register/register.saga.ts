import { call, put, select, takeEvery } from 'redux-saga/effects';
import { registerAccount, registerAccountError, registerFormValueSelector, registerAccountSuccess } from './register.store';
import { ILoginResponse, IRegisterRequest } from '@todo-nx/interfaces';
import { apiRegister } from '../shared/service';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { closeSnackbar, showErrorSnackbar } from '@todo-nx/react-components';
import { environment } from '../../environments/environment';

export function* registerSagas(): Generator {
  yield takeEvery(registerAccount, registerSaga);
  yield takeEvery(registerAccountError, registerErrorSaga);
  yield takeEvery(registerAccountSuccess, registerSuccessSaga);
}

function* registerSaga() {
  try {
    yield put(closeSnackbar());
    const registerRequest: IRegisterRequest = yield select(registerFormValueSelector);
    const res: ILoginResponse = yield call(apiRegister, registerRequest);
    yield put(registerAccountSuccess(res));
  } catch (e) {
    yield put(registerAccountError(e));
  }
}

function* registerErrorSaga({payload}: PayloadAction<AxiosError>) {
  let message = 'sorry - something went wrong - please try again';
  switch (payload.response?.status) {
    case 400:
      message = 'You already have an account - please login instead'
  }
  yield put(showErrorSnackbar({message}));
}

function* registerSuccessSaga({payload}: PayloadAction<ILoginResponse>) {
  // redirect to app
  location.href = `${environment.appUrl}?accessToken=${payload.accessToken}`;
}
