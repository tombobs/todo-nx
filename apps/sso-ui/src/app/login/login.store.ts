import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ILoginResponse, ILoginRequest } from '@todo-nx/interfaces';
import { AxiosError } from 'axios';

export interface ILoginState {
  formValue?: ILoginRequest;
  success: boolean;
  loggingIn: boolean;
  error?: AxiosError;
  loginResponse?: ILoginResponse;
}

export const loginStoreKey = 'login';

const initialState: ILoginState = {
  loggingIn: false,
  success: false
};

export const loginStore = createSlice({
  name: loginStoreKey,
  initialState,
  reducers: {
    login: (state: Draft<ILoginState>, {payload}: PayloadAction<ILoginRequest>) => {
      state.formValue = payload;
      state.loggingIn = true;
    },
    loginSuccess: (state: Draft<ILoginState>, {payload}: PayloadAction<ILoginResponse>) => {
      state.loggingIn = false;
      state.success = true;
      state.loginResponse = payload;
    },
    loginError: (state: Draft<ILoginState>, {payload}: PayloadAction<AxiosError>) => {
      state.error = payload;
      state.loggingIn = false;
    }
  }
});

export const { login, loginError, loginSuccess } = loginStore.actions;

type State = {[loginStoreKey]: ILoginState};

export const loginSelector = (state: State) => state[loginStoreKey];
export const loginFormValueSelector = (state: State) => loginSelector(state).formValue;
export const loginErrorSelector = (state: State) => loginSelector(state).error;


