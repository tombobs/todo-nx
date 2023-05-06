import { LoadingWrapper, PasswordInput, PasswordStrengthIndicator, SubmitButton } from '@todo-nx/react-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ResetPasswordFormControls } from './reset-password-form-controls';

export interface ResetPasswordFormProps {
  onSubmit: any;
  loading?: boolean;
}

export function ResetPasswordForm({onSubmit, loading}: ResetPasswordFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<{ password: string, repeat: string }>();

  const [password, setPassword] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(false);

  watch(data => {

    setPassword(data.password!);
    setIsValid(data.password?.length! > 4 && data.repeat === data.password);
  });

  function formSubmit() {
    isValid && onSubmit(password);
  }

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(formSubmit)} >
      <ResetPasswordFormControls register={register} errors={errors} password={password} />
      <SubmitButton>
        <LoadingWrapper loading={loading!}>
          Reset
        </LoadingWrapper>
      </SubmitButton>
    </form>
  );
}
