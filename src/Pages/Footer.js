import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#333', color: '#fff', py: 3, textAlign: 'center', marginTop:'20px' }}>
            <Typography variant="body2">© 2024 Xcitech Technology. All rights reserved.</Typography>
        </Box>
    );
};

export default Footer;
