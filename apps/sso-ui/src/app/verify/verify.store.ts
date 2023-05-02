import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IVerifyRequest, IVerifyResponse } from '@todo-nx/interfaces';

export interface IVerifyState {
  formValue?: IVerifyRequest;
  success: boolean;
  verifying: boolean;
  error?: any;
  verifyResponse?: IVerifyResponse;
}

export const verifyStoreKey = 'verify';

const initialState: IVerifyState = {
  verifying: false,
  success: false
};

export const verifyStore = createSlice({
  name: verifyStoreKey,
  initialState,
  reducers: {
    verifyAccount: (state: Draft<IVerifyState>, {payload}: PayloadAction<IVerifyRequest>) => {
      state.formValue = payload;
      state.verifying = true;
    },
    verifyAccountSuccess: (state: Draft<IVerifyState>, {payload}: PayloadAction<IVerifyResponse>) => {
      state.verifying = false;
      state.success = true;
      state.verifyResponse = payload;
    },
    verifyAccountError: (state: Draft<IVerifyState>, {payload}: PayloadAction<any>) => {
      state.error = payload;
      state.verifying = false;
    }
  }
});

export const { verifyAccount, verifyAccountSuccess, verifyAccountError } = verifyStore.actions;

type State = {[verifyStoreKey]: IVerifyState};

export const verifySelector = (state: State) => state[verifyStoreKey];
export const verifyFormValueSelector = (state: State) => verifySelector(state).formValue;
export const verifyErrorSelector = (state: State) => verifySelector(state).error;


