import styles from './footer.module.scss';

import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export function Footer() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      background: '#EDF0F4',
      alignItems: 'center',
      padding: '0 20px',
      fontSize: '0.8rem' }}>

      <div>
        <a className={ styles.link } href='https://www.tom-roberts.dev/contact'>Contact</a>
        <a className={ styles.link } href='/about'>About</a>
        <a className={ styles.link } href='https://www.tom-roberts.dev/help'>Help</a>
      </div>

      <div className={ styles.right }>
        Created by Tom Roberts
        <IconButton>
          <a href='https://www.linkedin.com/in/tom-roberts-dev'>
            <LinkedIn/>
          </a>
        </IconButton>
        <IconButton>
          <a href='https://github.com/tombobs/todo-nx'>
            <GitHub/>
          </a>
        </IconButton>
      </div>
    </div>
  );
}
