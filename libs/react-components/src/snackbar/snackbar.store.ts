import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { AlertColor } from '@mui/material/Alert/Alert';
import { ISnackbarOpen } from './snackbar.interface';

export interface ISnackbarState {
  message?: string;
  severity?: AlertColor;
  isOpen: boolean;
  fadeOutSeconds: number;
}

export const snackbarStoreKey = 'snackbar';

const initialState: ISnackbarState = {
  isOpen: false,
  fadeOutSeconds: 5
};

export const snackbarStore = createSlice({
  name: snackbarStoreKey,
  initialState,
  reducers: {
    showSnackbar: (state: Draft<ISnackbarState>, action: PayloadAction<ISnackbarOpen>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.isOpen = true;
    },
    showSuccessSnackbar: (state: Draft<ISnackbarState>, action: PayloadAction<ISnackbarOpen>) => {
      state.message = action.payload.message;
      state.isOpen = true;
      state.severity = 'success';
    },
    showErrorSnackbar: (state: Draft<ISnackbarState>, action: PayloadAction<ISnackbarOpen>) => {
      state.message = action.payload.message;
      state.severity = 'error';
      state.isOpen = true;
    },
    closeSnackbar: (state: Draft<ISnackbarState>) => {
      state.isOpen = false;
    }
  }
});

export const { showSnackbar, closeSnackbar, showErrorSnackbar, showSuccessSnackbar } = snackbarStore.actions;

export const snackbarSelector = (state: {[snackbarStoreKey]: ISnackbarState}) => state[snackbarStoreKey];
