import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField
} from '@mui/material';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const textFieldProps = {
  fullWidth: true,
  variant: 'outlined',
  margin: 'normal'
};

function NewAliasForm(props) {
  const { visible, onClose, onSubmit } = props;

  const handleFormSubmit = (values) => {
    // TODO
    console.log(values);

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Dialog open={visible} fullWidth maxWidth="md" onClose={onClose}>
      <DialogTitle>New Alias</DialogTitle>
      <Formik
        initialValues={{ name: '', url: '', accessKey: '', secretKey: '' }}
        onSubmit={handleFormSubmit}>
        {({ handleSubmit, values, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                fullWidth={textFieldProps.fullWidth}
                variant={textFieldProps.variant}
                margin={textFieldProps.margin}
                name="name"
                label="Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth={textFieldProps.fullWidth}
                variant={textFieldProps.variant}
                margin={textFieldProps.margin}
                name="url"
                label="URL"
                value={values.url}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth={textFieldProps.fullWidth}
                variant={textFieldProps.variant}
                margin={textFieldProps.margin}
                name="accessKey"
                label="accessKey"
                value={values.accessKey}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <TextField
                fullWidth={textFieldProps.fullWidth}
                variant={textFieldProps.variant}
                margin={textFieldProps.margin}
                type="password"
                name="secretKey"
                label="secretKey"
                value={values.secretKey}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </DialogContent>
            <DialogActions>
              <Button color="error" onClick={onClose}>
                Cancel
              </Button>
              <Button color="secondary" variant="contained" type="submit">
                Create
              </Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

NewAliasForm.defaultProps = {
  onSubmit: null,
  visible: false
};

NewAliasForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  visible: PropTypes.bool
};

export default NewAliasForm;
