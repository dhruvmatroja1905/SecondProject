import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import api from '../Component/API/jsonapi';

const TryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    mobile: '',
    address: ''
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users', formData);
      console.log('Form submitted:', response.data);

      // Save form data and ID to local storage
      localStorage.setItem('formData', JSON.stringify({ ...formData, id: response.data.id }));


      // Optionally, you can reset the form here
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        mobile: '',
        address: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                User Form
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  margin="normal"
                  variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TryForm;
