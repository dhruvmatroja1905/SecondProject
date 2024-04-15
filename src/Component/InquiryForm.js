import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, InputAdornment } from '@mui/material';
import { Person, Email, Phone, Description } from '@mui/icons-material'; // Import icons

function InquiryForm({ open, handleCloseDialog }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '', 
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // You can perform validation and other actions here before submitting the form
    console.log('Form Data:', formData);
    handleCloseDialog(); // Close the dialog after form submission
  };

  return (
    <Dialog open={open} onClose={handleCloseDialog}>
      <DialogTitle>Inquiry</DialogTitle>
      <DialogContent>
        {/* Text field for full name */}
        <TextField
          autoFocus
          margin="dense"
          id="fullName"
          name="fullName"
          label="Full Name"
          type="text"
          fullWidth
          value={formData.fullName}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
        />
        {/* Text field for email */}
        <TextField
          margin="dense"
          id="email"
          name="email"
          label="Email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          margin="dense"
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          type="text"
          fullWidth
          value={formData.phoneNumber}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Phone />
              </InputAdornment>
            ),
          }}
        />
        {/* Text field for description */}
        <TextField
          margin="dense"
          id="description"
          name="description"
          label="Description"
          type="text"
          fullWidth
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Description />
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Cancel</Button>
        {/* Submit button */}
        <Button variant="contained" onClick={handleSubmit}>Send</Button>
      </DialogActions>
    </Dialog>
  );
}

export default InquiryForm;
