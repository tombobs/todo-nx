import { IAbstractEntity, IUser } from '@todo-nx/interfaces';

export interface IResetPasswordToken extends IAbstractEntity {
  valid: boolean;
  ipAddress: string;
  user: IUser;
}

export interface IRequestPasswordResetRequest {
  email: string;
}

export interface IResetPasswordRequest {
  token: string;
  userId: string;
  password: string;
}

export interface ICheckTokenRequest {
  token: string;
  userId: string;
}
