import { call, put, takeEvery } from 'redux-saga/effects';
import { loadProfile, loadProfileError, loadProfileSuccess } from './profile.store';
import { IUser } from '@todo-nx/interfaces';
import { apiGetProfile } from '../shared/service';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { showErrorSnackbar } from '@todo-nx/react-components';

export function* profileSagas(): Generator {
  yield takeEvery(loadProfile, loadProfileSaga);
  yield takeEvery(loadProfileError, loadProfileErrorSaga);
  yield takeEvery(loadProfileSuccess, loadProfileSuccessSaga);
}

function* loadProfileSaga() {
  try {
    const profile: IUser = yield call(apiGetProfile);
    yield put(loadProfileSuccess(profile));
  } catch (e) {
    yield put(loadProfileError(e));
  }
}

function* loadProfileErrorSaga({payload}: PayloadAction<AxiosError>) {
  yield put(showErrorSnackbar({message: 'Sorry - Something went wrong'}))
}

function* loadProfileSuccessSaga({payload}: PayloadAction<IUser>) {

}
