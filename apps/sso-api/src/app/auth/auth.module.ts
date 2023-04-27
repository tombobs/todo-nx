import {Module} from "@nestjs/common";
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {JwtModule} from '@nestjs/jwt';
import {LocalStrategy} from './strategies/local/local.strategy';
import {jwtModuleOptions, JwtStrategy} from '@todo-nx/authentication-api';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register(jwtModuleOptions)
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy]
})
export class AuthModule {
}
