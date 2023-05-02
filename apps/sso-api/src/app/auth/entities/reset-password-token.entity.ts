import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { IResetPasswordToken, IUser } from '@todo-nx/interfaces';

@Entity('reset_password_token')
export class ResetPasswordToken extends AbstractEntity implements IResetPasswordToken {

  constructor(user: IUser, ipAddress: string = '') {
    super();
    this.user = user;
    this.ipAddress = ipAddress;
  }

  @Column({default: true})
  valid: boolean;

  @Column({default: ''})
  ipAddress: string;

  @ManyToOne('User', 'resetPasswordTokens')
  user: IUser;
}
