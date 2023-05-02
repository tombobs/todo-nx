import { CircularProgress } from '@mui/material';

export interface LoadingWrapperProps {
  loading: boolean;
  children: any;
  message?: string;
  size?: number;
  color?: string;
}

export function LoadingWrapper({loading, children, message, size, color}: LoadingWrapperProps) {
  size = size ?? 25;
  color = color ?? 'white';
  return (
    <>
      {loading &&
        <>
          <CircularProgress sx={{color}} size={size}/>
          {message && <span style={{marginLeft: '10px'}}>{message}</span>}
        </>

      || children}
    </>
  );
}
