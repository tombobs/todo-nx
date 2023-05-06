import styles from './footer.module.scss';

import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton, Link, styled } from '@mui/material';

const StyledLink = styled(Link)({
  marginRight: '10px',
});

export function Footer() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: '#EDF0F4',
        alignItems: 'center',
        padding: '0 20px',
        fontSize: '0.8rem',
      }}
    >
      <div style={{position: 'relative', bottom: '2px'}}>
        <StyledLink href="https://www.tom-roberts.dev/contact">
          Contact
        </StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="https://www.tom-roberts.dev/help">Help</StyledLink>
      </div>

      <div className={styles.right}>
        <div style={{ fontWeight: 'bold', opacity: 0.8 }}>
          Developer - Tom Roberts
        </div>
        <IconButton>
          <a href="https://www.linkedin.com/in/tom-roberts-dev">
            <LinkedIn />
          </a>
        </IconButton>
        <IconButton>
          <a href="https://github.com/tombobs/todo-nx">
            <GitHub />
          </a>
        </IconButton>
      </div>
    </div>
  );
}
