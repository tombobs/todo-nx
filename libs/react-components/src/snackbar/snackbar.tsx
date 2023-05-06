import { Alert, Snackbar as MUISnackbar, SnackbarOrigin } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbar, snackbarSelector } from './snackbar.store';
import Fade from '@mui/material/Fade';

export interface SnackbarProps {
  anchorOrigin?: SnackbarOrigin;
}

export function Snackbar({anchorOrigin}: SnackbarProps = {}) {
  const { isOpen, severity, message, fadeOutSeconds } = useSelector(snackbarSelector);
  const dispatch = useDispatch();

  anchorOrigin = anchorOrigin || {vertical: 'top', horizontal: 'center'};

  return (
    <MUISnackbar open={isOpen} autoHideDuration={fadeOutSeconds * 1000}
                 onClose={() => dispatch(closeSnackbar())}
                 anchorOrigin={anchorOrigin}
                 TransitionComponent={Fade}>
      <Alert severity={severity} sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        fontSize: '16px',
        '& .MuiAlert-icon': {
          fontSize: 'inherit'
        }
      }}>
        {message}
      </Alert>
    </MUISnackbar>
  );
}
