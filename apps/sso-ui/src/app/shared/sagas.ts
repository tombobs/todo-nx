import { all } from 'redux-saga/effects';
import { loginSagas } from '../login/login.saga';
import { registerSagas } from '../register/register.saga';
import { verifySagas } from '../verify/verify.saga';
import { resetPasswordSagas } from '../reset-password/reset-password.saga';
import { profileSagas } from '../profile/profile.saga';

export function* rootSaga(): Generator {
  yield all([
    loginSagas(),
    registerSagas(),
    verifySagas(),
    resetPasswordSagas(),
    profileSagas()
  ]);
}
