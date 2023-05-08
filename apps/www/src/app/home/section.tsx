import React, { CSSProperties } from 'react';
import { Box } from '@mui/material';
import { Flexbox } from "@todo-nx/react-components";

export interface SectionProps {
  style?: CSSProperties;
  children: any;
}

export function Section({ style, children }: SectionProps) {
  const mergedStyles = {
    px: { xs: 2, sm: 12, md: 20 },
    py: { xs: 6, sm: 12, lg: 12 },
    color: 'white',
    ...style,
  };
  return (
    <Flexbox sx={mergedStyles} >
      {children}
    </Flexbox>
  );
}
