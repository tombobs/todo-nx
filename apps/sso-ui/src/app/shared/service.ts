import axios from 'axios';
import { environment } from '../../environments/environment';
import {
  ICheckTokenRequest,
  ILoginRequest,
  ILoginResponse,
  IRegisterRequest,
  IRequestPasswordResetRequest, IResetPasswordRequest,
  IVerifyRequest,
  IVerifyResponse
} from '@todo-nx/interfaces';

export async function apiVerify({ email, code }: IVerifyRequest): Promise<IVerifyResponse> {
  return apiPost('/auth/verify', { email, code });
}

export async function apiRegister({ email, password }: IRegisterRequest): Promise<ILoginResponse> {
  return apiPost('/auth/register', { email, password });
}

export async function apiLogin({ email, password }: ILoginRequest): Promise<ILoginResponse> {
  return apiPost('/auth/login', { email, password });
}

export async function apiRequestPasswordReset({ email }: IRequestPasswordResetRequest): Promise<void> {
  return apiPost('/auth/request-password-reset', { email });
}

export async function apiCheckResetToken({ token, userId }: ICheckTokenRequest): Promise<void> {
  return apiPost('/auth/check-password-reset-token', { token, userId });
}

export async function apiResetPassword({ token, userId, password }: IResetPasswordRequest): Promise<void> {
  return apiPost('/auth/reset-password', { token, userId, password });
}

async function apiPost<T>(url: string, data: any): Promise<T> {
  const res = await axios.post<T>(environment.ssoApiUrl + url, data);
  return res.data;
}
