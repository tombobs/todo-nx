import { Button, Dialog, Grid, Link, Typography } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import React, { useState } from 'react';
import { Section } from '../section';
import { environment } from '../../../environments/environment';
import { Flexbox, GlassContainer } from '@todo-nx/react-components';

interface IApp {
  label: string;
  description: string;
  imageName: string;
  url: string;
}

const apps: IApp[] = [
  {
    label: 'Todo-redux-saga',
    description:
      'A feature-rich todo-list application using React & Redux-Saga',
    imageName: 'todo-redux-saga.png',
    url: environment.todoReduxSagaAppUrl,
  },
  {
    label: 'Storytime',
    description:
      'A story writing application built using React, Python and Chat-GPT',
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
      'Authentication and user management, built using React & Redux',
    imageName: 'sso.png',
    url: environment.ssoUiUrl,
  },
  {
    label: 'Wundr',
    description:
      'An e-commerce application built using Angular & NGRX (incomplete)',
    imageName: 'wundr.png',
    url: 'https://www.wearewundr.com/',
  },
];

export function Examples() {
  const [activeExample, setActiveExample] = useState<IApp>();

  return (
    <Section
      style={{
        backgroundImage: `url(/assets/bg.png)`,
        backgroundSize: 'cover',
      }}
    >
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
                  <img
                    onClick={() => setActiveExample(app)}
                    style={{
                      height: 170,
                      width: 290,
                      marginTop: 5,
                      cursor: 'pointer',
                      maxWidth: '70%',
                      objectFit: 'scale-down',
                    }}
                    src={`/assets/apps/${app.imageName}`}
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
          src={`/assets/apps/${activeExample?.imageName}`}
          alt={`Screenshot of ${activeExample?.label} application`}
        />
      </Dialog>
    </Section>
  );
}
