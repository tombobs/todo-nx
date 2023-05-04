import { EmailInput, LoadingWrapper, ProfilePhotoInput, TextInput } from '@todo-nx/react-components';
import { useForm, useFormContext, useWatch } from 'react-hook-form';
import { IUser } from '@todo-nx/interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { profileSelector, updateProfile, updateProfilePhoto } from './profile.store';
import { FormEvent, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { KeysOfAType } from 'typeorm';
import { getDiff } from '@todo-nx/utils';
import { environment } from '../../environments/environment';

const useFormValues = () => {
  const { getValues } = useFormContext();

  return {
    ...useWatch(), // subscribe to form value updates
    ...getValues(), // always merge with latest form values
  }
}

export function Profile() {
  const { register, setValue, handleSubmit , trigger, getValues, formState: { isDirty, errors } } = useForm<IUser>();
  const dispatch = useDispatch();
  const { profile, loading } = useSelector(profileSelector);

  useEffect(() => {
    setValue('name', profile?.name!);
    setValue('email', profile?.email!);
  }, [profile]);

  function handleChange(_e: FormEvent) {
    const update = getDiff<IUser>(profile as IUser, getValues());
    if (update) {
      dispatch(updateProfile(update))
    }
  }

  return (
    <LoadingWrapper loading={loading} color='black' size={50}>
      <form onChange={debounce(handleChange, 300)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70%', paddingTop: '10px' }}>

        <EmailInput register={register} errors={errors}/>
        <TextInput register={register} errors={errors} formKey="name"/>

        <ProfilePhotoInput avatarKey={profile?.profilePhotoKey && environment.avatarPath! + profile?.profilePhotoKey} onChange={v => dispatch(updateProfilePhoto(v.target.files[0]))} />
      </form>
    </LoadingWrapper>
  );
}
