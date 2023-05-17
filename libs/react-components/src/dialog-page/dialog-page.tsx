import styles from './dialog-page.module.scss';
import { Box } from "@mui/material";
import { BackgroundImage } from "../picture/background-image";

export interface DialogPageProps {
  title?: string;
  children: any;
  width?: string;
  center?: boolean;
}

export function DialogPage({title, children, width, center}: DialogPageProps) {

  width = width ?? '500px';

  return (
    <BackgroundImage src={'register-bg.png'}>
      <Box className={styles.container} sx={{p: center ? 0 : 4, alignItems: center ? 'center' : 'initial'}}>
        <Box className={styles.content} style={{width, borderColor: 'primary.main'}}>
          {title && <h3>{title}</h3>}
          {children}
        </Box>
      </Box>
    </BackgroundImage>
  );
}
