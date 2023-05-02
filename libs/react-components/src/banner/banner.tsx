import { EmojiPeople } from '@mui/icons-material';

export function Banner() {
  return (
    <div style={{
      position: 'absolute',
      left: '10px',
      top: '10px',
      fontFamily: 'cursive',
      fontWeight: 'bolder',
      color: '#0c0cd2eb',
      fontSize: '25px',
      border: '4px solid #ffeb008a',
      padding: '5px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      background: 'white'
    }}>
      <EmojiPeople/>
      <div style={ { marginLeft: '5px' } }>tom-roberts.dev</div>
    </div>
  );
}
