import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material';
import PropTypes from 'prop-types';

function ConfirmationDialog(props) {
  const { open, title, description, onAgree, onClose, agreeText, closeText } = props;

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>{title}</DialogTitle>

      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button color="error" onClick={onClose}>
          {closeText}
        </Button>
        <Button color="secondary" variant="contained" onClick={onAgree}>
          {agreeText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export const defaultProps = {
  description: null,
  onAgree: null,
  onClose: null,
  agreeText: 'Continue',
  closeText: 'Cancel'
};

export const propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onAgree: PropTypes.func,
  onClose: PropTypes.func,
  agreeText: PropTypes.string,
  closeText: PropTypes.string
};

ConfirmationDialog.defaultProps = defaultProps;

ConfirmationDialog.propTypes = propTypes;

export default ConfirmationDialog;
