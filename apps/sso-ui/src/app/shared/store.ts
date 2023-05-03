import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './sagas';
import { snackbarStore, snackbarStoreKey } from '@todo-nx/react-components';
import { loginStore, loginStoreKey } from '../login/login.store';
import { registerStore, registerStoreKey } from '../register/register.store';
import { verifyStore, verifyStoreKey } from '../verify/verify.store';
import { resetPasswordStore, resetPasswordStoreKey } from '../reset-password/reset-password.store';
import { profileStore, profileStoreKey } from '../profile/profile.store';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    [snackbarStoreKey]: snackbarStore.reducer,
    [loginStoreKey]: loginStore.reducer,
    [registerStoreKey]: registerStore.reducer,
    [verifyStoreKey]: verifyStore.reducer,
    [resetPasswordStoreKey]: resetPasswordStore.reducer,
    [profileStoreKey]: profileStore.reducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

