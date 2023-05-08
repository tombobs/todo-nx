import { Injectable, Logger } from '@nestjs/common';
import { IEmailReceipt, IMail } from "@todo-nx/interfaces";
import { createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { ComponentType } from 'react';
import { renderEmail } from 'react-html-email';



@Injectable()
export class EmailService {

  private transporter: Transporter<SMTPTransport.SentMessageInfo>;

  constructor() {
    this.transporter = createTransport({
      host: process.env['SMTP_HOST'],
      port: +process.env['SMTP_PORT']!,
      secure: process.env['SMTP_SECURE'] === 'true',
      auth: {
        user: process.env['SMTP_USER'],
        pass: process.env['SMTP_PASS']
      },
      tls: {
        ciphers: process.env['SMTP_TLS']
      },
    });
  }

  async sendMail(mail: IMail): Promise<IEmailReceipt> {
    mail.from = process.env['SMTP_USER'];
    try {
      await this.transporter.sendMail(mail);
      return {sent: true};
    } catch (e) {
      console.log(e);
      return {sent: false};
    }
  }

  async verify(): Promise<boolean> {
    Logger.log('verifying SMTP');
    return new Promise((resolve => {
      this.transporter.verify(error => {
        if (error) {
          console.log(error);
          throw new Error(`failed to connect to SMTP server ${error}`,);
        }
        resolve(!error);
        Logger.log('verified SMTP working')
      });
    }));
  }

  renderReactEmail<T>(Component: ComponentType<T>, data: T): string {
    // @ts-ignore
    return renderEmail((<Component {...data} />));
  }


}
