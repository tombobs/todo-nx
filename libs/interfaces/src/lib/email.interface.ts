export interface IMail {
  from?: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export interface IContactEmailRequest {
  email: string;
  message: string;
}

export interface IEmailReceipt {
  sent: boolean;
}
