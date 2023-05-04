import { TextField } from '@mui/material';
import { InputProps } from './shared/input-props.interface';
import { InputError } from './shared/input-error';
import { titleCase } from '@todo-nx/utils';
import styles from './shared/inputs.module.scss';

export const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const uniqueEmailValidationKey = 'unique';

export function EmailInput({errors, register, formKey, label, defaultValue}: InputProps<any>) {
  formKey = formKey ?? 'email';
  label = label ?? titleCase(formKey);

  let errorMessage = 'Please enter a valid email address';
  switch (errors.email?.type) {
    case uniqueEmailValidationKey:
      errorMessage = 'Looks like you already have an account - please login instead'
      break;
  }

  return (
    <div className={styles.marginTop}>
      <TextField label={label} InputLabelProps={{ shrink: true }} fullWidth defaultValue={defaultValue} error={!!errors[formKey]} {...register(formKey, {
        required: true,
        pattern: emailRegex
      })}/>

      <InputError errors={errors} formKey={formKey}>{errorMessage}</InputError>
    </div>
  );
}
