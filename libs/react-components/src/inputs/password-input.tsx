import { TextField } from '@mui/material';
import { InputProps } from './shared/input-props.interface';
import { InputError } from './shared/input-error';
import { passwordMinLength, titleCase } from '@todo-nx/utils';
import styles from './shared/inputs.module.scss';

export function PasswordInput({ errors, register, formKey, label, pattern }: InputProps<any>) {
  formKey = formKey ?? 'password';
  label = label ?? titleCase(formKey);

  let errorMessage = `Password must be at least ${passwordMinLength} characters`;
  switch (errors[formKey]?.type) {
    case 'pattern':
      errorMessage = 'Passwords must match'
      break;
  }


  return (
    <div className={styles.marginTop}>
      <TextField placeholder={label} fullWidth type='password' error={!!errors[formKey]} {...register(formKey, {
        required: true,
        minLength: passwordMinLength,
        pattern: pattern && new RegExp(`${pattern}`) || undefined
      })}/>

      <InputError errors={errors} formKey={formKey}>{errorMessage}</InputError>

    </div>
  );
}
