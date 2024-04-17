import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import api from './API/jsonapi'; // Assuming this is correctly imported
import { useNavigate } from 'react-router-dom';
import qr_img from '../assets/qr_img.png'

function CheckoutForm() {

    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/Inquiry', formData);
      if (response.ok) {
        console.log('Form data submitted successfully!');
        // Handle success as needed, such as displaying a success message
        // Redirect the user to the dashboard, assuming '/dashboard' is the route
        // Replace this with your actual routing logic
      navigate('/dashboard');
      } else {
        console.error('Error submitting form data:', response.statusText);
        // Handle errors, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error submitting form data:', error.message);
      // Handle errors, such as displaying an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'grid' , margin:'10px'}}>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        name="address"
        label="Address"
        value={formData.address}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        name="phoneNumber"
        label="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={2}
      />
      <img src={qr_img} alt='/' />
      <Button
  
      type="submit"
      variant="contained"
      sx={{
        backgroundColor: 'orange',
        '&:hover': {
          backgroundColor: 'orange', // Keep the background color orange on hover
        },
        '&:active': {
          backgroundColor: 'orange', // Keep the background color orange on click
        },
      }}
    >
      Buy now
    </Button>
    
    </form>
  );
}

export default CheckoutForm;
