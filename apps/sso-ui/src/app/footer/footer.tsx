import styles from './footer.module.scss'
import {Link} from 'react-router-dom';
import {GitHub, LinkedIn} from '@mui/icons-material';
import { IconButton } from '@mui/material';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link className={styles.link} to='https://www.tom-roberts.dev/contact'>Contact</Link>
        <Link className={styles.link} to='/about'>About</Link>
        <Link className={styles.link} to='https://www.tom-roberts.dev/help'>Help</Link>
      </div>

      <div className={styles.right}>
        Created by Tom Roberts
        <IconButton>
          <Link to='https://www.linkedin.com/in/tom-roberts-dev'>
            <LinkedIn />
          </Link>
        </IconButton>
        <IconButton>
          <Link to='https://github.com/tombobs/todo-nx'>
            <GitHub />
          </Link>
        </IconButton>
      </div>
    </div>
  );
}
