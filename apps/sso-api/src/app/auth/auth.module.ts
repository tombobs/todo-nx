import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local/local.strategy';
import { jwtModuleOptions, JwtStrategy } from '@todo-nx/authentication-api';
import { EmailModule } from '../email/email.module';
import { AuthEmailService } from './auth-email.service';
import { ResetPasswordToken } from './entities/reset-password-token.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, ResetPasswordToken]),
    JwtModule.register(jwtModuleOptions),
    EmailModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthEmailService]
})
export class AuthModule {
}
