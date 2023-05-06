import { IUser } from '@todo-nx/interfaces';
import { Button } from '@mui/material';
import { EmailLayout } from './email-layout';
import { A, Item } from 'react-html-email';
import React from 'react';

export type PasswordResetEmailProps = {
  user: IUser;
  tokenId: string;
  ssoUiUrl: string;
};

export function PasswordResetEmail({ user, tokenId, ssoUiUrl }: PasswordResetEmailProps) {

  return (
    <EmailLayout title={'Reset your password'}>

      <Item>
        <h1>Hey {user.name}</h1>
      </Item>

      <Item>
        <h3>
          <span>A request was made to reset your password for</span>
          <A href='https://www.tom-roberts.dev'>tom-roberts.dev</A>
        </h3>
      </Item>

      <Item>
        <p>Click the link below to reset your password</p>
      </Item>

      <Item>
        <Button sx={{ marginTop: '15px' }} variant='contained'
                href={ssoUiUrl + `/reset-password?token=${tokenId}&uid=${user.id}`}>Reset password</Button>
      </Item>

    </EmailLayout>
  );
}
