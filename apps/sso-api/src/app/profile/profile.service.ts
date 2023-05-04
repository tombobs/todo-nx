import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { IChangePassword, ILogin, IUser } from '@todo-nx/interfaces';
import { uploadProfileImage } from '@todo-nx/s3-api';
import { filetypename } from 'magic-bytes.js';
import * as uuid from 'uuid';
import { compare } from 'bcrypt';
import { LoginEntity } from '../auth/entities/login.entity';
import { DateTime } from 'luxon';

@Injectable()
export class ProfileService {
  constructor(@InjectRepository(User) private usersRepository: Repository<IUser>,
              @InjectRepository(LoginEntity) private loginHistoryRepository: Repository<ILogin>) {
  }

  async getProfile({id}: IUser): Promise<IUser> {
    return this.usersRepository.findOne({where: {id}});
  }

  async updateProfile({id}: IUser, profile: IUser) {
    return this.usersRepository.update({id}, profile);
  }

  async updateProfilePhoto({id}: IUser, photo: Buffer) {
    const type = filetypename(photo as any)
    const profilePhotoKey = `${id}/${uuid.v4()}.${type[0]}`;
    try {
      await uploadProfileImage(profilePhotoKey, photo);
    } catch (e) {
      console.error(e)
      throw new InternalServerErrorException();
    }

    await this.usersRepository.update({id}, {profilePhotoKey});
    return {profilePhotoKey, id} as IUser;
  }

  async changePassword({id}: IUser, {oldPassword, newPassword}: IChangePassword) {
    const foundUser = await this.usersRepository.findOne({ where: { id } });
    const isValid = foundUser && await compare(oldPassword, foundUser.password);
    if (!isValid) {
      throw new BadRequestException();
    }
    await this.usersRepository.update({id}, {password: await User.hashPassword(newPassword)});
  }

  async getLoginHistory({id}: IUser) {
    const history = await this.loginHistoryRepository.find({where: {user: {id}}});
    return history.map(h => ({...h, date: DateTime.fromJSDate(h.createdAt).toISODate(), time: DateTime.fromJSDate(h.createdAt).toISOTime()}))
  }
}
