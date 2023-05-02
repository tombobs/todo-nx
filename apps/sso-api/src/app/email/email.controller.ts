import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';
import { SignupWelcome } from './templates/signup-welcome';
import { IUser } from '@todo-nx/interfaces';
import { PasswordResetEmail } from './templates/password-reset.email';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {
  }

  @Get('welcome')
  welcome(@Query() { name, email, code }: any) {
    const user = { name, email, code } as IUser;
    return this.emailService.renderReactEmail(SignupWelcome, { user });
  }

  @Get('password-reset')
  passwordReset(@Query() { name, email, tokenId }: any) {
    const user = { name, email } as IUser;
    return this.emailService.renderReactEmail(PasswordResetEmail, { user, tokenId });
  }
}
