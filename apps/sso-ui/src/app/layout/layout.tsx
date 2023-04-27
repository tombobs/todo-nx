import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import {Footer} from '../footer/footer';

export function Layout() {
  return (
    <div className={styles.container}>
      <Outlet />
      <Footer />
    </div>
  );
}
