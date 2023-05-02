import { configureStore } from '@reduxjs/toolkit';
import {
  confirmationDialogStore,
  confirmationDialogStoreKey,
  IConfirmationDialogState
} from '@todo-nx/react-components';
import todoStore, { ITodoState, todoStoreKey } from '../todo/todo-store';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
import { rootSaga } from './sagas';

export default configureStore({
  reducer: {
    [todoStoreKey]: todoStore.reducer,
    [confirmationDialogStoreKey]: confirmationDialogStore.reducer
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type State = {
  [todoStoreKey]: ITodoState,
  [confirmationDialogStoreKey]: IConfirmationDialogState
}



