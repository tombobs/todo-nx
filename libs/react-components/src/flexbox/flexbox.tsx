import { Box, SxProps } from "@mui/material";
import { ReactNode } from 'react';

export interface FlexboxProps {
  children: ReactNode;
  sx?: SxProps;
}

export function Flexbox({sx, children}: FlexboxProps) {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        ...sx
      }}
    >
      {children}
    </Box>
  );
}
