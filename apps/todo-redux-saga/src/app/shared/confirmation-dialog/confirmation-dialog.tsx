import {Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography} from '@mui/material';
import {Close} from '@mui/icons-material';
import {useDispatch, useSelector} from 'react-redux';
import {confirmationDialogSelector, closeConfirmationDialog} from './confirmation-dialog.store';

export function ConfirmationDialog() {
  const { message, onSubmit, isOpen } = useSelector(confirmationDialogSelector);
  const dispatch = useDispatch();

  function onClose(): void {
    dispatch(closeConfirmationDialog())
  }

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Are you sure?</DialogTitle>

      <Box position="absolute" top={0} right={0}>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>

      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>

      <DialogActions>
        <Button color="primary" variant="contained" onClick={onClose}>
          Cancel
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={() => {
            if (onSubmit) {
              onSubmit();
            }
            onClose();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
