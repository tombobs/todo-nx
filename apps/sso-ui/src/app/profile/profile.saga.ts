import { call, fork, put, takeEvery } from 'redux-saga/effects';
import {
  changePassword,
  changePasswordError,
  changePasswordSuccess,
  loadLoginHistory,
  loadLoginHistoryError,
  loadLoginHistorySuccess,
  loadProfile,
  loadProfileError,
  loadProfileSuccess,
  logout,
  updateProfile,
  updateProfileError,
  updateProfilePhoto,
  updateProfilePhotoError,
  updateProfilePhotoSuccess,
  updateProfileSuccess
} from './profile.store';
import { IChangePassword, ILogin, IUser } from '@todo-nx/interfaces';
import {
  apiChangePassword,
  apiGetLoginHistory,
  apiGetProfile,
  apiUpdateProfile,
  apiUpdateProfilePhoto
} from '../shared/service';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { showErrorSnackbar, showSuccessSnackbar } from '@todo-nx/react-components';
import { environment } from '../../environments/environment';
import { NavigateFunction } from 'react-router-dom';

export function* profileSagas(): Generator {
  yield takeEvery(loadProfile, loadProfileSaga);
  yield takeEvery(loadProfileError, genericErrorSaga);

  yield takeEvery(updateProfile, updateProfileSaga);
  yield takeEvery(updateProfileError, genericErrorSaga);

  yield takeEvery(updateProfilePhoto, updateProfilePhotoSaga);
  yield takeEvery(updateProfilePhotoSuccess, updateProfilePhotoSuccessSaga);
  yield takeEvery(updateProfilePhotoError, genericErrorSaga);

  yield takeEvery(changePassword, changePasswordSaga);
  yield takeEvery(changePasswordSuccess, changePasswordSuccessSaga);
  yield takeEvery(changePasswordError, changePasswordErrorSaga);

  yield takeEvery(loadLoginHistory, loadLoginHistorySaga);

  yield takeEvery(logout, logoutSaga);
}

function* loadProfileSaga() {
  try {
    const profile: IUser = yield call(apiGetProfile);
    yield put(loadProfileSuccess(profile));
  } catch (e) {
    yield put(loadProfileError(e));
  }
}

function* updateProfileSaga({payload}: PayloadAction<Partial<IUser>>) {
  try {
    yield call(apiUpdateProfile, payload);
    yield put(updateProfileSuccess());
  } catch (e) {
    yield put(updateProfileError(e));
  }
}

function* updateProfilePhotoSaga({payload}: PayloadAction<File>) {
  try {
    const userWithUpdatedAvatarKey: Partial<IUser> = yield call(apiUpdateProfilePhoto, payload);
    yield put(updateProfilePhotoSuccess(userWithUpdatedAvatarKey));
  } catch (e) {
    yield put(updateProfilePhotoError(e));
  }
}

function* changePasswordSaga({payload}: PayloadAction<IChangePassword>) {
  try {
    yield call(apiChangePassword, payload);
    yield put(changePasswordSuccess());
  } catch (e) {
    yield put(changePasswordError(e));
  }
}

function* loadLoginHistorySaga() {
  try {
    const loginHistory: ILogin[] = yield call(apiGetLoginHistory);
    yield put(loadLoginHistorySuccess(loginHistory));
  } catch (e) {
    yield put(loadLoginHistoryError(e));
    yield put(showErrorSnackbar({message: 'Sorry - Something went wrong'}))
  }
}

function* logoutSaga({payload}: PayloadAction<{navigate: NavigateFunction}>) {
  localStorage.removeItem(environment.accessTokenKey);
  payload.navigate('/');
}

function* changePasswordErrorSaga({payload}: PayloadAction<AxiosError>) {
  let message = 'Sorry - Something went wrong'
  switch(payload.response?.status) {
    case 400:
      message = 'Old password is incorrect'
      break;
    default:

  }
  // yield put(showErrorSnackbar({message}));
}

function* changePasswordSuccessSaga() {
  yield put(showSuccessSnackbar({message: 'Password changed'}));
}

function* genericErrorSaga({payload}: PayloadAction<AxiosError>) {
  yield put(showErrorSnackbar({message: 'Sorry - Something went wrong'}))
}

function* updateProfilePhotoSuccessSaga({payload}: PayloadAction<Partial<IUser>>) {
  yield put(showSuccessSnackbar({message: 'Profile photo updated'}));
}
