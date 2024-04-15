import React, { useState , useEffect} from 'react';
import Admin from './Admin';
import { Box, IconButton, Typography } from '@mui/material';


import AddIcon from '@mui/icons-material/Add';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Dialog from './dialog'; // Importing the dialog component
import { useNavigate } from 'react-router-dom';





const Project = () => {
  const [openDialog, setOpenDialog] = useState(false); // State to control the dialog visibility
const navigate = useNavigate()
  // Function to handle opening the dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Function to handle closing the dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  
  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to home page if user is not logged in
      navigate('/home');
    }
  }, [navigate]);

  return (
    <div  style={{ backgroundColor: '#aeaeae24', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex'}}>
        <Admin />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {/* Adding breadcrumbs here */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '90px',marginRight:'40px',  backgroundColor: '#444648', px:'20px', py:'10px',  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
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
                  to="/project"
                  aria-current="page"
                  sx={{color:'white'}}
                >
                  PROJECT
                </Link>
              </Breadcrumbs>
            </div>

          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px', width: '400px', height: '300px', border: '1px solid orange', padding: '20px', borderRadius: '10px', marginLeft:'250px' , backgroundColor:'white'}}>
            <IconButton onClick={handleOpenDialog} sx={{ color: 'blue', width: '100px', height: '100px', borderRadius: '50%', marginTop:'50px',backgroundColor: 'transparent' }}>
              <AddIcon sx={{ color: '#FF6600', width: '60px', height: '60px' }} />
            </IconButton>
            <Typography sx={{ color: '#FF6600', marginTop: '10px' }}>Add Business</Typography>
          </Box>


        </Box>
      </Box>
      {/* Render the dialog component conditionally */}
      {openDialog && <Dialog handleCloseDialog={handleCloseDialog} />}



    </div>


  );
};

export default Project;
