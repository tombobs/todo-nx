import { IUser } from './user.interface';

export interface IJWT {
  exp: number;
  iat: number
  user: IUser;
}

