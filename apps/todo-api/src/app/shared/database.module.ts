import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      autoLoadEntities: true,
      synchronize: true,
      type: 'mysql',
      host: process.env.DB_HOST ?? 'localhost',
      port: process.env.DB_PORT && +process.env.DB_PORT || 3306,
      username: process.env.DB_USER ?? 'root',
      password: process.env.DB_PASS ?? 'password',
      database: process.env.DB_NAME ?? 'todo',
    }),
  ],
})
export class DatabaseModule {
}
