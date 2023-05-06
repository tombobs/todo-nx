import styles from '../home.module.scss';
import { Button, Typography } from "@mui/material";

export function AskAbout() {
  return (
    <div className={styles.section} style={{flexDirection: 'row'}}>
      <Typography variant='h5' sx={{color: 'black'}}>
        Hire me for
      </Typography>

      <div style={{marginLeft: '60px'}}>
        <Button variant='contained'>Consulting</Button>
        <Button variant='contained' color='secondary' sx={{marginLeft: '10px'}}>Project work</Button>
      </div>
    </div>
  );
}
