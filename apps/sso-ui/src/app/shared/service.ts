import { HttpUtils } from '@todo-nx/utils';
import {
  ICheckTokenRequest,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRequestPasswordResetRequest, IResetPasswordRequest, IUser,
  IVerifyRequest,
  IVerifyResponse
} from '@todo-nx/interfaces';
import { environment } from '../../environments/environment';

const http = new HttpUtils(environment);

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
  return http.ssoGet('auth/profile');
}
