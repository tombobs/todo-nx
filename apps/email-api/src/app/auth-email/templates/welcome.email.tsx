import { Button } from '@mui/material';
import { EmailLayout } from '../../email/templates/email-layout';
import { Item } from 'react-html-email';
import React from 'react';
import { IUser } from '@todo-nx/interfaces';

export type SignupWelcomeProps = {
  ssoUiUrl: string;
  user: IUser;
};

export function WelcomeEmail({ ssoUiUrl, user }: SignupWelcomeProps) {

  return (
    <EmailLayout title={'Thanks for signing up!'}>

      <Item>
        <h1>Hey {user.name}</h1>
      </Item>

      <Item>
        <h3>thanks for signing up!</h3>
      </Item>

      <Item>
        <p>We'd love to make sure we have the right email address for you</p>
      </Item>

      <Item>
        <Button sx={{ marginTop: '15px' }} variant='contained'
                href={ssoUiUrl + '/verify?code=' + user.code}>Verify your account</Button>
      </Item>

    </EmailLayout>
  );
}
