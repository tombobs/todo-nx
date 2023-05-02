import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { IUser } from '@todo-nx/interfaces';
import { SignupWelcome } from '../email/templates/signup-welcome';
import { PasswordResetEmail } from '../email/templates/password-reset.email';

@Injectable()
export class AuthEmailService {

  constructor(private emailService: EmailService) {
  }

  sendWelcomeEmail(user: IUser): Promise<boolean> {
    const html = this.emailService.renderReactEmail(SignupWelcome, { user });
    return this.emailService.sendMail({
      subject: '',
      html,
      to: user.email,
    });
  }

  sendPasswordResetEmail(user: IUser, tokenId: string): Promise<boolean> {
    const html = this.emailService.renderReactEmail(PasswordResetEmail, { user, tokenId });
    return this.emailService.sendMail({
      subject: 'Reset your password',
      html,
      to: user.email,
    });
  }
}
