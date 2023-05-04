import { Column, Entity, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { IResetPasswordToken, IUser } from '@todo-nx/interfaces';
import { ILogin } from '@todo-nx/interfaces';

@Entity('login_history')
export class LoginEntity extends AbstractEntity implements ILogin {

  constructor(user: IUser, ipAddress: string = '') {
    super();
    this.ipAddress = ipAddress;
  }

  @Column({default: ''})
  ipAddress: string;

  @ManyToOne('User', 'loginHistory')
  user: IUser;
}
