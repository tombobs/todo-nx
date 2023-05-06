import styles from '../home.module.scss';
import { Button, Link, Typography } from "@mui/material";
import { environment } from "../../../../../sso-ui/src/environments/environment";
import { ChevronRight } from "@mui/icons-material";
import React from "react";

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
  },
  {
    label: 'Single sign on',
    description: 'a todo list application using redux-saga',
    imageName: 'todo-redux-saga.png',
    url: `${environment.todoReduxSagaAppUrl}?${environment.accessTokenKey}=${localStorage.getItem(environment.accessTokenKey!)}`
  },
  {
    label: 'Wundr',
    description: 'a failed startup that I built an app for (incomplete)',
    imageName: 'todo-redux-saga.png',
    url: `${environment.todoReduxSagaAppUrl}?${environment.accessTokenKey}=${localStorage.getItem(environment.accessTokenKey!)}`
  }
]

export function Examples() {
  return (
    <>

      <div className={styles.section} style={{background: '#B15D46'}}>
        <Typography variant='h4' sx={{margin: '20px'}}>Some examples of my work</Typography>
        {apps.map((app: IApp) =>
          <div className={styles.app}>
            <div className={styles.label}>
              <div>{app.label}</div>
              <div className={styles.description}>{app.description}</div>

              <img style={{marginTop: '5px'}} src={`/assets/apps/${app.imageName}`} alt='Screenshot of todo redux saga application'/>
            </div>

            <Button href={app.url} component={Link} variant='contained'>
              Go to app
              <ChevronRight />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
