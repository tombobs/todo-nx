import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  formKey?: string;
  required?: boolean;
  label?: string;
  pattern?: string;
  onChange?: any;
  defaultValue?: any;
  multiline?: boolean;
}
