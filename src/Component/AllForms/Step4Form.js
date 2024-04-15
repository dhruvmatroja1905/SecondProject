import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography } from '@mui/material';
import api from '../API/jsonapi';
import FormImg3 from '../../assets/FormImg3.jpg';

 const Step4Form = ({ errors, touched}) => (
  <Form id="step4Form">
  <Box>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={4}>
        <img src={FormImg3} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
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
</Form>
 );

 export default Step4Form;