import styles from './login.module.scss';
import {Button, TextField} from '@mui/material';
import {useState} from 'react';
import axios from 'axios';
import {environment} from '../../environments/environment';
import {Banner} from '../banner/banner';
import { Link } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function login() {
    try {
      const res = await axios.post(environment.ssoApiUrl + '/auth/login', { email, password });
      location.href = `${environment.appUrl}?token=${res.data.accessToken}&refresh=${res.data.refreshToken}`;
    } catch (e: any) {
      switch (e.response.status) {
        case 401:
          return console.log('un')
        default:
          console.log('err')
      }
    }
  }

  return (
    <div className={styles.content}>

      <div className={styles.left}>

        <Banner />

        <div className={styles.formContainer}>
          <h1 className={styles.title}>Login.</h1>
          <p>Securely access your account.</p>

          <form>
            <TextField placeholder='email' fullWidth value={email} onChange={e => setEmail(e.target.value)} />
            <TextField placeholder='password' type='password' fullWidth value={password}
                       onChange={e => setPassword(e.target.value)} />

            <Button variant={'contained'} className='login-btn' onClick={login} type='button' fullWidth sx={{marginTop: '10px'}}>Login</Button>
          </form>

          <div className={styles.forgotPassword}>
            <a>Forgot password?</a>
          </div>

          <div className={styles.register}>
            Don't have an account?
            <a className={styles.bold} >Register</a>
          </div>
        </div>

      </div>

      <div className={styles.right}>
        <div className={styles.text}>
          <h1>Break free</h1>

          <p>With my consulting services you can have high quality software quickly and at low cost.</p>

          <div className={styles.subText}>
            <strong>
              <Link style={{fontWeight: 'bolder', color: 'black'}} to='https://www.tom-roberts.dev/contact'>Get in touch</Link>
            </strong>
            <p>for a chat about your needs</p>
          </div>
        </div>
        <img src='../../../assets/images/small-horse.png' />
      </div>
    </div>
);
}
