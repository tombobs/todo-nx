import { Module } from '@nestjs/common';
import { AuthEmailController } from './auth-email.controller';
import { AuthEmailService } from './auth-email.service';
import { EmailModule } from "../email/email.module";

@Module({
  imports: [EmailModule],
  controllers: [AuthEmailController],
  providers: [AuthEmailService],
})
export class AuthEmailModule {}
