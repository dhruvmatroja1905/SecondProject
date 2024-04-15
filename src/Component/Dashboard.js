import React from 'react';
import { Box, Typography, Card } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Admin from './Admin';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { BarChart } from '@mui/x-charts/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';


const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const Dashboard = () => {
    return (
        <div style={{ backgroundColor: '#1D1F21', minHeight: '100vh',  }}>
            <Box>
                <Admin />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <Box sx={{ display: 'flex', alignItems: 'center', width: '78%', marginLeft: '280px', marginTop: '-20px', backgroundColor: '#444648', px: '20px', py: '10px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                        <div role="presentation">
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" component={RouterLink} to="/home" sx={{color:'white'}}>
                                    LOGIN
                                </Link>

                                <Link
                                    underline="hover"
                                    color="text.primary"
                                    component={RouterLink}
                                    to="/dashboard"
                                    aria-current="page"
                                    sx={{color:'white'}}
                                >
                                    DASHBOARD
                                </Link>
                            </Breadcrumbs>
                        </div>
                    </Box>

                    {/* Display four cards */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px', width: '60%', marginLeft: '19%', gap: 3 }}>
                        <Card sx={{
                            width: '140%', // Adjust as needed
                            maxWidth: 'none', // Allow the card to exceed its container's width
                            height: '250px',
                            padding: '20px',
                            paddingRight: '250px',
                            background: 'linear-gradient(359deg, #FF6600 0%, #ff983f 98%)',
                        }}>
                            <Typography variant="body1" align="start" color={'white'}>Daily Users</Typography>
                            <Typography variant="body1" align="start" color={'white'} ><h2>84651</h2></Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="body1" align="start" color="white">Today User</Typography>
                                <LeaderboardIcon sx={{ color: 'white', fontSize: '100px', marginLeft: '50px', marginBottom: '30px' }} />
                            </Box>
                        </Card>


                        <Card sx={{
                            width: '140%', // Adjust as needed
                            maxWidth: 'none', // Allow the card to exceed its container's width
                            height: '250px',
                            padding: '20px',
                            paddingRight: '250px',

                            background: 'linear-gradient(133deg, #FF6600 55%, #ff983f 98%)',

                        }}>

                            <Typography variant="body1" align="start" color={'white'}>Daily Users</Typography>
                            <Typography variant="body1" align="start" color={'white'} ><h2>84651</h2></Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="body1" align="start" color="white">Today User</Typography>
                                <PieChartIcon sx={{ color: 'white', fontSize: '100px', marginLeft: '50px', marginBottom: '30px' }} />
                            </Box>

                        </Card>
                        <Card sx={{
                            width: '140%', // Adjust as needed
                            maxWidth: 'none', // Allow the card to exceed its container's width
                            height: '250px',
                            padding: '20px',
                            paddingRight: '250px',

                            background: 'linear-gradient(133deg, #FF6600 14%, #ff983f 83%)',
                        }}>
                            <Typography variant="body1" align="start" color={'white'}>Daily Users</Typography>
                            <Typography variant="body1" align="start" color={'white'} ><h2>84651</h2></Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="body1" align="start" color="white">Today User</Typography>
                                <LeaderboardIcon sx={{ color: 'white', fontSize: '100px', marginLeft: '50px', marginBottom: '30px' }} />
                            </Box>
                        </Card>


                        <Card sx={{
                            width: '140%', // Adjust as needed
                            maxWidth: 'none', // Allow the card to exceed its container's width
                            height: '250px',
                            padding: '20px',
                            paddingRight: '250px',

                            background: 'linear-gradient(133deg, #FF6600 55%, #ff983f 98%)',
                        }}>
                            <Typography variant="body1" align="start" color={'white'}>Daily Users</Typography>
                            <Typography variant="body1" align="start" color={'white'} ><h2>84651</h2></Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography variant="body1" align="start" color="white">Today User</Typography>
                                <LeaderboardIcon sx={{ color: 'white', fontSize: '100px', marginLeft: '50px', marginBottom: '30px' }} />
                            </Box>


                        </Card>

                    </Box>

                    <Box sx={{display:'flex', marginTop: '60px',  marginLeft: '18%', gap: 5, width:'80%',  }}>
                   
                    <BarChart
                    width={400}
                    height={200}
                    sx={{backgroundColor:"#929292"}}
                    series={[
                        { data: pData, label: 'pv', id: 'pvId', color: '#FF6600' }, // Change color here
                        { data: uData, label: 'uv', id: 'uvId', color: '#ff983f' }, // Change color here
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band',  }]}
                  />


                  <BarChart
                  xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
                  series={[{ data: [4, 3, 5], color: '#FF6600' }, // Change color here
                  { data: [1, 6, 3], color: '#ff983f' }, // Change color here
                  { data: [2, 5, 6], color: '#FF6600' }]} // Change color here
                  width={400}
                  height={200}
                  sx={{backgroundColor:"#929292"}}
                />
                    
                    </Box>


                </Box>
            </Box>
        </div>
    );
}

export default Dashboard;
