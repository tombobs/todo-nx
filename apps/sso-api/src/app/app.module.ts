import {Module} from '@nestjs/common';
import {AuthModule} from './auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import {PassportModule} from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      synchronize: true,
      type: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: process.env.DB_PORT && +process.env.DB_PORT || 3306,
      username: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASS ?? 'password',
      database: process.env.SSO_DB_NAME ?? 'sso',
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    AuthModule
  ]
})
export class AppModule {}
