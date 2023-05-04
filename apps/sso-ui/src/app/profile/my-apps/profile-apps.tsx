import { Box, Button, Link, Paper } from '@mui/material';
import { environment } from '../../../environments/environment';
import styles from './my-apps.module.scss'
import React from 'react';
import { ChevronRight } from '@mui/icons-material';

interface IApp {
  label: string;
  description: string;
}

const apps: IApp[] = [
  {label: 'Todo-redux-saga', description: 'a todo list application using redux-saga'}
]

export function ProfileApps() {
  return (
    <div className={styles.container}>
      {apps.map(a =>
        <div className={styles.app}>
          <div className={styles.label}>
            <div>{a.label}</div>
            <div className={styles.description}>{a.description}</div>
          </div>

          <Button href={environment.appUrl} component={Link} variant='contained'>
            Go to app
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
