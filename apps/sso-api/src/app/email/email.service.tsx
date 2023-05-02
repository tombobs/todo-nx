import { Injectable } from '@nestjs/common';
import { IMail } from '@todo-nx/interfaces';
import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ComponentType } from 'react';
import { renderEmail } from 'react-html-email';


@Injectable()
export class EmailService {

  private transporter: Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    this.transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: +process.env.SMTP_POST,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls: {
        ciphers: process.env.SMTP_TLS
      },
    });
  }

  async sendMail(mail: IMail) {
    mail.from = process.env.SMTP_USER;
    try {
      await this.transporter.sendMail(mail);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  async verify(): Promise<boolean> {
    return new Promise((resolve => {
      this.transporter.verify(error => {
        if (error) {
          console.log(error);
          throw new Error(`failed to connect to SMTP server ${error}`,);
        }
        resolve(!error);
      });
    }));
  }

  renderReactEmail<T = any>(Component: ComponentType<T>, data: T): string {
    return renderEmail((<Component {...data} />));
  }
}
