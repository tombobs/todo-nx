import { Banner, Footer } from "@todo-nx/react-components";
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss'
import { Button } from "@mui/material";

export function Layout() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Banner absolutePosition={false} />

        <Button variant='contained'>Say hello</Button>
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}
