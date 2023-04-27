import {Outlet} from 'react-router';
import {Header} from './header/header';
import styles from './layout.module.scss'
import {Sidebar} from './sidebar/sidebar';
import {useState} from 'react';
import {ConfirmationDialog} from '../shared/confirmation-dialog/confirmation-dialog';

export function Layout() {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);
  const layoutClassName = styles.layout + (sidebarExpanded ? ` ${styles.sidebarExpanded}` : '');

  return (
    <div className={layoutClassName}>
      <a href="https://github.com/tombobs/todo-nx" style={{position: 'absolute', right: '0'}}>
        <img decoding="async" loading="lazy" width="149" height="149"
                                            src="https://github.blog/wp-content/uploads/2008/12/forkme_right_red_aa0000.png?resize=149%2C149"
                                            className="attachment-full size-full" alt="Fork me on GitHub"
                                            data-recalc-dims="1" />
        </a>

      <Header />
      <Sidebar toggleExpand={() => setSidebarExpanded(!sidebarExpanded)} isExpanded={sidebarExpanded} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <ConfirmationDialog/>
    </div>
  );
}
