import {Injectable, UnauthorizedException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {User} from './entities/user.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {compare} from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {IUser} from '@todo-nx/interfaces';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private usersRepository: Repository<IUser>,
              private jwtService: JwtService) {
  }

  async save(user: IUser): Promise<IUser> {
    return this.usersRepository.save(user);
  }

  async findOne(username: string): Promise<IUser> {
    const user = await this.usersRepository.findOne({where: {email: username}});
    return this.userNoPassword(user);
  }

  async validate(username: string, plainTextPassword: string): Promise<IUser> {
    const user = await this.usersRepository.findOne({where: {email: username}});
    const isValid = user && await compare(plainTextPassword, user.password);
    if (!isValid) {
      throw new UnauthorizedException();
    }
    return this.userNoPassword(user);
  }

  async exists(user: IUser): Promise<boolean> {
    return !!(await this.usersRepository.findOne({where: {email: user.email}}));
  }

  async login(userNoId: IUser, ipAddress: string, skipLog = false): Promise<{ accessToken: string }> {
    const user = await this.findOne(userNoId.email);
    const accessToken = this.jwtService.sign({
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    });
    // const refreshToken = await this.getRefreshToken(this.userNoPassword(user));

    if (!skipLog) {
      // await this.loginHistoryRepository.insert(new LoginHistory(userNoPassword, ipAddress));
    }
    return { accessToken };
  }

  private userNoPassword(user: IUser): IUser {
    if (user) {
      const { password, ...userNoPassword } = user;
      return userNoPassword;
    }
    return user;
  }
}
