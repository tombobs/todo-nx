import { Module } from '@nestjs/common';
import { ContactEmailController } from './contact-email.controller';
import { ContactEmailService } from './contact-email.service';
import { EmailModule } from "../email/email.module";

@Module({
  imports: [EmailModule],
  controllers: [ContactEmailController],
  providers: [ContactEmailService],
})
export class ContactEmailModule {}
