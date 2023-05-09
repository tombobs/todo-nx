import { Box } from '@mui/material';
import { ReactNode } from "react";

export function GlassContainer({borderColor, children}: {borderColor?: string, children: ReactNode}) {

  borderColor = borderColor || 'secondary.main';
  return (
    <Box
      sx={{background: 'rgba(255, 255, 255, 0.2)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderColor,
      borderStyle: 'solid',
      borderWidth: '3px',
      borderRadius: 1,
      p: { sm: 1, xs: 1 }}}>

      {children}

    </Box>
  );
}
