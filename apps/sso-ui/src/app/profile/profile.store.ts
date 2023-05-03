import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@todo-nx/interfaces';
import { AxiosError } from 'axios';

export interface IProfileState {
  loading: boolean;
  error?: AxiosError;
  profile?: IUser;
}

export const profileStoreKey = 'profile';

const initialState: IProfileState = {
  loading: false
};

export const profileStore = createSlice({
  name: profileStoreKey,
  initialState,
  reducers: {
    loadProfile: (state: Draft<IProfileState>) => {
      state.loading = true;
    },
    loadProfileSuccess: (state: Draft<IProfileState>, {payload}: PayloadAction<IUser>) => {
      state.profile = payload;
      state.loading = false;
    },
    loadProfileError: (state: Draft<IProfileState>, {payload}: PayloadAction<any>) => {
      state.error = payload;
      state.loading = false;
    }
  }
});

export const { loadProfileSuccess, loadProfile, loadProfileError } = profileStore.actions;

type State = {[profileStoreKey]: IProfileState};

export const profileSelector = (state: State) => state[profileStoreKey];


