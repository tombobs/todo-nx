import { Button } from '@mui/material';
import { LoadingWrapper } from '../loading-wrapper/loading-wrapper';

export interface SubmitButtonProps {
  children: any;
  disabled?: boolean;
  maxWidth?: string;
  loading?: boolean;
}

const defaults: Partial<SubmitButtonProps> = {
  maxWidth: '100%'
}

export function SubmitButton({ children, disabled, maxWidth, loading }: SubmitButtonProps) {

  maxWidth = maxWidth ?? defaults.maxWidth;

  return (
    <Button variant={'contained'} className='login-btn'
              type='submit' fullWidth disabled={loading! || disabled}
              sx={{ marginTop: '10px', minHeight: '25px', maxWidth }}>
      <LoadingWrapper loading={loading!}>{children}</LoadingWrapper>
    </Button>
  );
}
