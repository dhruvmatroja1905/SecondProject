import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormImg3 from '../../assets/FormImg3.jpg';

const Step4Form = ({ errors, touched }) => {
  const handleConfirm = async (formData) => {
    try {
      // Make a PATCH request to your backend API endpoint
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
        taxID: '',
        numberOfEmployees: '',
        establishmentDate: '',
        bankAccountInfo: '',
      }}
    >
      {({ values }) => (
        <Form id="step4Form">
          <Box>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <img src={FormImg3} alt="Business Logo" style={{ width: '100%', marginTop: '40px', height:'80%' }} />
              </Grid>
              <Grid item xs={12} md={8} style={{ marginBottom: '340px' }}>
                <Typography variant="h6" gutterBottom>
                  About Business
                </Typography>
                <Field
                  name="taxID"
                  as={TextField}
                  required
                  label="Business Tax ID/EIN"
                  fullWidth
                  margin="normal"
                  error={errors.taxID && touched.taxID}
                  helperText={touched.taxID && errors.taxID}
                />
                <Field
                  name="numberOfEmployees"
                  as={TextField}
                  required
                  label="Number of Employees"
                  type="number"
                  fullWidth
                  margin="normal"
                  error={errors.numberOfEmployees && touched.numberOfEmployees}
                  helperText={touched.numberOfEmployees && errors.numberOfEmployees}
                />
                <Field
                  name="establishmentDate"
                  as={TextField}
                  required
                  label="Date of Business Establishment"
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  error={errors.establishmentDate && touched.establishmentDate}
                  helperText={touched.establishmentDate && errors.establishmentDate}
                />
                <Field
                  name="bankAccountInfo"
                  as={TextField}
                  required
                  label="Business Bank Account Information"
                  fullWidth
                  margin="normal"
                  error={errors.bankAccountInfo && touched.bankAccountInfo}
                  helperText={touched.bankAccountInfo && errors.bankAccountInfo}
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

export default Step4Form;
