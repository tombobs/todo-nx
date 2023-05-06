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
});

export const theme = responsiveFontSizes(_theme);
