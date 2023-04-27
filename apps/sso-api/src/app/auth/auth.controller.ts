import { BadRequestException, Body, Controller, Ip, Post, UseGuards, Request, Headers, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from './entities/user.entity';
import { LocalAuthGuard } from './strategies/local/local.guard';
import {IUser} from '@todo-nx/interfaces';
import {UserFromToken, JwtAuthGuard} from '@todo-nx/authentication-api';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Request() req,
              @Headers('x-real-ip') ipAddress: string) {
    return this.authService.login(req.body, ipAddress);
  }

  @Post('register')
  async register(@Body() user: IUser, @Ip() ipAddress: string) {
    if (await this.authService.findOne(user.email)) {
      throw new BadRequestException('Account already exists');
    }

    user.code = User.getCode();
    user.password = await User.hashPassword(user.password);

    const createdUser = await this.authService.save(user);
    return this.authService.login(createdUser, ipAddress);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async profile(@UserFromToken() user: IUser) {
    return this.authService.findOne(user.email);
  }
}
