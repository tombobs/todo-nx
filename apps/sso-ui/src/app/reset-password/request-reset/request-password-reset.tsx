import { DialogPage } from '../../shared/dialog-page/dialog-page';
import { EmailInput, LoadingWrapper, SubmitButton } from '@todo-nx/react-components';
import { useDispatch, useSelector } from 'react-redux';
import { requestReset, resetPasswordSelector } from '../reset-password.store';
import { useForm } from 'react-hook-form';
import { IRequestPasswordResetRequest } from '@todo-nx/interfaces';
import { useNavigate } from 'react-router-dom';

export function RequestPasswordReset() {
  const { requestingReset, resetRequested } = useSelector(resetPasswordSelector);
  const { register, handleSubmit, formState: { errors } } = useForm<IRequestPasswordResetRequest>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <DialogPage title='Forgotten your password?'>

      {!resetRequested && <>

        <p style={{marginTop: 0}}>Forgot your password? No worries. Just enter the email you <br />
          used to sign up and we’ll send you a link to reset it.</p>

        <form onSubmit={handleSubmit(request => dispatch(requestReset({request, navigate})))} style={{width: '500px'}}>

          <EmailInput register={register} errors={errors}/>

          <SubmitButton disabled={requestingReset}>
            <LoadingWrapper loading={requestingReset}>
              Submit
            </LoadingWrapper>
          </SubmitButton>
        </form>
      </> ||
        <h3>All done - check your email for a reset link</h3>
      }
    </DialogPage>
  );
}
