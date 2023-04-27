import {configureStore} from '@reduxjs/toolkit';
import todoStore, {ITodoState, todoStoreKey} from '../todo/todo-store';
import createSagaMiddleware from 'redux-saga';
import {
  confirmationDialogStore,
  confirmationDialogStoreKey,
  IConfirmationDialogState
} from './confirmation-dialog/confirmation-dialog.store';
import {rootSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    [todoStoreKey]: todoStore.reducer,
    [confirmationDialogStoreKey]: confirmationDialogStore.reducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export type State = {
  [todoStoreKey]: ITodoState,
  [confirmationDialogStoreKey]: IConfirmationDialogState
}



