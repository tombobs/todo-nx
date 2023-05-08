import { Button } from '@mui/material';
import { EmailLayout } from '../../email/templates/email-layout';
import { Item } from 'react-html-email';
import React from 'react';
import { IContactEmailRequest } from '@todo-nx/interfaces';

export function ContactHelloEmail({ email, message }: IContactEmailRequest) {
  return (
    <EmailLayout title={'Contact from website'}>
      <Item>
        <h1>Hey Tom</h1>
      </Item>

      <Item>
        <h3>you have a message from the website</h3>
      </Item>

      <Item>
        <p>From: {email}</p>
      </Item>

      <Item>
        <p>{message}</p>
      </Item>
    </EmailLayout>
  );
}
