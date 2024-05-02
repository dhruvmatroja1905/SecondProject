import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormImg7 from '../../assets/FormImg6.jpg';

const Step8Form = ({ errors, touched }) => {
  const handleConfirm = async (formData) => {
    try {
      // Make a PATCH request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/business-information', formData);

      console.log('Useful links sent to the server:', formData);
      console.log('Server response:', response.data);

      toast.success('Your data has been successfully added!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      // Optionally navigate to another page after successful submission
     
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('An error occurred while submitting the form.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <Formik
      initialValues={{
        facebookURL: '',
        twitterURL: '',
        instagramURL: '',
        linkdinURL: '',
        githubURL: '',
      }}
    >
      {({ values }) => (
        <Form id="step8Form">
          <Box>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <img src={FormImg7} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
              </Grid>
              <Grid item xs={12} md={8} style={{marginBottom:'70px' }}>
                <Typography variant="h6" gutterBottom>
                  Useful Links
                </Typography>

                <Field
                  name="facebookURL"
                  as={TextField}
                  label="Facebook URL"
                  fullWidth
                  margin="normal"
                  error={errors.facebookURL && touched.facebookURL}
                  helperText={touched.facebookURL && errors.facebookURL}
                />

                <Field
                  name="twitterURL"
                  as={TextField}
                  label="Twitter URL"
                  fullWidth
                  margin="normal"
                  error={errors.twitterURL && touched.twitterURL}
                  helperText={touched.twitterURL && errors.twitterURL}
                />

                <Field
                  name="instagramURL"
                  as={TextField}
                  label="Instagram URL"
                  fullWidth
                  margin="normal"
                  error={errors.instagramURL && touched.instagramURL}
                  helperText={touched.instagramURL && errors.instagramURL}
                />

                <Field
                  name="linkdinURL"
                  as={TextField}
                  label="Linkedin URL"
                  fullWidth
                  margin="normal"
                  error={errors.linkdinURL && touched.linkdinURL}
                  helperText={touched.linkdinURL && errors.linkdinURL}
                />

                <Field
                  name="githubURL"
                  as={TextField}
                  label="Github URL"
                  fullWidth
                  margin="normal"
                  error={errors.githubURL && touched.githubURL}
                  helperText={touched.githubURL && errors.githubURL}
                />
              </Grid>
            </Grid>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleConfirm(values)}
          >
            Confirm
          </Button>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
};

export default Step8Form;
