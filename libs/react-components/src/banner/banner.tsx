import { EmojiPeople } from '@mui/icons-material';
import { IUIEnvironment } from "@todo-nx/interfaces";

export interface BannerProps {
  absolutePosition?: boolean;
  environment?: IUIEnvironment;
}

export function Banner({absolutePosition, environment}: BannerProps) {
  absolutePosition = absolutePosition ?? true;
  return (
    <a style={{
      position: absolutePosition ? 'absolute' : 'static',
      left: '10px',
      top: '10px',
      fontFamily: 'cursive',
      fontWeight: 'bolder',
      color: '#0c0cd2eb',
      border: '4px solid #ffeb008a',
      padding: '5px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      zIndex: 1,
      width: '180px',
      textDecoration: 'none'
    }} href={environment?.wwwUrl || 'https://tom-roberts.dev'}>
      <EmojiPeople/>
      <div style={ { marginLeft: '5px' } }>tom-roberts.dev</div>
    </a>
  );
}
