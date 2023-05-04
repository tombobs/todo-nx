import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { LoginEntity } from '../auth/entities/login.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, LoginEntity])],
  exports: [TypeOrmModule]
})
export class UserModule {
}
