import styles from './home.module.scss';
import { Avatar, Button, Typography } from '@mui/material';
import { environment } from '../../environments/environment';
import { Clients } from './components/clients';
import { Contact } from './components/contact';
import { About } from "./components/about";
import { Examples } from './components/examples';
import { AskAbout } from './components/ask-about';

export function Home() {
  return (
    <div className={styles.container}>
      <Typography variant='h3' component='h1'>Full-stack developer & consultant</Typography>
      <Typography sx={{marginTop: '10px'}} variant='h4' component='h2'>I build awesome web applications</Typography>

      <Avatar src={`${environment.assetsUrl}/me.jpg`} sx={{marginTop: '30px', height: '100px', width: '100px'}} />

      <img src={`${environment.assetsUrl}/rocket.png`} alt="Blast off" style={{width: '50%'}} />
      <About />



      <AskAbout />
      
      <Clients />

      <Examples />
      <Contact />
    </div>
  );
}
