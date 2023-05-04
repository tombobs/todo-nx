import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Headers,
  InternalServerErrorException,
  Ip,
  Post,
  UseGuards
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './strategies/local/local.guard';
import {
  ICheckTokenRequest,
  ILoginRequest,
  IRequestPasswordResetRequest, IResetPasswordRequest,
  IUser,
  IVerifyRequest
} from '@todo-nx/interfaces';
import { JwtAuthGuard, UserFromToken } from '@todo-nx/authentication-api';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() body: ILoginRequest,
              @Headers('x-real-ip') ipAddress: string) {
    return this.authService.login(body, ipAddress);
  }


  @Post('register')
  async register(@Body() user: IUser, @Headers('x-real-ip') ipAddress: string) {
    return this.authService.register(user, ipAddress);
  }

  @Post('verify')
  async verify(@Body() { code, email }: IVerifyRequest) {
    if (!code || !email) {
      throw new BadRequestException();
    }
    return this.authService.verifyAccount(email, code);
  }

  @Post('request-password-reset')
  async requestPasswordReset(@Body() request: IRequestPasswordResetRequest) {
    const success = await this.authService.requestPasswordReset(request);
    if (!success) {
      throw new InternalServerErrorException();
    }
  }

  @Post('check-password-reset-token')
  async checkPasswordResetToken(@Body() { userId, token }: ICheckTokenRequest) {
    if (!userId || !token) {
      throw new BadRequestException();
    }
    const valid = await this.authService.checkPasswordResetToken({ userId, token });
    if (!valid) {
      throw new BadRequestException();
    }
  }

  @Post('reset-password')
  async resetPassword(@Body() request: IResetPasswordRequest) {
    await this.authService.resetPassword(request);
  }
}
