import React, { useState } from 'react';
import Admin from './Admin';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import qr_img from '../assets/qr_img.png'; // Correct import statement

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
        // Here you can add your logic to submit the form data
        // For demonstration purposes, let's just show a toast message
        toast.success('Data added successfully!');
    };

    return (
        <div>
            <ToastContainer />
            <div>
                <Admin />
            </div>
            <div style={{ width: '1000px', marginLeft: '300px' }}>
                {fields.map((field, index) => (
                    <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
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
                        backgroundColor: '#4CAF50',
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
                            backgroundColor: '#4CAF50',
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
    );
};

export default Payment;


