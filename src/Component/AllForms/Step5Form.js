import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Box, TextField, Grid, Typography, Button } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormImg4 from '../../assets/FormImg4.jpg';

const Step5Form = ({ errors, touched }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.currentTarget.files);
  };

  const handleConfirm = async (formData) => {
    try {
      const formDataWithFiles = new FormData();

      // Append selected files to FormData
      for (let file of selectedFiles) {
        formDataWithFiles.append('gallery', file);
      }

      // Append other form data fields to FormData
      for (let key in formData) {
        formDataWithFiles.append(key, formData[key]);
      }

      // Make a POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/business-information', formDataWithFiles, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Business gallery data sent to the server:', formDataWithFiles);
      console.log('Server response:', response.data);

      toast.success('Your data has been successfully added!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });

      // Optionally navigate to another page after successful submission
     
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('An error occurred while submitting the form.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    }
  };

  return (
    <Formik
      initialValues={{
        uploadedFiles: '',
        youtubeLinks: '',
      }}
    >
      {({ values }) => (
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

                <input
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
                    multiple: true,
                  }}
                  onChange={handleFileChange}
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
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleConfirm(values)}
          >
            Confirm
          </Button>
          <ToastContainer />
        </Form>
      )}
    </Formik>
  );
};

export default Step5Form;
