import { Injectable } from '@nestjs/common';

import { IEmailReceipt, IUser } from "@todo-nx/interfaces";
import { EmailService } from "../email/email.service";
import { WelcomeEmail } from "./templates/welcome.email";
import { PasswordResetEmail } from "./templates/password-reset.email";

@Injectable()
export class AuthEmailService {
  constructor(private emailService: EmailService) {}

  sendWelcomeEmail(user: IUser, token): Promise<IEmailReceipt> {
    const html = this.emailService.renderReactEmail(WelcomeEmail, {
      user,
      ssoUiUrl: this.ssoUiUrl,
    });
    return this.emailService.sendMail({
      subject: '',
      html,
      to: user.email,
    });
  }

  sendPasswordResetEmail(user: IUser, tokenId: string): Promise<IEmailReceipt> {
    const html = this.emailService.renderReactEmail(PasswordResetEmail, {
      user,
      tokenId,
      ssoUiUrl: this.ssoUiUrl,
    });
    return this.emailService.sendMail({
      subject: 'Reset your password',
      html,
      to: user.email,
    });
  }

  private get ssoUiUrl(): string {
    return process.env.SSO_UI_URL!;
  }
}
