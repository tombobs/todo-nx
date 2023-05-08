import styles from './footer.module.scss';

import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton, Link, styled, Typography } from "@mui/material";
import { IUIEnvironment } from "@todo-nx/interfaces";

const StyledLink = styled(Link)({
  marginRight: '10px',
});

export function Footer({environment}: {environment?: IUIEnvironment} = {}) {
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
        <StyledLink href={`${environment?.wwwUrl || ''}/contact`}>
          Contact
        </StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="https://www.tom-roberts.dev/help">Help</StyledLink>
      </div>

      <div className={styles.right}>
        <Typography variant='body2' sx={{display: {xs: 'none', sm: 'block'}, fontWeight: 'bold', opacity: 0.8}}>
          Developer - Tom Roberts
        </Typography>
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
