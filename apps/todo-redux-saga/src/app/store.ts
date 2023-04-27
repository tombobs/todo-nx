import {configureStore} from '@reduxjs/toolkit';
import todoStore, {ITodoState, todoStoreKey} from './todo/todo-store';
import createSagaMiddleware from 'redux-saga';
import {todoSaga} from './todo/todo.saga';
import {
  confirmationDialogStore,
  confirmationDialogStoreKey,
  IConfirmationDialogState
} from './shared/confirmation-dialog/confirmation-dialog.store';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    [todoStoreKey]: todoStore.reducer,
    [confirmationDialogStoreKey]: confirmationDialogStore.reducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(todoSaga)

export type State = {
  [todoStoreKey]: ITodoState,
  [confirmationDialogStoreKey]: IConfirmationDialogState
}



