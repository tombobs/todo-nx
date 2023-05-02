import { call, put, takeEvery } from 'redux-saga/effects';
import {
  checkResetToken,
  checkResetTokenError,
  checkResetTokenSuccess,
  requestReset,
  requestResetError,
  requestResetSuccess,
  resetPassword,
  resetPasswordError,
  resetPasswordSuccess
} from './reset-password.store';
import { ICheckTokenRequest, IRequestPasswordResetRequest, IResetPasswordRequest } from '@todo-nx/interfaces';
import { apiCheckResetToken, apiRequestPasswordReset, apiResetPassword } from '../shared/service';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { closeSnackbar, showErrorSnackbar, showSuccessSnackbar } from '@todo-nx/react-components';
import { NavigateFunction } from 'react-router-dom';

export function* resetPasswordSagas(): Generator {
  yield takeEvery(requestReset, requestPasswordResetSaga);
  yield takeEvery(requestResetSuccess, requestPasswordResetSuccessSaga);
  yield takeEvery(requestResetError, requestPasswordResetErrorSaga);

  yield takeEvery(checkResetToken, checkResetTokenSaga);

  yield takeEvery(resetPassword, resetPasswordSaga);
  yield takeEvery(resetPasswordSuccess, resetPasswordSuccessSaga);
  yield takeEvery(resetPasswordError, resetPasswordErrorSaga);
}

function* requestPasswordResetSaga({ payload }: PayloadAction<{ request: IRequestPasswordResetRequest, navigate: NavigateFunction }>) {
  try {
    yield put(closeSnackbar());
    yield call(apiRequestPasswordReset, payload.request);
    yield put(requestResetSuccess(payload));
  } catch (e) {
    yield put(requestResetError(e as AxiosError));
  }
}

function* checkResetTokenSaga({ payload }: PayloadAction<ICheckTokenRequest>) {
  try {
    yield put(closeSnackbar());
    yield call(apiCheckResetToken, payload);
    yield put(checkResetTokenSuccess());
  } catch (e) {
    yield put(checkResetTokenError(e as AxiosError));
  }
}

function* resetPasswordSaga({ payload }: PayloadAction<IResetPasswordRequest>) {
  try {
    yield put(closeSnackbar());
    yield call(apiResetPassword, payload);
    yield put(resetPasswordSuccess());
  } catch (e) {
    yield put(resetPasswordError(e));
  }
}

function* requestPasswordResetSuccessSaga({ payload }: PayloadAction<{ navigate: NavigateFunction }>) {
  yield put(showSuccessSnackbar({ message: 'Password reset email sent' }));
}

function* requestPasswordResetErrorSaga({ payload }: PayloadAction<AxiosError>) {
  yield put(showErrorSnackbar({ message: 'Could not send reset email - please try again later' }));
}

function* resetPasswordSuccessSaga() {
  yield put(showSuccessSnackbar({ message: 'Password has been set' }));
}

function* resetPasswordErrorSaga({ payload }: PayloadAction<AxiosError>) {
  yield put(showErrorSnackbar({ message: 'Sorry something went wrong - please try again' }));
}
