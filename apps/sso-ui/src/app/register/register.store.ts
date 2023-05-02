import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { ILoginResponse, IRegisterRequest } from '@todo-nx/interfaces';

export interface IRegisterState {
  formValue?: IRegisterRequest;
  success: boolean;
  registering: boolean;
  error?: any;
  registerResponse?: ILoginResponse;
}

export const registerStoreKey = 'register';

const initialState: IRegisterState = {
  registering: false,
  success: false
};

export const registerStore = createSlice({
  name: registerStoreKey,
  initialState,
  reducers: {
    registerAccount: (state: Draft<IRegisterState>, {payload}: PayloadAction<IRegisterRequest>) => {
      state.formValue = payload;
      state.registering = true;
    },
    registerAccountSuccess: (state: Draft<IRegisterState>, {payload}: PayloadAction<ILoginResponse>) => {
      state.registering = false;
      state.success = true;
      state.registerResponse = payload;
    },
    registerAccountError: (state: Draft<IRegisterState>, {payload}: PayloadAction<any>) => {
      state.error = payload;
    }
  }
});

export const { registerAccount, registerAccountSuccess, registerAccountError } = registerStore.actions;

type State = {[registerStoreKey]: IRegisterState};

export const registerSelector = (state: State) => state[registerStoreKey];
export const registerFormValueSelector = (state: State) => registerSelector(state).formValue;
export const registerErrorSelector = (state: State) => registerSelector(state).error;


