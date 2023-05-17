import React, { CSSProperties, ReactNode } from 'react';
import { Picture } from './picture';
import { Box } from '@mui/material';

export type BackgroundImageProps = {
  src: string;
  alt?: string;
  children: ReactNode;
  sx?: CSSProperties;
}

export function BackgroundImage({src, alt, children, sx}: BackgroundImageProps) {
  return (
    <Box sx={{position: 'relative', width: '100%', height: '100%', ...sx}}>
      <Picture src={src} alt={alt} styles={{position: 'absolute', zIndex: -1}} />
      {children}
    </Box>
  );
}
