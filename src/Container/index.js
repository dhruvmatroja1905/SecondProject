import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from '../Pages/Login';
import Signup from '../Pages/Register';

const SignInOutContainer = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const paperStyle = {
        width: '95%', // Adjusted for better responsiveness
        maxWidth: '1650px', // Adjusted for better responsiveness
        margin: '20px auto',
  
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    return (
        <Paper elevation={20} style={paperStyle}>
            <Tabs
                value={value}
               
              
                variant="fullWidth"
                onChange={handleChange}
                aria-label="disabled tabs example"
                TabIndicatorProps={{ style: { backgroundColor: 'orange' } }} // Change indicator color to orange
       
            >
            <Tab label="Sign In" textColor="orange" /> {/* Change text color to orange */}
            <Tab label="Sign Up" textColor="orange" /> 
            </Tabs>
            <TabPanel value={value} index={0}>
                <Login handleChange={handleChange} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Signup />
            </TabPanel>
        </Paper>
    );
}

export default SignInOutContainer;
