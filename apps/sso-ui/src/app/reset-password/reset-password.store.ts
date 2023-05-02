import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ICheckTokenRequest, IRequestPasswordResetRequest, IResetPasswordRequest } from '@todo-nx/interfaces';
import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface IResetPasswordState {
  resettingPassword: boolean;
  resetPasswordSuccess?: boolean;

  requestingReset: boolean;
  resetRequested?: boolean;

  checkingResetToken: boolean;
  resetTokenValid?: boolean;

  requestError?: any;
  error?: any;
}

export const resetPasswordStoreKey = 'resetPassword';

const initialState: IResetPasswordState = {
  resettingPassword: false,
  requestingReset: false,
  checkingResetToken: false,
};

export const resetPasswordStore = createSlice({
  name: resetPasswordStoreKey,
  initialState,
  reducers: {
    requestReset: (state: Draft<IResetPasswordState>, { payload }: PayloadAction<{ request: IRequestPasswordResetRequest, navigate: NavigateFunction }>) => {
      state.requestingReset = true;
    },
    requestResetSuccess: (state: Draft<IResetPasswordState>, { payload }: PayloadAction<{ navigate: NavigateFunction }>) => {
      state.requestingReset = false;
      state.resetRequested = true;
    },
    requestResetError: (state: Draft<IResetPasswordState>, { payload }: PayloadAction<AxiosError>) => {
      state.requestingReset = false;
      state.error = payload;
    },

    checkResetToken: (state: Draft<IResetPasswordState>, { payload }: PayloadAction<ICheckTokenRequest>) => {
      state.checkingResetToken = true;
    },
    checkResetTokenSuccess: (state: Draft<IResetPasswordState>) => {
      state.checkingResetToken = false;
      state.resetTokenValid = true;
    },
    checkResetTokenError: (state: Draft<IResetPasswordState>, { payload }: PayloadAction<AxiosError>) => {
      state.checkingResetToken = false;
      state.resetTokenValid = false;
    },
    resetPassword: (state: Draft<IResetPasswordState>, { payload }: PayloadAction<IResetPasswordRequest>) => {
      state.resettingPassword = true;
    },
    resetPasswordSuccess: (state: Draft<IResetPasswordState>) => {
      state.resettingPassword = false;
      state.resetPasswordSuccess = true;
    },
    resetPasswordError: (state: Draft<IResetPasswordState>, { payload }: PayloadAction<any>) => {
      state.resettingPassword = false;
    },
  }
});

export const {
  requestReset,
  requestResetError,
  requestResetSuccess,
  checkResetToken,
  checkResetTokenError,
  checkResetTokenSuccess,
  resetPassword,
  resetPasswordError,
  resetPasswordSuccess
} = resetPasswordStore.actions;

type State = { [resetPasswordStoreKey]: IResetPasswordState };

export const resetPasswordSelector = (state: State) => state[resetPasswordStoreKey];
export const resetPasswordErrorSelector = (state: State) => resetPasswordSelector(state).error;



