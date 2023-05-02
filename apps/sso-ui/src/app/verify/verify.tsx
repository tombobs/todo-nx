import { useSearchParams } from 'react-router-dom';
import { EmailInput, LoadingWrapper, SubmitButton, TextInput } from '@todo-nx/react-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyAccount, verifySelector } from './verify.store';
import { IVerifyRequest } from '@todo-nx/interfaces';
import { Done } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { DialogPage } from '../shared/dialog-page/dialog-page';

export function Verify() {
  const [params, setParams] = useSearchParams();
  const dispatch = useDispatch();
  const { verifying, error } = useSelector(verifySelector);
  const { register, handleSubmit, formState: { errors } } = useForm<IVerifyRequest>();

  const codeFromQuery = params.get('code');
  const emailFromQuery = params.get('email');

  useEffect(() => {
    if (emailFromQuery && codeFromQuery) {
      // auto-verify if user came from the email with query params
      dispatch(verifyAccount({ email: emailFromQuery, code: codeFromQuery }));
    }
    if (error) {
      // fallback to form input if auto-verify fails
      setParams({});
    }
  }, [error]);

  return (
    <DialogPage title='Verify your account'>
      <form onSubmit={handleSubmit((formValue: IVerifyRequest) => dispatch(verifyAccount(formValue)))}
            style={{ width: '500px' }}>

        {!emailFromQuery && <EmailInput register={register} errors={errors}/>}

        {!codeFromQuery && <TextInput formKey='code' register={register} errors={errors} required={true}/>}

        <SubmitButton disabled={verifying}>
          <LoadingWrapper loading={verifying} message='Verifying your account'>
            Submit
            <Done sx={{ marginLeft: '10px' }}/>
          </LoadingWrapper>
        </SubmitButton>
      </form>
    </DialogPage>
  );
}
