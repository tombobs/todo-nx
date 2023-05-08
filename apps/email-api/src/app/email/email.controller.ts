import { Controller, Get, Query } from '@nestjs/common';
import { EmailService } from './email.service';
import { WelcomeEmail } from '../auth-email/templates/welcome.email';
import { IUser } from '@todo-nx/interfaces';
import { PasswordResetEmail } from '../auth-email/templates/password-reset.email';

@Controller('test-email')
export class EmailController {
  constructor(private emailService: EmailService) {
  }

  @Get('welcome')
  welcome(@Query() { name, email, code }: any) {
    const user = { name, email, code } as IUser;
    return this.emailService.renderReactEmail(WelcomeEmail, { user, ssoUiUrl: 'lol' });
  }

  @Get('password-reset')
  passwordReset(@Query() { name, email, tokenId }: any) {
    const user = { name, email } as IUser;
    return this.emailService.renderReactEmail(PasswordResetEmail, { user, tokenId, ssoUiUrl: 'lol' });
  }

  @Get('verify')
  verify() {
    return this.emailService.verify();
  }
}
