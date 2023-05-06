import styles from '../home.module.scss';
import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { ILoginRequest } from "@todo-nx/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { EmailInput, PasswordInput, SubmitButton, TextInput } from "@todo-nx/react-components";
import { Login } from "@mui/icons-material";


export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginRequest>();

  function onSubmit() {

  }

  return (
    <div style={{background: 'white'}} className={styles.section}>
      <Typography variant='h4' sx={{margin: '20px', color: 'black'}}>Get in touch</Typography>

      <form onSubmit={handleSubmit(onSubmit)} style={{width: '60%'}}>
        <EmailInput register={register} errors={errors} label='Your email address'/>
        <TextInput register={register} errors={errors} formKey='message' multiline={true} required={true}/>

        <SubmitButton loading={false}>
          Send
          <Login sx={{ marginLeft: '10px' }}/>
        </SubmitButton>
      </form>
    </div>
  );
}
