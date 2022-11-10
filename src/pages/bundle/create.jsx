import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';
import Header from '../../Components/Header';

const initialFormValue = {
  projectName: ''
};

const validationSchema = yup.object().shape({
  projectName: yup.string().required('required')
});

function CreateBundlePage() {
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Header title="Create Bundle" />

      <Formik
        initialValues={initialFormValue}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}>
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
          <form onSubmit={handleSubmit}>
            <Box marginBottom={2}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                color="secondary"
                name="projectName"
                label="Project Name"
                value={values.projectName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!touched.projectName && !!errors.projectName}
                helperText={touched.projectName && errors.projectName}
              />
            </Box>

            <Box>
              <Typography variant="body1">Bucket: {values.projectName}-bucket</Typography>
              <Typography variant="body1">User: user.{values.projectName}</Typography>
              <Typography variant="body1">Policy: {values.projectName}-bucket-policy</Typography>
            </Box>

            <Box textAlign="right">
              <Button variant="contained" color="secondary">
                Create
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}

export default CreateBundlePage;
