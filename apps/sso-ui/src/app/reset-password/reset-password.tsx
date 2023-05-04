import { checkResetToken, resetPassword, resetPasswordSelector } from './reset-password.store';
import { LoadingWrapper, PasswordInput, PasswordStrengthIndicator, SubmitButton } from '@todo-nx/react-components';
import { DialogPage } from '../shared/dialog-page/dialog-page';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import { Link } from '@mui/material';
import { routeNames } from '../shared/route-names';
import { ResetPasswordForm } from './reset-password-form';

export function ResetPassword() {

  const { checkingResetToken, resetTokenValid, resettingPassword, resetPasswordSuccess } = useSelector(resetPasswordSelector);

  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const token = params.get('token')!;
  const userId = params.get('uid')!;

  useEffect(() => {
    dispatch(checkResetToken({ token, userId }));
  }, []);


  let title = 'Reset your password';
  if (resetTokenValid === false) {
    title = 'Could not reset your password';
  }
  if (resetPasswordSuccess) {
    title = 'Password has been reset'
  }


  return (
    <DialogPage title={title} width='100%'>

      <LoadingWrapper loading={checkingResetToken} color='black'>

        {!resetTokenValid &&
        <Link component={RouterLink} to={routeNames.requestPasswordReset}>try again</Link>
          ||
        resetPasswordSuccess && <Link component={RouterLink} to='/'>Login</Link> ||
        <ResetPasswordForm loading={resettingPassword} onSubmit={ (password: string) => dispatch(resetPassword({ password, token, userId }))} />
        }
      </LoadingWrapper>

    </DialogPage>
  );
}
