import React, { useState, useEffect } from 'react';
import Admin from './Admin';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material'; // Import delete icon
import api from './API/jsonapi';

const Inquiry = () => {
  const [checkoutData, setCheckoutData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.get('/Inquiry');
      setCheckoutData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/Inquiry/${id}`);
      // After successful deletion, fetch data again to update the state
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <Admin />

      {checkoutData && checkoutData.length > 0 && (
        <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "265px", marginTop: '20px', width: '80%' }}>
          <Typography variant="h4">Checkout Form Data</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Message</TableCell>
                  <TableCell>Action</TableCell> {/* Add new column for delete button */}
                </TableRow>
              </TableHead>
              <TableBody>
                {checkoutData.map((dataItem, index) => (
                  <TableRow key={index}>
                    <TableCell>{dataItem.name}</TableCell>
                    <TableCell>{dataItem.email}</TableCell>
                    <TableCell>{dataItem.address}</TableCell>
                    <TableCell>{dataItem.phoneNumber}</TableCell>
                    <TableCell>{dataItem.message}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDelete(dataItem.id)} aria-label="delete">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </div>
  );
}

export default Inquiry;
