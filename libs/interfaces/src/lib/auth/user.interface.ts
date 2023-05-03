export interface IUser {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  name?: string;
  email: string;
  password?: string;
  code?: string;
  accountVerified?: boolean;
  profilePhotoUrl?: string;
}
