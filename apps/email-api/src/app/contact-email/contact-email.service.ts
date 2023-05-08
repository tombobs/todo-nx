import { Injectable } from '@nestjs/common';
import { IContactEmailRequest, IEmailReceipt } from "@todo-nx/interfaces";
import { EmailService } from '../email/email.service';
import { ContactHelloEmail } from './templates/contact-hello.email';

@Injectable()
export class ContactEmailService {
  constructor(private emailService: EmailService) {}

  sendContactHelloEmail(request: IContactEmailRequest): Promise<IEmailReceipt> {
    const html = this.emailService.renderReactEmail(ContactHelloEmail, request);
    return this.emailService.sendMail({
      subject: '',
      html,
      to: process.env['WWW_ADMIN_EMAIL'],
    });
  }
}
