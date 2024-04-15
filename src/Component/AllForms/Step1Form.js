import React, { useState } from 'react';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik'; // Import Formik components
import api from '../API/jsonapi';
import card2 from '../../assets/card2.jpg';
import { useNavigate } from 'react-router-dom';

const Step1Form = ({ errors, touched }) => {
  const navigate = useNavigate();

  const initialFormData = {
    businessName: '',
    businessDescription: '',
    businessCategory: '',
    businessLogo: '',
  };

  const handleSubmit = async (formData) => {
    try {
      console.warn(formData);
      const response = await api.post('/users', formData);
      console.log('Product created:', response.data);
      navigate('/profile', { formData }); // Assuming '/profile' is the route for the Profile component
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
    <Form id="step1Form">
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


          <TextField
                  type="file"

                  name="businessLogo"
                  label="Business Logo"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    accept: "image/*",
                  }}
                  onChange={(event) => {
                   // setFieldValue("businessLogo", event.currentTarget.files[0]);
                  }}
                />


        </Grid>
      </Grid>
    </Box>
  </Form>
  );
};

export default Step1Form;

