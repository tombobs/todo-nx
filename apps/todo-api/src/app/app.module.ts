import {Module} from '@nestjs/common';
import {TodoModule} from './todo/todo.module';
import {ConfigModule} from '@nestjs/config';
import {DatabaseModule} from './shared/database.module';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {jwtModuleOptions, JwtStrategy} from '@todo-nx/authentication-api';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(jwtModuleOptions),
    DatabaseModule,
    TodoModule
  ],
  providers: [JwtStrategy]
})
export class AppModule {}
