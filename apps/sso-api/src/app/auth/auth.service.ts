import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  ICheckTokenRequest,
  ILoginRequest,
  ILoginResponse,
  IRequestPasswordResetRequest,
  IResetPasswordRequest,
  IResetPasswordToken,
  IUser
} from '@todo-nx/interfaces';
import { AuthEmailService } from './auth-email.service';
import { ResetPasswordToken } from './entities/reset-password-token.entity';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private usersRepository: Repository<IUser>,
              @InjectRepository(ResetPasswordToken) private resetPasswordTokenRepository: Repository<IResetPasswordToken>,
              private authEmailService: AuthEmailService,
              private jwtService: JwtService) {
  }

  async save(user: IUser): Promise<IUser> {
    return this.usersRepository.save(user);
  }

  async findOne(email: string): Promise<IUser> {
    const user = await this.usersRepository.findOne({ where: { email } });
    return this.userNoPassword(user);
  }

  async validate({ email, password }: ILoginRequest): Promise<IUser> {
    const user = await this.usersRepository.findOne({ where: { email } });
    const isValid = user && await compare(password, user.password);
    if (!isValid) {
      throw new UnauthorizedException();
    }
    return this.userNoPassword(user);
  }

  async exists(user: IUser): Promise<boolean> {
    return !!(await this.usersRepository.findOne({ where: { email: user.email } }));
  }

  async login(formValue: ILoginRequest): Promise<ILoginResponse> {
    const user = await this.validate(formValue);
    const accessToken = this.jwtService.sign({ user });
    return { accessToken };
  }

  async register({ email, password }: IUser, ipAddress: string): Promise<ILoginResponse> {
    if (await this.findOne(email)) {
      throw new BadRequestException('Account already exists');
    }
    const user: IUser = {
      email,
      name: email,
      password: await User.hashPassword(password),
      code: User.getCode()
    };
    await this.save(user);
    return this.login({ email: user.email, password: user.password });
  }

  async verifyAccount(email: string, code: string): Promise<{ verified: boolean }> {
    const verifiedUser = await this.usersRepository.findOne({ where: { email, code } });
    if (verifiedUser) {
      verifiedUser.accountVerified = true;
      await this.usersRepository.save(verifiedUser);
    }
    return { verified: !!verifiedUser };
  }

  async requestPasswordReset({ email }: IRequestPasswordResetRequest): Promise<boolean> {
    const user = await this.findOne(email);
    if (!user) {
      throw new BadRequestException();
    }
    const token = await this.resetPasswordTokenRepository.save(new ResetPasswordToken(user));
    return this.authEmailService.sendPasswordResetEmail(user, token.id);
  }

  async checkPasswordResetToken({ token, userId }: ICheckTokenRequest): Promise<boolean> {
    return this.resetPasswordTokenRepository.exist({ where: { id: token, user: { id: userId } } });
  }

  async resetPassword({ password, token, userId }: IResetPasswordRequest) {
    const validToken = await this.resetPasswordTokenRepository.findOne({
      where: {
        id: token,
        user: { id: userId },
        valid: true
      }
    });
    if (!validToken) {
      throw new BadRequestException();
    }

    const hashedPassword = await User.hashPassword(password);
    await Promise.all([
      this.usersRepository.update({ id: userId }, { password: hashedPassword }),
      this.resetPasswordTokenRepository.update({ id: token }, { valid: false })
    ]);
  }

  private userNoPassword(user: IUser): IUser {
    if (user) {
      const { password, ...userNoPassword } = user;
      return userNoPassword;
    }
    return user;
  }
}

