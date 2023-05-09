import styles from './login.module.scss';
import { Box, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Banner } from '@todo-nx/react-components';
import { LoginForm } from './login-form';


export function Login() {
  return (
    <div className={styles.content}>

      <Box className={styles.left} sx={{width: {xs: 'initial', md: '50%'}, margin: {xs: 'auto', md: '0'} }}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Login</h1>
          <p>Securely access your account.</p>

          <LoginForm />

          <div className={styles.register}>
            Don't have an account?
            <Link to='/register' className={styles.padLeft} component={RouterLink}>Register</Link>
          </div>

          <div className={styles.forgotPassword}>
            <Link to='/request-password-reset' className='soft' component={RouterLink}>Forgot password?</Link>
          </div>
        </div>

      </Box>

      <Box className={styles.right} sx={{display: {md: 'flex', xs: 'none'}}}>
        <div className={styles.text}>
          <h1>Break free</h1>

          <p>With my consulting services you can have high quality software quickly and at low cost.</p>

          <div className={styles.subText}>
            <strong>
              <Link style={{ fontWeight: 'bolder', color: 'black' }} href='https://www.tom-roberts.dev/contact'>Get in
                touch</Link>
            </strong>
            <p>for a chat about your needs</p>
          </div>
        </div>
        <img src='../../../assets/images/small-horse.png'/>
      </Box>
    </div>
  );
}
