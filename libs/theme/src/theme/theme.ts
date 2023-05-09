import { createTheme, responsiveFontSizes } from '@mui/material';
import palette from './palette.module.scss';

const _theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.secondary,
    },
    error: {
      main: palette.error,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: 'bolder',
          textTransform: 'uppercase',
          color: '#292929',
          textDecoration: 'none',
          borderBottom: '2px solid',
          paddingBottom: '1px',
          opacity: '0.8',
          '&:hover': {
            opacity: '1',
          },
          '&.soft': {
            fontWeight: 'normal',
            fontSize: '0.7em',
            borderWidth: '1px',
            '&:hover': {
              borderWidth: '2px',
              fontWeight: 'bold',
            },
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: [
      'Ubuntu'
    ].join(','),
  }
});

export const theme = responsiveFontSizes(_theme);

theme.typography = {
  ...theme.typography,
  h3: {
    ...theme.typography.h3,
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.25rem',
    },
  },
  h4: {
    ...theme.typography.h4,
    [theme.breakpoints.only('xs')]: {
      fontSize: '1.15rem',
    },
  },
  h5: {
    ...theme.typography.h5,
    [theme.breakpoints.only('xs')]: {
      fontSize: '0.9rem',
    },
  },
  body1: {
    ...theme.typography.body1,
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2rem',
    },
  },
  body2: {
    ...theme.typography.body2,
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
    },
  },
}

