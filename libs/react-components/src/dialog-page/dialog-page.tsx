import styles from './dialog-page.module.scss';

export interface DialogPageProps {
  title?: string;
  children: any;
  width?: string;
}

export function DialogPage({title, children, width}: DialogPageProps) {

  width = width ?? '500px';

  return (
    <div className={styles.container}>
      <div className={styles.content} style={{width, borderColor: 'primary.main'}}>
        {title && <h3>{title}</h3>}

        {children}
      </div>
    </div>
  );
}
