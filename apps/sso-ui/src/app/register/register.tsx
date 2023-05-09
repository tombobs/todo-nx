import styles from './register.module.scss';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from "@mui/material";
import { RegisterForm } from './register-form';

export function Register() {
  return (
    <Box className={styles.container}>
      <Box className={styles.left} sx={{width: {xs: 'initial', md: '50%'}, margin: {xs: 'auto', md: '0'} }}>
        <div className={styles.formContainer}>
          <h2>Register</h2>
          <p>Create an account and start taking a look around.</p>

          <RegisterForm />

          <div className={styles.login}>
            Already have an account? <Link component={RouterLink} to='/' className={styles.bold}>Login</Link>
          </div>
        </div>
      </Box>

      <Box className={styles.right} sx={{display: {md: 'flex', xs: 'none'}}}>
        <div className={styles.text}>
          <h1>Prepare for blastoff!</h1>
          <p>Supercharge your development<br/>
            with my <Link component={RouterLink} to='https://www.tom-roberts.dev/consulting'>consultancy services</Link>
          </p>
        </div>
        <img className={styles.bg} src='../../../assets/images/register-bg.png'/>
        <img className={styles.rocket} src='../../../assets/images/rocket.png'/>
      </Box>
    </Box>
  );
}
