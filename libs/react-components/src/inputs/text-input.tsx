import { TextField } from '@mui/material';
import { InputProps } from './shared/input-props.interface';
import { InputError } from './shared/input-error';
import { titleCase } from '@todo-nx/utils';
import styles from './shared/inputs.module.scss'

export function TextInput({ errors, register, formKey, required, label }: InputProps<any>) {
  formKey = formKey ?? 'text';
  label = label ?? titleCase(formKey);

  let errorMessage = `Please enter a ${formKey}`;

  return (
    <div className={styles.marginTop}>
      <TextField label={label} fullWidth error={!!errors[formKey]} InputLabelProps={{ shrink: true }}
                 {...register(formKey, { required })}/>

      <InputError errors={errors} formKey={formKey}>{errorMessage}</InputError>
    </div>
  );
}
