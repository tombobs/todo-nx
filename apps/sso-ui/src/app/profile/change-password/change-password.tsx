import { LoadingWrapper, PasswordInput, SubmitButton } from '@todo-nx/react-components';
import { useForm } from 'react-hook-form';
import { ResetPasswordFormControls } from '../../reset-password/reset-password-form-controls';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, profileSelector, resetError } from '../profile.store';
import { passwordMinLength } from '@todo-nx/utils';

export function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    setValue,
    reset,
    formState: { errors }
  } = useForm<{password: string, oldPassword: string, repeat: string}>();
  const dispatch = useDispatch();

  const [password, setPassword] = useState<string>('');
  const [oldPassword, setOldPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  const { changingPassword, error, passwordChanged } = useSelector(profileSelector);

  watch(data => {
    setPassword(data.password!);
    setOldPassword(data.oldPassword!);
    setIsValid(!!data.oldPassword && data.oldPassword!.length >= passwordMinLength && data.password?.length! >= passwordMinLength && data.repeat === data.password);
  });

  useEffect(() => {
    if (error?.response?.status === 400) {
      setError('oldPassword', {type: 'current'})
    }
  }, [error]);
  
  useEffect(() => {
    reset();
    dispatch(resetError());
  }, [passwordChanged])

  return (
    <form onSubmit={handleSubmit(() => isValid && dispatch(changePassword({newPassword: password, oldPassword})))} style={{ width: '70%' }}>
      <PasswordInput register={register} errors={errors} required={true} label="Current password"
                     formKey="oldPassword"/>

      <ResetPasswordFormControls register={register} errors={errors} password={password} />

      <SubmitButton disabled={changingPassword!}>
        <LoadingWrapper loading={changingPassword!}>
          Change password
        </LoadingWrapper>
      </SubmitButton>
    </form>
  );
}
