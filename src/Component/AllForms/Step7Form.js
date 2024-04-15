import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography } from '@mui/material';
import api from '../API/jsonapi';
import FormImg6 from '../../assets/FormImg6.jpg';





 const Step7Form = ({ errors, touched }) => (
  <Form id="step7Form">
  <Box>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={4}>
        <img src={FormImg6} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
      </Grid>
      <Grid item xs={12} md={8} style={{ marginBottom: '330px' }}>
        <Typography variant="h6" gutterBottom>
          Business Services
        </Typography>
        <Field
          name="servicesOffered"
          as={TextField}
          required
          label="Services Offered"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          error={errors.ownerEmailAddress && touched.ownerEmailAddress}
          helperText={touched.ownerEmailAddress && errors.ownerEmailAddress}
         
          />
      </Grid>
    </Grid>
  </Box>
</Form>
);

 export default Step7Form;
