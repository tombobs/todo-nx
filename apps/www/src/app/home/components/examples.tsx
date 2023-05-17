import { Button, Dialog, Grid, Link, Typography } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import React, { useState } from 'react';
import { Section } from '../section';
import { environment } from '../../../environments/environment';
import {
  Flexbox,
  GlassContainer,
  BackgroundImage,
  Picture, makeUrl
} from "@todo-nx/react-components";
import { breakpoints } from "@todo-nx/theme";

interface IApp {
  label: string;
  description: string;
  imageName: string;
  url: string;
}

const apps: IApp[] = [
  {
    label: 'Angular-snake',
    description: 'The classic mobile game Snake - built with Angular 16 & RXJS',
    imageName: 'snake.png',
    url: 'https://snake.tom-roberts.dev',
  },
  {
    label: 'Todo-redux-saga',
    description:
      'A feature-rich todo-list application using React, Redux-Saga & NodeJS',
    imageName: 'todo-redux-saga.png',
    url: environment.todoReduxSagaAppUrl,
  },
  {
    label: 'Storytime',
    description:
      'A story writing application built using React, NodeJS and Chat-GPT',
    imageName: 'storytime.png',
    url: `https://storytime.tom-roberts.dev`,
  },
  {
    label: 'Speaker keep-alive',
    description:
      'A simple site that plays an inaudible (10hz) sound to prevent studio monitor speakers from sleeping',
    imageName: 'speaker-keep-alive.png',
    url: 'https://speaker-keep-alive.tom-roberts.dev/',
  },
  {
    label: 'Single sign on',
    description:
      'Authentication and user management, built using React, Redux & NodeJS',
    imageName: 'sso.png',
    url: environment.ssoUiUrl,
  },
  {
    label: 'Wundr',
    description:
      'An e-commerce application built using Angular, NGRX & NodeJS (incomplete)',
    imageName: 'wundr.png',
    url: 'https://www.wearewundr.com/',
  },
];

export function Examples() {
  const [activeExample, setActiveExample] = useState<IApp>();

  return (
    <BackgroundImage src={'bg.png'}>
      <Section>
        <Typography variant="h4" sx={{ margin: '20px' }}>
          Some examples of my work
        </Typography>
        <Grid container spacing={2} sx={{ maxWidth: 1060 }}>
          {apps.map((app: IApp) => (
            <Grid item sm={12} md={6}>
              <GlassContainer>
                <Flexbox
                  key={app.url}
                  sx={{
                    maxWidth: 500,
                    mb: 2,
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 'bold', mb: 0.25 }}
                    variant="body1"
                    color="white"
                  >
                    {app.label}
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant="body2" color="white">
                    {app.description}
                  </Typography>

                  <Flexbox sx={{ p: 1, flexDirection: 'row' }}>
                    <Picture
                      onClick={() => setActiveExample(app)}
                      style={{
                        height: 170,
                        width: 290,
                        marginTop: 5,
                        cursor: 'pointer',
                        maxWidth: '70%',
                        objectFit: 'scale-down',
                      }}
                      src={app.imageName}
                      alt={`Screenshot of ${app.label} application`}
                    />
                    <Button
                      href={app.url}
                      component={Link}
                      target="_blank"
                      variant="contained"
                      color="secondary"
                      sx={{ ml: 3, height: 100, maxWidth: 20, p: 1 }}
                    >
                      <ChevronRight />
                    </Button>
                  </Flexbox>
                </Flexbox>
              </GlassContainer>
            </Grid>
          ))}
        </Grid>

        <Dialog
          open={!!activeExample}
          onClose={() => setActiveExample(undefined)}
          fullWidth
        >
          <img
            src={makeUrl(breakpoints.xxl, activeExample?.imageName)}
            alt={`Screenshot of ${activeExample?.label} application`}
          />
        </Dialog>
      </Section>
    </BackgroundImage>
  );
}
