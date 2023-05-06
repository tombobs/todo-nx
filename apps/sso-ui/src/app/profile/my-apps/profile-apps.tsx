import { Box, Button, Link, Paper } from '@mui/material';
import { environment } from '../../../environments/environment';
import styles from './my-apps.module.scss'
import React from 'react';
import { ChevronRight } from '@mui/icons-material';

interface IApp {
  label: string;
  description: string;
  imageName: string;
  url: string;
}

const apps: IApp[] = [
  {
    label: 'Todo-redux-saga',
    description: 'a todo list application using redux-saga',
    imageName: 'todo-redux-saga.png',
    url: `${environment.todoReduxSagaAppUrl}?${environment.accessTokenKey}=${localStorage.getItem(environment.accessTokenKey!)}`
  }
]

export function ProfileApps() {
  return (
    <div className={styles.container}>
      {apps.map((app: IApp) =>
        <div className={styles.app}>
          <div className={styles.label}>
            <div>{app.label}</div>
            <div className={styles.description}>{app.description}</div>

            <img style={{marginTop: '5px'}} src={`/assets/images/${app.imageName}`} alt='Screenshot of todo redux saga application'/>
          </div>

          <Button href={app.url} component={Link} variant='contained'>
            Go to app
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
