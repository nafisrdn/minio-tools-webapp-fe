import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import AliasFields from '../AliasForm/AliasFields';

const validationSchema = yup.object().shape({
  name: yup.string().required('required'),
  url: yup.string().required('required'),
  accessKey: yup.string().required('required'),
  secretKey: yup.string().required('required')
});

const initialFormValue = { name: '', url: '', accessKey: '', secretKey: '' };

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
        initialValues={initialFormValue}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <AliasFields
                values={values}
                errors={errors}
                touched={touched}
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

export default NewAliasForm;
