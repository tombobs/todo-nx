import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { IChangePassword, ILogin, IUser } from '@todo-nx/interfaces';
import { AxiosError } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { DateTime } from 'luxon';

export interface IProfileState {
  loading: boolean;
  error?: AxiosError;
  updating: boolean;
  profile?: IUser;
  changingPassword?: boolean;
  passwordChanged?: boolean;
  loggingOut: boolean;
  loadingLoginHistory: boolean;
  loginHistory?: ILogin[];
}

export const profileStoreKey = 'profile';

const initialState: IProfileState = {
  loading: false,
  updating: false,
  changingPassword: false,
  loggingOut: false,
  loadingLoginHistory: false
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
    },
    updateProfile: (state: Draft<IProfileState>, {payload}: PayloadAction<Partial<IUser>>) => {
      state.updating = true;
    },
    updateProfileSuccess: (state: Draft<IProfileState>) => {
      state.updating = false;
    },
    updateProfileError: (state: Draft<IProfileState>, {payload}: PayloadAction<any>) => {
      state.error = payload;
      state.updating = false;
    },
    updateProfilePhoto: (state: Draft<IProfileState>, {payload}: PayloadAction<File>) => {
      state.updating = true;
    },
    updateProfilePhotoSuccess: (state: Draft<IProfileState>, {payload}: PayloadAction<Partial<IUser>>) => {
      state.updating = false;
      state.profile!.profilePhotoKey = payload.profilePhotoKey;
    },
    updateProfilePhotoError: (state: Draft<IProfileState>, {payload}: PayloadAction<any>) => {
      state.error = payload;
      state.updating = false;
    },

    changePassword: (state: Draft<IProfileState>, {payload}: PayloadAction<IChangePassword>) => {
      state.changingPassword = true;
    },
    changePasswordSuccess: (state: Draft<IProfileState>) => {
      state.changingPassword = false;
      state.passwordChanged = true;
    },
    changePasswordError: (state: Draft<IProfileState>, {payload}: PayloadAction<any>) => {
      state.error = payload;
      state.changingPassword = false;
    },

    loadLoginHistory: (state: Draft<IProfileState>) => {
      state.loadingLoginHistory = true;
    },
    loadLoginHistorySuccess: (state: Draft<IProfileState>, {payload}: PayloadAction<ILogin[]>) => {
      state.loginHistory = payload;
      state.loadingLoginHistory = false;
    },
    loadLoginHistoryError: (state: Draft<IProfileState>, {payload}: PayloadAction<any>) => {
      state.error = payload;
      state.loadingLoginHistory = false;
    },
    
    resetError: (state: Draft<IProfileState>) => {
      state.error = undefined;
      state.passwordChanged = false;
    },
    logout: (state: Draft<IProfileState>, {payload}: PayloadAction<{navigate: NavigateFunction}>) => {
      state.loggingOut = true;
    }
  }
});

export const { loadLoginHistorySuccess, loadLoginHistoryError, loadLoginHistory, logout, resetError, changePassword, changePasswordSuccess, changePasswordError, updateProfilePhotoSuccess, updateProfilePhotoError, updateProfilePhoto, loadProfileSuccess, loadProfile, loadProfileError, updateProfileSuccess, updateProfileError, updateProfile } = profileStore.actions;

type State = {[profileStoreKey]: IProfileState};

export const profileSelector = (state: State) => state[profileStoreKey];


