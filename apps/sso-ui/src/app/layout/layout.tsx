import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import { Banner, Footer, Snackbar } from '@todo-nx/react-components';

export function Layout() {

  return (
    <div className={styles.container}>
      <Banner/>
      <Outlet/>
      <Footer/>
      <Snackbar />
    </div>
  );
}
