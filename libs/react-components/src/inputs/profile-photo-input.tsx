import { Avatar, Button } from '@mui/material';
import styles from './shared/inputs.module.scss';
import { InputProps } from './shared/input-props.interface';

export interface ProfilePhotoInputProps {
  onChange: (v: any) => any;
  avatarKey?: string;
}

export function ProfilePhotoInput({ onChange, avatarKey }: ProfilePhotoInputProps) {


  return (
    <div className={styles.marginTop}
         style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
      <Avatar sx={{ width: 70, height: 70, marginBottom: '5px' }} src={avatarKey}/>
      <Button variant='contained' component='label' fullWidth>

        Change profile photo

        <input type="file" hidden onChange={onChange}/>
      </Button>
    </div>
  );
}
