import React from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Checkbox, FormControlLabel } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import login from '.././assets/login.png'; // Import register image
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
        termsAccepted: Yup.boolean().oneOf([true], 'Terms and conditions must be accepted').required('Terms and conditions must be accepted')
    });

    const handleRegister = (values) => {
        console.log('Registering:', values);
        // Perform registration logic here
    };

    return (
      
            <Paper style={{  height: '100vh', width: '100%', boxShadow: 'none', overflow: 'hidden', backgroundColor:'#E0E5EB' }}>
                <Grid container>
                    {/* Left Side (Image) */}
                    <Grid item xs={12} sm={8} sx={{ backgroundColor:'#E0E5EB' }}>
                        <img src={login} alt="Background" style={{ width: '80%', height: '100%', objectFit: 'cover', }} />
                    </Grid>
                    {/* Right Side (Form) */}
                    <Grid item xs={12} sm={4} style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor:'white' }}>
                        <Grid align='center' style={{ marginBottom: '20px' }}>
                            <Avatar style={{ bgcolor: '#6188a3', marginBottom: '10px' }}><AddCircleOutlineOutlinedIcon /></Avatar>
                            <Typography variant="h5">Sign Up</Typography>
                        </Grid>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleRegister}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        label='Name'
                                        placeholder='Enter your name'
                                        fullWidth
                                        required
                                        name="name"
                                        error={errors.name && touched.name}
                                        helperText={touched.name && errors.name}
                                        style={{ marginBottom: '16px' }}
                                    />
                                    <Field
                                        as={TextField}
                                        label='Email'
                                        placeholder='Enter your email'
                                        type='email'
                                        fullWidth
                                        required
                                        name="email"
                                        error={errors.email && touched.email}
                                        helperText={touched.email && errors.email}
                                        style={{ marginBottom: '16px' }}
                                    />
                                    <Field
                                        as={TextField}
                                        label='Password'
                                        placeholder='Enter your password'
                                        type='password'
                                        fullWidth
                                        required
                                        name="password"
                                        error={errors.password && touched.password}
                                        helperText={touched.password && errors.password}
                                        style={{ marginBottom: '16px' }}
                                    />
                                    <Field
                                        as={TextField}
                                        label='Confirm Password'
                                        placeholder='Confirm your password'
                                        type='password'
                                        fullWidth
                                        required
                                        name="confirmPassword"
                                        error={errors.confirmPassword && touched.confirmPassword}
                                        helperText={touched.confirmPassword && errors.confirmPassword}
                                        style={{ marginBottom: '16px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="termsAccepted" color="primary" />}
                                        label="I accept the terms and conditions."
                                        style={{ marginBottom: '16px' }}
                                    />
                                    {errors.termsAccepted && touched.termsAccepted && (
                                        <Typography color="error" variant="body2">{errors.termsAccepted}</Typography>
                                    )}
                                    <Button type="submit" variant="contained" fullWidth style={{ marginBottom: '10px', backgroundColor: 'orange', color: 'white' }}>SIGN UP</Button>
                                    <Typography>
                                    Already have an account?  <Link component={RouterLink} to="/login" underline="hover"> Sign In</Link>
                                    </Typography>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Paper>
  
    );
}

export default Register;
