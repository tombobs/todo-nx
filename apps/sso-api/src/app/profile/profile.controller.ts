import { Body, Controller, Get, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard, UserFromToken } from '@todo-nx/authentication-api';
import { IChangePassword, IUser } from '@todo-nx/interfaces';
import { AuthService } from '../auth/auth.service';
import { ProfileService } from './profile.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('profile')
@UseGuards(JwtAuthGuard)
export class ProfileController {

  constructor(private profileService: ProfileService) {
  }

  @Get()
  async get(@UserFromToken() user: IUser) {
    return this.profileService.getProfile(user);
  }

  @Put()
  async update(@UserFromToken() user: IUser, @Body() profile: IUser) {
    return this.profileService.updateProfile(user, profile)
  }

  @Put('photo')
  @UseInterceptors(FileInterceptor('photo'))
  async updatePhoto(@UserFromToken() user: IUser, @UploadedFile() photo : { buffer: Buffer }) {
    return this.profileService.updateProfilePhoto(user, photo.buffer);
  }

  @Put('password')
  async updatePassword(@UserFromToken() user: IUser, @Body() request: IChangePassword) {
    return this.profileService.changePassword(user, request);
  }

  @Get('login-history')
  async getLoginHistory(@UserFromToken() user: IUser) {
    return this.profileService.getLoginHistory(user);
  }
}
