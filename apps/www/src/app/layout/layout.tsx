import { Banner, Footer } from '@todo-nx/react-components';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';
import { environment } from '../../environments/environment';

export function Layout() {
  return (
    <div className={styles.container}>
      <Banner environment={environment} />

      <Outlet />

      <Footer environment={environment} />
    </div>
  );
}
