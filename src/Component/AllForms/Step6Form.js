import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormImg5 from '../../assets/FormImg5.jpg';

const Step6Form = ({ errors, touched }) => {
  const handleConfirm = async (formData) => {
    try {
      // Make a PATCH request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/business-information', formData);

      console.log('Owner details sent to the server:', formData);
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
        ownerFullName: '',
        ownerPhoneNumber: '',
        ownerEmailAddress: '',
        ownerAddress: '',
      }}
    >
      {({ values }) => (
        <Form id="step6Form">
          <Box>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <img src={FormImg5} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
              </Grid>
              <Grid item xs={12} md={8} style={{ marginBottom: '230px' }}>

                <Typography variant="h6" gutterBottom>
                  Owner's Details
                </Typography>

                <Field
                  name="ownerFullName"
                  as={TextField}
                  required
                  label="Owner/Founder's Full Name"
                  fullWidth
                  margin="normal"
                  error={errors.ownerFullName && touched.ownerFullName}
                  helperText={touched.ownerFullName && errors.ownerFullName}
                />

                <Field
                  name="ownerPhoneNumber"
                  as={TextField}
                  required
                  label="Owner/Founder's Phone Number"
                  fullWidth
                  margin="normal"
                  error={errors.ownerPhoneNumber && touched.ownerPhoneNumber}
                  helperText={touched.ownerPhoneNumber && errors.ownerPhoneNumber}
                />

                <Field
                  name="ownerEmailAddress"
                  as={TextField}
                  required
                  label="Owner/Founder's Email Address"
                  fullWidth
                  margin="normal"
                  error={errors.ownerEmailAddress && touched.ownerEmailAddress}
                  helperText={touched.ownerEmailAddress && errors.ownerEmailAddress}
                />

                <Field
                  name="ownerAddress"
                  as={TextField}
                  required
                  label="Owner/Founder's Address"
                  fullWidth
                  multiline
                  rows={2}
                  margin="normal"
                  error={errors.ownerAddress && touched.ownerAddress}
                  helperText={touched.ownerAddress && errors.ownerAddress}
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

export default Step6Form;
