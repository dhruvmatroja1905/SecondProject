import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography } from '@mui/material';
import api from '../API/jsonapi';
import FormImg7 from '../../assets/FormImg6.jpg';

const Step8Form = ({ errors, touched }) => (
  <Form id="step8Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4}>
          <img src={FormImg7} alt="Business Logo" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8} style={{marginBottom:'70px' }}>
          <Typography variant="h6" gutterBottom>
            Use ful Links
          </Typography>

          <Field
            name="facebookURL"
            as={TextField}
            label="Facebook URL"
            fullWidth
            margin="normal"
            error={errors.facebookURL && touched.facebookURL}
            helperText={touched.facebookURL && errors.facebookURL}

          />


          <Field
            name="twitterURL"
            as={TextField}
            label="Twitter URL"
            fullWidth
            margin="normal"
            error={errors.twitterURL && touched.twitterURL}
            helperText={touched.twitterURL && errors.twitterURL}

          />


          <Field
            name="instagramURL"
            as={TextField}
            label="Instagram URL"
            fullWidth
            margin="normal"
            error={errors.instagramURL && touched.instagramURL}
            helperText={touched.instagramURL && errors.instagramURL}

          />


          <Field
            name="linkdinURL"
            as={TextField}
            label="Linkdin URL"
            fullWidth
            margin="normal"
            error={errors.linkdinURL && touched.linkdinURL}
            helperText={touched.linkdinURL && errors.linkdinURL}

          />

          <Field
            name="githubURL"
            as={TextField}
            label="Github URL"
            fullWidth
            margin="normal"
            error={errors.githubURL && touched.githubURL}
            helperText={touched.githubURL && errors.githubURL}

          />


        </Grid>
      </Grid>
    </Box>
  </Form>
);

export default Step8Form;
