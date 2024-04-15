import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import api from '../API/jsonapi';
import { Formik, Form, Field } from 'formik';
import { Box, } from '@mui/material';
import FormImg5 from '../../assets/FormImg5.jpg';


const Step6Form = ({ errors, touched }) => (
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
  </Form>
);

export default Step6Form;
