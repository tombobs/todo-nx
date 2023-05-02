import { EmailInput, PasswordInput, SubmitButton } from '@todo-nx/react-components';
import { useForm } from 'react-hook-form';
import { ILoginRequest } from '@todo-nx/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { login, loginSelector } from './login.store';
import { Login } from '@mui/icons-material';

export function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginRequest>();
  const dispatch = useDispatch();
  const { loggingIn } = useSelector(loginSelector);

  return (
    <form onSubmit={handleSubmit((formValue: ILoginRequest) => dispatch(login(formValue)))}>
      <EmailInput register={register} errors={errors}/>
      <PasswordInput register={register} errors={errors}/>

      <SubmitButton loading={loggingIn}>
        Login
        <Login sx={{ marginLeft: '10px' }}/>
      </SubmitButton>
    </form>
  );
}
