import styles from './home.module.scss';
import { Button } from '@mui/material';
import { Clients } from './components/clients';
import { GetInTouch } from './components/get-in-touch';
import { About } from './components/about';
import { Examples } from './components/examples';
import { HireMe } from './components/hire-me';
import { Top } from './components/top';

export function Home() {
  function scrollToContact(): void {
    scrollTo({ behavior: 'smooth', top: document.body.scrollHeight });
  }

  return (
    <div
      style={{
        backgroundImage: `url('/assets/bg.png')`,
        backgroundAttachment: 'initial !important',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'fit-content',
      }}
    >
      <Button
        sx={{
          fontWeight: 'bold',
          position: 'absolute',
          right: 10,
          top: 10,
          fontSize: '1.1rem',
        }}
        color="secondary"
        variant="outlined"
        onClick={scrollToContact}
      >
        Say hello
      </Button>

      <div className={styles.container}>
        <Top />

        <About />

        <HireMe />

        <Clients />

        <Examples />
        <GetInTouch />
      </div>
    </div>
  );
}
