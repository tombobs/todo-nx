import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local/local.strategy';
import { jwtModuleOptions, JwtStrategy } from '@todo-nx/authentication-api';
import { AuthEmailService } from './auth-email.service';
import { ResetPasswordToken } from './entities/reset-password-token.entity';
import { EmailModule, EmailService } from '@todo-nx/email';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResetPasswordToken]),
    JwtModule.register(jwtModuleOptions),
    EmailModule,
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, AuthEmailService, EmailService]
})
export class AuthModule {
}
