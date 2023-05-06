import { LoadingWrapper, PasswordInput, PasswordStrengthIndicator, SubmitButton } from '@todo-nx/react-components';
import { passwordMinLength } from '@todo-nx/utils';

export interface ResetPasswordFormControlsProps {
  register: any;
  errors: any;
  password: string;
}

export function ResetPasswordFormControls({password, errors, register}: ResetPasswordFormControlsProps) {
  return (
    <>
      <PasswordInput register={register} errors={errors} label='New password'/>
      <PasswordStrengthIndicator password={password}/>
      {password?.length >= passwordMinLength &&
          <PasswordInput register={register} errors={errors} label='Repeat' formKey='repeat' pattern={password}/>
      }
    </>
  );
}
