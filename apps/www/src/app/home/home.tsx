import styles from './home.module.scss';
import { Avatar, Button, Typography } from '@mui/material';
import { environment } from '../../environments/environment';
import { Clients } from './components/clients';
import { GetInTouch } from './components/get-in-touch';
import { About } from './components/about';
import { Examples } from './components/examples';
import { HireMe } from './components/hire-me';
import { Flexbox } from '@todo-nx/react-components';

export function Home() {
  function scrollToContact(): void {
    scrollTo({ behavior: 'smooth', top: document.body.scrollHeight });
  }

  return (
    <div style={{
      backgroundImage: `url('/assets/bg.png')`,
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Button
        sx={{ fontWeight: 'bold', position: 'absolute', right: 5, top: 5 }}
        color="secondary"
        variant="outlined"
        onClick={scrollToContact}
      >
        Say hello
      </Button>

      <div className={styles.container}>

        <Typography variant="h3" component="h1" sx={{fontWeight: 'bold'}}>
          Full-stack developer & consultant
        </Typography>
        <Typography sx={{ mt: 1 }} variant="h4" component="h2">
          I build awesome web applications
        </Typography>

        <Avatar
          src={`${environment.assetsUrl}/me.jpg`}
          sx={{ mb: 30, mt: 4, height: 150, width: 150 }}
        />

        <About />

        <HireMe />

        <Clients />

        <Examples />
        <GetInTouch />
      </div>
    </div>
  );
}
