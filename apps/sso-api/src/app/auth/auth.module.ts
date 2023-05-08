import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local/local.strategy';
import { jwtModuleOptions, JwtStrategy } from '@todo-nx/authentication-api';
import { ResetPasswordToken } from './entities/reset-password-token.entity';
import { UserModule } from '../user/user.module';
import { UtilsModule } from '@todo-nx/utils-nestjs';

@Module({
  imports: [
    TypeOrmModule.forFeature([ResetPasswordToken]),
    JwtModule.register(jwtModuleOptions),
    UtilsModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
