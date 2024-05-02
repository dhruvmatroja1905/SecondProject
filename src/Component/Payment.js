import React, { useState } from 'react';
import Admin from './Admin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Typography } from '@mui/material';
import { Box,  } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

const Payment = () => {
    const [fields, setFields] = useState([{ key: '', number: '' }]);
    const [qrCode, setQrCode] = useState(null);

    // Function to handle adding a new field
    const handleAddField = () => {
        setFields([...fields, { key: '', number: '' }]);
    };

    // Function to handle removing the last field
    const handleRemoveField = () => {
        if (fields.length > 1) {
            const newFields = [...fields];
            newFields.pop();
            setFields(newFields);
        }
    };

    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const newFields = [...fields];
        newFields[index][name] = value;
        setFields(newFields);
    };

    const handleQrCodeUpload = (event) => {
        const file = event.target.files[0];
        setQrCode(file);
    };

    const handleSubmit = () => {
    
        toast.success('Data added successfully!');
    };

    return (
        <div style={{backgroundColor: '#aeaeae24',  minHeight: '100vh'}}>
            <ToastContainer />
            <div>
                <Admin />
       


            <Box sx={{ display: 'flex', width:'70%',alignItems: 'center', marginTop: '5px', width: '70%', marginLeft:'310px',backgroundColor: '#444648', px:'20px', py:'10px',  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <div role="presentation">
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" component={RouterLink} to="/home" sx={{color:'white'}}>
                  LOGIN
                </Link>
                <Link underline="hover" color="inherit" component={RouterLink} to="/dashboard" sx={{color:'white'}}>
                  DASHBOARD
                </Link>
                <Link
                  underline="hover"
                  color="text.primary"
                  component={RouterLink}
                  to="/payment"
                  aria-current="page"
                  sx={{color:'white'}}
                >
                  Payment
                </Link>
              </Breadcrumbs>
            </div>

          </Box>

            <div style={{  width: '70%' ,marginLeft: '310px', marginTop: '10px', }}>
            <Typography variant="h4">Choose Payment Mode</Typography>
                {fields.map((field, index) => (
                    <div key={index} style={{ display: 'flex', marginBottom: '10px', marginTop:'20px' }}>
                        <input
                            type="text"
                            placeholder="Key"
                            name="key"
                            value={field.key}
                            onChange={(e) => handleInputChange(index, e)}
                            style={{
                                flex: 1,
                                padding: '8px',
                                marginRight: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '16px',
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Number"
                            name="number"
                            value={field.number}
                            onChange={(e) => handleInputChange(index, e)}
                            style={{
                                flex: 1,
                                padding: '8px',
                                marginRight: '5px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                fontSize: '16px',
                            }}
                        />
                        <input
                    type="file"
                    accept=".png, .jpeg, .jpg"
                    onChange={handleQrCodeUpload}
                    style={{ marginRight: '10px' }}
                />
               
                    <button
                    onClick={() => {
                        // Handle QR code upload logic here
                        console.log("Uploaded QR code:", qrCode);
                    }}
                    style={{
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '5px',
                        backgroundColor: '#ff983f',
                        color: 'white',
                        fontSize: '16px',
                        cursor: 'pointer',
                        marginRight:'10px',
                    }}
                >
                    Upload QR Code
                </button>

                        {index === fields.length - 1 ? (
                            <button
                                onClick={handleAddField}
                                style={{
                                    padding: '8px 16px',
                                    marginRight: '5px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}
                            >
                                +
                            </button>
                        ) : (
                            <button
                                onClick={handleRemoveField}
                                style={{
                                    padding: '8px 16px',
                                    marginRight: '5px',
                                    border: 'none',
                                    borderRadius: '5px',
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                }}
                            >
                                -
                            </button>
                        )}
                    </div>
                ))}

                <div>
                    <button
                        onClick={handleSubmit}
                        style={{
                            padding: '8px 16px',
                            border: 'none',
                            borderRadius: '5px',
                            backgroundColor: '#ff983f',
                            color: 'white',
                            fontSize: '16px',
                            cursor: 'pointer',
                            marginTop: '10px',
                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Payment;


