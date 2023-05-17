import { Module } from '@nestjs/common';
import { AuthEmailModule } from './auth-email/auth-email.module';
import { ContactEmailModule } from './contact-email/contact-email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), AuthEmailModule, ContactEmailModule],
})
export class AppModule {}
