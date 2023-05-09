import { createTheme, PaletteColor, Theme } from '@mui/material';
import { theme } from '@todo-nx/theme';
import { blue, pink, yellow } from "@mui/material/colors";

const { palette } = createTheme();


declare module "@mui/material/styles" {
  interface Palette {
    boyColor?: PaletteColor;
    girlColor?: PaletteColor;
  }
  interface PaletteOptions {
    boyColor?: PaletteColor;
    girlColor?: PaletteColor;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    boyColor?: true;
    girlColor?: true;
  }
}

export const storytimeTheme: Theme = {
  ...theme,
  palette: {
    ...theme.palette,
    boyColor: palette.augmentColor({ color: blue }),
    girlColor: palette.augmentColor({ color: pink }),
    primary: {
      ...theme.palette.primary,
      main: '#e8df90'
    },
    secondary: {
      ...theme.palette.primary,
      main: '#5997FFFF'
    }
  }
}

