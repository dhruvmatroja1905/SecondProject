import React, { useState } from 'react';
import { Box, Grid, Typography, Button, FormControlLabel, Switch, styled } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import FormImg1 from '../../assets/FormImg1.jpg'; // Import your image

// Define custom styled components for FormControlLabel and Switch
const StyledFormControlLabel = styled(FormControlLabel)({
  width: '100%', // Set the width to 100% for full width
  padding: '10px', // Add padding for spacing
  border: '1px solid #ccc', // Add a border with a light gray color
  borderRadius: '4px', // Add border radius for rounded corners
  marginBottom: '10px', // Adjust the margin bottom for consistent spacing between switches
  '&:hover': {
    backgroundColor: '#f5f5f5', // Change background color on hover
  },
});

const StyledSwitch = styled(Switch)({
  '&.Mui-checked': {
    color: '#3f51b5', // Customize the color when the switch is checked
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#ccc', // Customize the track color
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.1)', // Add shadow to the thumb
  },
});

const Step10Form = ({ errors, touched }) => {
  const initialFormData = {
    operational: false,
    gallery: false,
    socialMedia: false,
    services: false,
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = selectedOptions.indexOf(value);
    const newSelectedOptions = [...selectedOptions];

    if (currentIndex === -1) {
      newSelectedOptions.push(value);
    } else {
      newSelectedOptions.splice(currentIndex, 1);
    }

    setSelectedOptions(newSelectedOptions);
  };

  const handleSubmit = () => {
    console.log("Selected Options:", selectedOptions);
    // You can perform any further actions with the selected options here
  };

  return (
    <Form id="step10Form">
    <Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4} >
          <img src={FormImg1} alt="Form Image" style={{ width: '100%', marginTop: '40px' }} />
        </Grid>
        <Grid item xs={12} md={8} sx={{ marginBottom: '320px' }}>
          <Typography variant="h6" gutterBottom>
            Settings
          </Typography>

          {/* Display toggle switches in a single column */}
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <StyledFormControlLabel
                control={<StyledSwitch checked={selectedOptions.indexOf('operation') !== -1} onChange={handleToggle('operation')} />}
                label="Operation"
              />
            </Grid>
            <Grid item>
              <StyledFormControlLabel
                control={<StyledSwitch checked={selectedOptions.indexOf('gallery') !== -1} onChange={handleToggle('gallery')} />}
                label="Gallery"
              />
            </Grid>
            <Grid item>
              <StyledFormControlLabel
                control={<StyledSwitch checked={selectedOptions.indexOf('socialMedia') !== -1} onChange={handleToggle('socialMedia')} />}
                label="Social Media"
              />
            </Grid>
            <Grid item>
              <StyledFormControlLabel
                control={<StyledSwitch checked={selectedOptions.indexOf('services') !== -1} onChange={handleToggle('services')} />}
                label="Services"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
    </Form>
  );
};

export default Step10Form;
