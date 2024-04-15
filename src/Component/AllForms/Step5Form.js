import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography } from '@mui/material';
import api from '../API/jsonapi';
import FormImg4 from '../../assets/FormImg4.jpg';

  const Step5Form = ({ errors, touched}) => (
  <Form id="step5Form">
  <Box>
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={4}>
        <img src={FormImg4} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
      </Grid>
      <Grid item xs={12} md={8} style={{ marginBottom: '380px' }}>
        <Typography variant="h6" gutterBottom>
          Business gallery
        </Typography>

        <TextField
        type="file"
      
        name="gallery"
        label="gallery"
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



      
       
        <Field
          name="uploadedFiles"
          as={TextField}
          required
          label="Uploaded Files"
          fullWidth
          margin="normal"
          error={errors.uploadedFiles && touched.uploadedFiles}
          helperText={touched.uploadedFiles && errors.uploadedFiles}
        />
        <Field
          name="youtubeLinks"
          as={TextField}
       
          label="YouTube Video Links"
          fullWidth
          margin="normal"
          error={errors.youtubeLinks && touched.youtubeLinks}
          helperText={touched.youtubeLinks && errors.youtubeLinks}
        />
      </Grid>
    </Grid>
  </Box>
</Form>
 );

 export default Step5Form;

