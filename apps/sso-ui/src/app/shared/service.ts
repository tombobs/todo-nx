import { UiHttpUtils } from '@todo-nx/utils';
import {
  IChangePassword,
  ICheckTokenRequest,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRequestPasswordResetRequest, IResetPasswordRequest, IUser,
  IVerifyRequest,
  IVerifyResponse
} from '@todo-nx/interfaces';
import { environment } from '../../environments/environment';
import { CancelToken, CancelTokenSource } from 'axios';

const http = new UiHttpUtils(environment);

export async function apiVerify({ email, code }: IVerifyRequest): Promise<IVerifyResponse> {
  return http.ssoPost('auth/verify', { email, code });
}

export async function apiRegister({ email, password }: IRegisterRequest): Promise<ILoginResponse> {
  return http.ssoPost('auth/register', { email, password });
}

export async function apiLogin({ email, password }: ILoginRequest): Promise<ILoginResponse> {
  return http.ssoPost('auth/login', { email, password });
}

export async function apiRequestPasswordReset({ email }: IRequestPasswordResetRequest): Promise<void> {
  return http.ssoPost('auth/request-password-reset', { email });
}

export async function apiCheckResetToken({ token, userId }: ICheckTokenRequest): Promise<void> {
  return http.ssoPost('auth/check-password-reset-token', { token, userId });
}

export async function apiResetPassword({ token, userId, password }: IResetPasswordRequest): Promise<void> {
  return http.ssoPost('auth/reset-password', { token, userId, password });
}

export async function apiGetProfile(): Promise<IUser> {
  return http.ssoGet('profile');
}

export async function apiUpdateProfile(profile: Partial<IUser>): Promise<void> {
  return http.ssoPut('profile', profile);
}

export async function apiUpdateProfilePhoto(photo: File): Promise<Partial<IUser>> {
  const formData = new FormData();
  formData.append('photo', photo);
  return http.ssoPut('profile/photo', formData);
}

export async function apiChangePassword(request: IChangePassword): Promise<void> {
  return http.ssoPut('profile/password', request);
}

export async function apiGetLoginHistory(): Promise<void> {
  return http.ssoGet('profile/login-history');
}
