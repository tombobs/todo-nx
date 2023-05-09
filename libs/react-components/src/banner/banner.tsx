import { EmojiPeople } from '@mui/icons-material';
import { IUIEnvironment } from "@todo-nx/interfaces";
import { theme } from "@todo-nx/theme";
import { Button, Link } from "@mui/material";

export interface BannerProps {
  absolutePosition?: boolean;
  environment?: IUIEnvironment;
}

export function Banner({absolutePosition, environment}: BannerProps) {
  absolutePosition = absolutePosition ?? true;
  const {primary, secondary} = theme.palette;

  return (
    <>
    <a style={{
      position: absolutePosition ? 'absolute' : 'static',
      left: '10px',
      top: '10px',
      fontFamily: 'monospace',
      fontWeight: 'bolder',
      color: secondary.dark,
      border: '4px solid ' + primary.dark,
      padding: '5px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      background: primary.light,
      zIndex: 1,
      width: '180px',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }} href={environment?.wwwUrl || 'https://www.tom-roberts.dev'}>
      <EmojiPeople/>
      <div style={ { marginLeft: '5px' } }>tom-roberts.dev</div>
    </a>

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
        component={Link}
        href={(environment?.wwwUrl || 'https://www.tom-roberts.dev') + '/contact'}
      >
        Say hello
      </Button>
      </>
  );
}
