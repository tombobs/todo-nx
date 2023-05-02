import { call, put, select, takeEvery } from 'redux-saga/effects';
import { verifyAccount, verifyAccountError, verifyFormValueSelector, verifyAccountSuccess } from './verify.store';
import { ILoginResponse, IVerifyRequest, IVerifyResponse } from '@todo-nx/interfaces';
import { apiVerify } from '../shared/service';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { closeSnackbar, showErrorSnackbar } from '@todo-nx/react-components';

export function* verifySagas(): Generator {
  yield takeEvery(verifyAccount, verifySaga);
  yield takeEvery(verifyAccountError, verifyErrorSaga);
  yield takeEvery(verifyAccountSuccess, verifySuccessSaga);
}

function* verifySaga() {
  try {
    yield put(closeSnackbar());
    const verifyRequest: IVerifyRequest = yield select(verifyFormValueSelector);
    const res: IVerifyResponse = yield call(apiVerify, verifyRequest);
    if (res.verified) {
      yield put(verifyAccountSuccess(res));
    } else {
      yield put(verifyAccountError(res));
    }
  } catch (e) {
    yield put(verifyAccountError(e));
  }
}

function* verifyErrorSaga({payload}: PayloadAction<AxiosError | IVerifyResponse>) {
  let message = 'sorry - something went wrong - please try again';
  if ((payload as IVerifyResponse)?.verified === false) {
    message = 'Unable to verify your account - please check the details';
  }
  switch ((payload as AxiosError).response?.status) {
    case 400:
      message = 'Account not verified - please check the details'
  }
  yield put(showErrorSnackbar({message}));
}

function* verifySuccessSaga({}: PayloadAction<IVerifyResponse>) {
  // redirect to app
  // location.href = `${environment.appUrl}`;
}
