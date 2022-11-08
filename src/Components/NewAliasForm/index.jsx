import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Formik } from 'formik';
import AliasFields from '../AliasForm/AliasFields';

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
              <AliasFields values={values} onChange={handleChange} onBlur={handleBlur} />
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
