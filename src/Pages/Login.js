import React, { useState, useEffect } from 'react';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, Checkbox, FormControlLabel } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import login from '.././assets/login.png';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/dashboard');
        }
    }, []); // Empty dependency array ensures this effect runs only once, on component mount

    const initialValues = {
        username: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSignIn = async (values) => {
        try {
            const response = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                })
            });

            if (!response.ok) {
                throw new Error('Invalid credentials');
            }

            const data = await response.json();
            localStorage.setItem('user-info', JSON.stringify(data));
            localStorage.setItem('token', data.token);
            console.log('API data stored in local storage:', data);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <Paper style={{ height: "100vh", width: '100%', boxShadow: 'none', overflow: 'hidden', backgroundColor: '#E0E5EB' }}>
                <Grid container justifyContent="center" sx={{ display: "flex" }}>
              
                    <Grid item xs={12} sm={8} sx={{ backgroundColor: '#E0E5EB', }}>
                        <img src={login} alt="Background" style={{ width: '80%', height: "100%", objectFit: 'cover', backgroundColor: '#E0E5EB' }} />
                    </Grid>
                  
                    <Grid item xs={12} sm={4} style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'white', marginTop:'-0px' }}>
                        <Grid align='center' >
                            <Avatar style={{ bgcolor: '#6188a3', marginBottom: '10px' }}><LockOutlinedIcon /></Avatar>
                            <Typography variant="h5">Sign In</Typography>
                        </Grid>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSignIn}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        label='Username'
                                        placeholder='Enter username'
                                        fullWidth
                                        required
                                        name="username"
                                        error={errors.username && touched.username}
                                        helperText={touched.username && errors.username}
                                        style={{ marginBottom: '16px' }}
                                    />
                                    <Field
                                        as={TextField}
                                        label='Password'
                                        placeholder='Enter password'
                                        type='password'
                                        fullWidth
                                        required
                                        name="password"
                                        error={errors.password && touched.password}
                                        helperText={touched.password && errors.password}
                                        style={{ marginBottom: '16px' }}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="checkedB" color="primary" />}
                                        label="Remember me"
                                        style={{ marginBottom: '16px' }}
                                    />
                                    <Button type="submit" variant="contained" fullWidth style={{ marginBottom: '10px', backgroundColor: 'rgb(214, 179, 114)', color: 'white' }}>SIGN IN</Button>
                                    <Typography>
                                        <Link href="#" underline="hover">Forgot password?</Link>
                                    </Typography>
                                    <Typography style={{ marginTop: '10px' }}>Don't have an account?
                                        <Link component={RouterLink} to="/home" underline="hover"> Sign Up</Link>
                                    </Typography>
                                </Form>
                            )}
                        </Formik>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

export default Login;
