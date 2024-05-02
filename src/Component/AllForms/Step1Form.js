import React, { useState } from 'react';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import api from '../API/jsonapi';
import card2 from '../../assets/card2.jpg';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Step1Form = ({ errors, touched }) => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file

  const initialFormData = {
    businessName: '',
    businessDescription: '',
    businessCategory: '',
    
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // Save the selected file in state
  };

  const handleConfirm = async (formData) => {
    try {
      // Create a FormData object to send file data
      const formDataWithFile = new FormData();
      formDataWithFile.append('businessLogo', selectedFile); // Append the file to FormData

      // Append other form data to FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataWithFile.append(key, value);
      });

      // Send a POST request to the server with FormData
      const response = await axios.post('http://localhost:5000/business-information', formDataWithFile, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
        },
      });

      console.log('Business information sent to the server:', formData);
      console.log('Server response:', response.data);

      toast.success('Your data has been successfully added!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('An error occurred while submitting the form.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Formik initialValues={initialFormData}>
      {({ values }) => (
        <Form id="step1Form" action="/upload" method="POST" encType="multipart/form-data">
          <Box>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} md={4}>
                <img src={card2} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
              </Grid>
              <Grid item xs={12} md={8} style={{ marginBottom: '190px' }}>
                <Typography variant="h6" gutterBottom>
                  Business Information
                </Typography>
                <Field
                  name="businessName"
                  as={TextField}
                  required
                  label="Business Name"
                  fullWidth
                  margin="normal"
                  error={errors.businessName && touched.businessName}
                  helperText={touched.businessName && errors.businessName}
                />
                <Field
                  name="businessDescription"
                  as={TextField}
                  required
                  label="Business Description/Overview"
                  fullWidth
                  margin="normal"
                  error={errors.businessDescription && touched.businessDescription}
                  helperText={touched.businessDescription && errors.businessDescription}
                />
                <Field
                  name="businessCategory"
                  as={TextField}
                  required
                  label="Business Industry/Category"
                  fullWidth
                  margin="normal"
                  error={errors.businessCategory && touched.businessCategory}
                  helperText={touched.businessCategory && errors.businessCategory}
                />
                <input
                  type="file"
                  name="businessLogo"
                  label="Business Logo"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    accept: 'image/*',
                  }}
                  onChange={handleFileChange} // Attach onChange event handler to capture the file
                />
                <Button variant="contained" color="primary" onClick={() => handleConfirm(values)}>
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

export default Step1Form;
