import React, { useState } from 'react';
import { Box, TextField, Grid, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import api from '../API/jsonapi';
import FormImg1 from '../../assets/FormImg1.jpg';

export const Step2Form = ({ errors, touched }) => {
  const initialFormData = {
    businessAddress: '',
    businessPhoneNumber: '',
    businessEmailAddress: '',
    businessWebsite: '',
    mapEmbed: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.warn(formData);
      const response = await api.post('/users', formData);
      console.log('Product created:', response.data);
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  return (
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


          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default Step2Form;
