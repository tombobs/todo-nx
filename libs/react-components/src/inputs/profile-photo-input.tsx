import { Avatar, Button } from '@mui/material';
import styles from './shared/inputs.module.scss';
import { InputProps } from './shared/input-props.interface';

export interface ProfilePhotoInputProps extends InputProps<any> {

}

export function ProfilePhotoInput({required, register, formKey}: ProfilePhotoInputProps) {
  formKey = formKey ?? 'profilePhoto';

  return (
    <div className={styles.marginTop}
         style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
      <Avatar sx={{ width: 70, height: 70, marginBottom: '5px' }}/>
      <Button variant='contained' component='label' fullWidth>

        Change profile photo

        <input type="file" hidden {...register(formKey!, { required })}/>
      </Button>
    </div>
  );
}
