import { checkResetToken, resetPassword, resetPasswordSelector } from './reset-password.store';
import { LoadingWrapper, PasswordInput, PasswordStrengthIndicator, SubmitButton } from '@todo-nx/react-components';
import { DialogPage } from '../shared/dialog-page/dialog-page';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useSearchParams } from 'react-router-dom';
import { Link } from '@mui/material';
import { routeNames } from '../shared/route-names';

export function ResetPassword() {

  const { checkingResetToken, resetTokenValid, resettingPassword, resetPasswordSuccess } = useSelector(resetPasswordSelector);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors }
  } = useForm<{ password: string, repeat: string }>();
  const dispatch = useDispatch();
  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

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

  watch(data => {
    setPassword(data.password!);
    setIsValid(data.password?.length! > 4 && data.repeat === data.password);
  });

  function onSubmit({ password }: { password: string }): void {
    if (isValid) {
      dispatch(resetPassword({ password, token, userId }));
    }
  }

  return (
    <DialogPage title={title} width='400px'>

      <LoadingWrapper loading={checkingResetToken} color='black'>

        {!resetTokenValid &&
        <Link component={RouterLink} to={routeNames.requestPasswordReset}>try again</Link>
          ||
        resetPasswordSuccess && <Link component={RouterLink} to='/'>Login</Link> ||
        <form style={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
            <PasswordInput register={register} errors={errors} label='New password'/>
            <PasswordStrengthIndicator password={password}/>
          {password?.length > 4 &&
          <PasswordInput register={register} errors={errors} label='Repeat' formKey='repeat' pattern={password}/>
          }
            <SubmitButton>
                <LoadingWrapper loading={resettingPassword}>
                    Reset
                </LoadingWrapper>
            </SubmitButton>
        </form>
        }
      </LoadingWrapper>

    </DialogPage>
  );
}
