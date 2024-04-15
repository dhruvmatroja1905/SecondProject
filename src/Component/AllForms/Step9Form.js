import React from 'react';
import { Box, TextField, Grid, Typography, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';
import { Form, Field } from 'formik'; // Import Formik components
import card2 from '../../assets/card2.jpg';

const Step9Form = ({ errors, touched }) => {
  const initialFormData = {
    images:'',
    title:'',
    price:'',
    selectedOption: '', // New field for the selected option
  };

  return (
    <Form id="step9Form">
      <Box>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <img src={card2} alt="Product Image" style={{ width: '100%', marginTop: '40px' }} />
          </Grid>
          <Grid item xs={12} md={8} sx={{ marginBottom: '120px' }}>
            <Typography variant="h6" gutterBottom>
              Product Information
            </Typography>

            <TextField
              type="file"
              required
              name="images"
              label="Product Image"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                accept: "image/*",
              }}
              error={errors.images && touched.images}
              helperText={touched.images && errors.images}
              onChange={(event) => {
                // setFieldValue("businessLogo", event.currentTarget.files[0]);
              }}
            />

            <Field
              name="title"
              as={TextField}
              required
              label="Product Title"
              fullWidth
              margin="normal"
              error={errors.title && touched.title}
              helperText={touched.title && errors.title}
            />

            <Field
              name="price"
              as={TextField}
              required
              label="Product Price"
              fullWidth
              margin="normal"
              error={errors.price && touched.price}
              helperText={touched.price && errors.price}
            />

            {/* Radio button group for selecting options */}
            <FormLabel id="demo-radio-buttons-group-label">Button Name</FormLabel>
            <RadioGroup
              aria-label="product-options"
              name="selectedOption"
              defaultValue="" // Set default value to empty
              onChange={(event) => {
                // Set the selected option to the form data
                // setFieldValue('selectedOption', event.target.value);
              }}
            >
              <FormControlLabel value="buyNow" control={<Radio />} label="Buy Now" />
              <FormControlLabel value="addToCart" control={<Radio />} label="Add to Cart" />
              <FormControlLabel value="addItems" control={<Radio />} label="Add Items" />
            </RadioGroup>
          </Grid>
        </Grid>
      </Box>
    </Form>
  );
};

export default Step9Form;
