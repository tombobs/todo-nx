import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerAccount, registerSelector } from './register.store';
import { SubmitButton, EmailInput, PasswordInput, LoadingWrapper } from '@todo-nx/react-components';
import { IRegisterRequest } from '@todo-nx/interfaces';
import { PersonAddAlt } from '@mui/icons-material';

export function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterRequest>();
  const dispatch = useDispatch()
  const { registering } = useSelector(registerSelector);

  return (
    <form onSubmit={handleSubmit((formValue: IRegisterRequest) => dispatch(registerAccount(formValue)))}>
      <EmailInput register={register} errors={errors}/>
      <PasswordInput register={register} errors={errors}/>

      <SubmitButton disabled={registering}>
        <LoadingWrapper loading={registering}>
          Create account
          <PersonAddAlt sx={{marginLeft: '10px'}} />
        </LoadingWrapper>
      </SubmitButton>
    </form>
  );
}
