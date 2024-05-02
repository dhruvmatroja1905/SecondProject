import React from 'react';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormImg1 from '../../assets/FormImg1.jpg'
export const Step2Form = ({ errors, touched }) => {
  const navigate = useNavigate();

  const handleConfirm = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/business-information', formData);

      console.log('Business information sent to the server:', formData);
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
        businessAddress: '',
        businessPhoneNumber: '',
        businessEmailAddress: '',
        businessWebsite: '',
        mapEmbed: '',
      }}
    >
      {({ values }) => (
    <Form id="step2Form">
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <img src={FormImg1} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginBottom: '205px' }}>
            <Typography variant="h6" gutterBottom>
              Business Details
            </Typography>



            <Field
              name="businessEmailAddress"
              as={TextField}
              required
              label="Business Email Address"
              fullWidth
              margin="normal"
              error={errors.businessEmailAddress && touched.businessEmailAddress}
              helperText={touched.businessEmailAddress && errors.businessEmailAddress}
            />

            <Field
              name="businessPhoneNumber"
              as={TextField}
              required
              label="Business Phone Number"
              fullWidth
              margin="normal"
              error={errors.businessPhoneNumber && touched.businessPhoneNumber}
              helperText={touched.businessPhoneNumber && errors.businessPhoneNumber}

            />

            <Field
              name="businessWebsite"
              as={TextField}
              required
              label="Business Website"
              fullWidth
              margin="normal"
              error={errors.businessWebsite && touched.businessWebsite}
              helperText={touched.businessWebsite && errors.businessWebsite}
            />


            <Field
              name="businessAddress"
              as={TextField}
              required
              label="Business Address"
              fullWidth
              margin="normal"
              multiline
              rows={2}
              error={errors.businessAddress && touched.businessAddress}
              helperText={touched.businessAddress && errors.businessAddress}
            />


            <Field
              name="mapEmbed"
              as={TextField}

              label="Map Embed (iframe)"
              fullWidth
              margin="normal"
            />
            <Button
            variant="contained"
            color="primary"
            onClick={() => handleConfirm(values)}
          >
            Confirm
          </Button>
          <ToastContainer />

          </Grid>
        </Grid>
      </Box>
    </Form>
  )}
  </Formik>
  );
};

export default Step2Form;
