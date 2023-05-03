import { Injectable } from '@nestjs/common';
import { IUser } from '@todo-nx/interfaces';
import { EmailService, PasswordResetEmail, SignupWelcome } from '@todo-nx/email';

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
