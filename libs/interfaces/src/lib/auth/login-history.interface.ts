import { IUser } from './user.interface';

export interface ILogin {
  user: IUser;
  ipAddress: string;
  id: string;
  createdAt: Date;
  date?: string;
  time?: string;
}
