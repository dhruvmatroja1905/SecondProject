import React, { useState, useEffect } from 'react';
import Admin from './Admin';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material'; // Import delete icon
import api from './API/jsonapi';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';

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
    <div style={{backgroundColor: '#aeaeae24',  minHeight: '100vh'}}>
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
            to="/inquiry"
            aria-current="page"
            sx={{color:'white'}}
          >
           Orders
          </Link>
        </Breadcrumbs>
      </div>

    </Box>

      {checkoutData && checkoutData.length > 0 && (
        <Box component="main" sx={{ flexGrow: 1, p: 3,marginLeft: '285px', marginTop: '-10px', width: '75%' }}>
          <Typography variant="h4">Order Form Data</Typography>
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
                      <IconButton onClick={() => handleDelete(dataItem.id)} aria-label="delete" >
                        <Delete sx={{color:'red'}} />
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
