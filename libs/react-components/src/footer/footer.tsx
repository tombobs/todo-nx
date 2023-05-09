import styles from './footer.module.scss';

import { GitHub, LinkedIn } from '@mui/icons-material';
import { IconButton, Link, styled, Typography } from "@mui/material";
import { IUIEnvironment } from "@todo-nx/interfaces";
import { theme } from '@todo-nx/theme';
const {primary, secondary} = theme.palette;

const StyledLink = styled(Link)({
  marginRight: '10px',
  color: secondary.dark
});

export function Footer({environment}: {environment?: IUIEnvironment} = {}) {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: primary.main,
        alignItems: 'center',
        padding: '0 20px',
        fontSize: '0.8rem',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div style={{position: 'relative', bottom: '2px'}}>
        <StyledLink href={`${environment?.wwwUrl || 'https://www.tom-roberts.dev'}/contact`}>
          Contact
        </StyledLink>
        <StyledLink href="https://assets.tom-roberts.dev/Tom-Roberts-CV.pdf" target='_blank'>CV</StyledLink>
      </div>

      <div className={styles.right}>
        <Typography variant='body2' sx={{color: secondary.main, display: {xs: 'none', sm: 'block'}, fontWeight: 'bold', opacity: 0.8}}>
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
