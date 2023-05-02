import { Column, Entity, OneToMany } from 'typeorm';
import { genSalt, hash } from 'bcrypt';
import { AbstractEntity } from './abstract.entity';
import { IUser } from '@todo-nx/interfaces';
import { ResetPasswordToken } from './reset-password-token.entity';

const saltRounds = 10;

@Entity('user')
export class User extends AbstractEntity implements IUser {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @Column({ default: false })
  accountVerified: boolean;

  @Column({ default: User.getCode() })
  code: string;

  @OneToMany('ResetPasswordToken', 'user')
  resetPasswordTokens: ResetPasswordToken[];

  static async hashPassword(plainTextPassword: string): Promise<string> {
    return hash(plainTextPassword, await genSalt(saltRounds));
  }

  static getCode(length: number = 6): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}
