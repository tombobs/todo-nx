import styles from './banner.module.scss';
import { EmojiPeople } from '@mui/icons-material';

export function Banner() {
  return (
    <span className={styles.banner}>
      <EmojiPeople />
      <div className={styles.text}>tom-roberts.dev</div>
    </span>
  );
}
