import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography } from '@mui/material';
import api from '../API/jsonapi';
import FormImg2 from '../../assets/FormImg2.jpg';

const Step3Form = ({errors, touched}) => {
  return (
    <Form id="step3Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FormImg2} alt="Business Logo" style={{ width: '100%', marginTop:'40px' }} />
        </Grid>
        <Grid item xs={12} md={8}  style={{marginBottom:'310px' }}>
          <Typography variant="h6" gutterBottom>Business Timing</Typography>
  
          <Field
            name="openingHour"
            as={TextField}
            type="time"
            required
            label="Opening Hour"
            fullWidth
            margin="normal"
                error={errors.openingHour && touched.openingHour}
            helperText={touched.openingHour && errors.openingHour}
            InputLabelProps={{ shrink: true }}
          />
  
          <Field
            name="closingHour"
            as={TextField}
            type="time"
            required
            label="Closing Hour"
            fullWidth
            margin="normal"
             InputLabelProps={{ shrink: true }}
            error={errors.closingHour && touched.closingHour}
            helperText={touched.closingHour && errors.closingHour}
          />
  
          <Field
            name="weekOffDays"
            as={TextField}
            required
            label="Week Off Day(s)"
            fullWidth
            margin="normal"
            error={errors.weekOffDays && touched.weekOffDays}
            helperText={touched.weekOffDays && errors.weekOffDays}
              />
        </Grid>
      </Grid>
    </Box>
  </Form>
  );

 
};

export default Step3Form;
