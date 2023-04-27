import { Column, Entity } from 'typeorm';
import { genSalt, hash } from 'bcrypt';
import { AbstractEntity } from './abstract.entity';
import {IUser} from '@todo-nx/interfaces';

const saltRounds = 10;

@Entity('user')
export class User extends AbstractEntity implements IUser {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

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
