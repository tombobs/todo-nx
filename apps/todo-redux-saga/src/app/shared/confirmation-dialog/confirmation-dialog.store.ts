import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {IConfirmationDialogOpen} from './confirmation-dialog.interface';
import {State} from '../../store';

export interface IConfirmationDialogState {
  message?: string;
  onSubmit?: () => void;
  isOpen: boolean;
}

export const confirmationDialogStoreKey = 'confirmationDialog';

const initialState: IConfirmationDialogState = {
  isOpen: false
};

export const confirmationDialogStore = createSlice({
  name: confirmationDialogStoreKey,
  initialState,
  reducers: {
    openConfirmationDialog: (state: Draft<IConfirmationDialogState>, action: PayloadAction<IConfirmationDialogOpen>) => {
      state.message = action.payload.message;
      state.onSubmit = action.payload.onSubmit;
      state.isOpen = true;
    },
    closeConfirmationDialog: (state: Draft<IConfirmationDialogState>) => {
      state.isOpen = false;
    }
  }
});

export const {openConfirmationDialog, closeConfirmationDialog} = confirmationDialogStore.actions;

export const confirmationDialogSelector = (state: State) => state[confirmationDialogStoreKey];
