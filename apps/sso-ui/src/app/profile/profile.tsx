import { EmailInput, ProfilePhotoInput, TextInput } from '@todo-nx/react-components';
import { useForm } from 'react-hook-form';
import { IUser } from '@todo-nx/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector } from './profile.store';
import { useEffect } from 'react';
import { Avatar } from '@mui/material';

export function Profile() {
  const { register, setValue, watch, formState: { errors } } = useForm<IUser>();
  const dispatch = useDispatch();

  const {profile} = useSelector(profileSelector);

  useEffect(() => {
    setValue('email', profile?.email!);
    setValue('name', profile?.name!);
  }, [profile])

  watch((a: any,b: any) => console.log(a,b))

  return (
    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}>
      <EmailInput register={register} errors={errors} />
      <TextInput register={register} errors={errors} formKey='name' />

      <ProfilePhotoInput register={register} errors={errors}/>
    </form>
  );
}
