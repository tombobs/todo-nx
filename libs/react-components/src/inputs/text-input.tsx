import { TextField } from '@mui/material';
import { InputProps } from './shared/input-props.interface';
import { InputError } from './shared/input-error';
import { titleCase } from '@todo-nx/utils';

export function TextInput({ errors, register, formKey, required, label }: InputProps<any>) {
  formKey = formKey ?? 'text';
  label = label ?? titleCase(formKey);

  let errorMessage = `Please enter a ${formKey}`;

  return (
    <>
      <TextField placeholder={label} fullWidth error={!!errors[formKey]}
                 {...register(formKey, { required })}/>

      <InputError errors={errors} formKey={formKey}>{errorMessage}</InputError>
    </>
  );
}
