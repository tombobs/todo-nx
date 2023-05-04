import { CircularProgress } from '@mui/material';

export interface LoadingWrapperProps {
  loading: boolean;
  children: any;
  message?: string;
  size?: number;
  color?: string;
  minHeight?: string;
}

export function LoadingWrapper({loading, children, message, size, color, minHeight}: LoadingWrapperProps) {
  size = size ?? 25;
  color = color ?? 'white';
  minHeight = minHeight ?? '24px'

  return (
    <>
      {loading &&
        <div style={{minHeight, display: 'flex', alignItems: 'center' }}>
          <CircularProgress sx={{color}} size={size}/>
          {message && <span style={{marginLeft: '10px'}}>{message}</span>}
        </div>

      || children}
    </>
  );
}
