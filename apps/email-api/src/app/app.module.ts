import { Module } from '@nestjs/common';
import { AuthEmailModule } from "./auth-email/auth-email.module";
import { ContactEmailModule } from "./contact-email/contact-email.module";

@Module({
  imports: [AuthEmailModule, ContactEmailModule]
})
export class AppModule {}
