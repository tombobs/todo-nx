import { Button, Typography } from "@mui/material";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IContactEmailRequest, ILoginRequest } from "@todo-nx/interfaces";
import { EmailInput, Flexbox, SubmitButton, TextInput } from "@todo-nx/react-components";
import { CheckCircle, Login, MailOutline } from "@mui/icons-material";
import { Section } from '../section';
import { UiHttpUtils } from '@todo-nx/utils';
import { environment } from "../../../environments/environment";
import { AxiosError } from "axios";

const http = new UiHttpUtils(environment);

export function GetInTouch() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IContactEmailRequest>();

  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);
  const [sendError, setSendError] = useState<AxiosError>();

  async function onSubmit(value: IContactEmailRequest) {
    setIsSending(true);
    try {
      const res = await http.postEmail('contact/hello', value);
      setIsSending(false);
      setIsSent(res.sent);
      reset();
    } catch (e) {
      setSendError(e as AxiosError);
      setIsSending(false);
    }
  }

  return (
    <Section style={{background: 'rgba(61, 38, 145, 1)'}}>
      <Typography variant="h4" sx={{ m: 2, color: 'primary.main', display: isSent ? 'none' : 'block' }}>
        Get in touch
      </Typography>


      {!isSent && <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: '80%', maxWidth: '600px', background: 'rgba(255, 255, 255, 0.5)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(5px)',
          border: '1px solid rgba(255, 255, 255, 0.3)', padding: '10px', borderRadius: '5px' }}
      >
        <EmailInput
          register={register}
          errors={errors}
          label="Your email address"
        />
        <TextInput
          register={register}
          errors={errors}
          formKey="message"
          multiline={true}
          required={true}
        />

        <SubmitButton loading={isSending}>
          Send
          <MailOutline sx={{ marginLeft: '10px' }} />
        </SubmitButton>
      </form>}

      {isSent &&
        <Flexbox sx={{mt: 2, color: 'black'}}>
          <Flexbox sx={{flexDirection: 'row', mb: 1}}>
            <MailOutline sx={{mr: 1}} />
            <Typography variant='body2' sx={{color: 'black'}}>Thanks - your message has been sent - I'll get back to you as soon as I can</Typography>
          </Flexbox>

          <Flexbox>
            <Button variant='outlined' onClick={() => setIsSent(false)}>
              Send another?
            </Button>
          </Flexbox>
        </Flexbox>
      }
    </Section>
  );
}
