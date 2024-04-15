import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Box, Divider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import api from './Component/API/jsonapi';
import { useMediaQuery } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText, IconButton, InputAdornment, TextField } from '@mui/material';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import CallIcon from '@mui/icons-material/Call';
import BusinessIcon from '@mui/icons-material/Business';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Footer from './Pages/Footer';


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [searchValue, setSearchValue] = useState('');
    const [openDrawer, setOpenDrawer] = useState(false);
    const [activeButton, setActiveButton] = useState(null);
    const navigate = useNavigate();
    const itemsPerPage = 4;

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }


    const getPaginationRange = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, users.length);
        return { startIndex, endIndex };
    };

    const { startIndex, endIndex } = getPaginationRange();


    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            cols: 2,
        },
    ];





    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleButtonClick = (link) => {

        setActiveButton(link.title);
    };

    const handleSearch = () => {
        if (searchValue.trim() !== '') {
            navigate(`/profile/${searchValue}`);
        }
    };

    const handleSearchIconClick = () => {
        handleSearch();
    };

    const handleAddBusinessClick = () => {
        navigate('/');
    };



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div style={{ backgroundColor: '#f0f0f0', minHeight: '100vh', }}>
            <AppBar position="fixed" color="inherit" sx={{ backgroundColor: '#444648' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "white" }}>
                        Business Profile
                    </Typography>
                    <TextField
                        placeholder="Search Organization..."
                        variant="outlined"
                        size="small"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
                        sx={{ width: isMobile ? '30%' : '50%', backgroundColor: "white", marginRight: '200px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleSearchIconClick}>
                                        <FaSearch />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        focused={false}
                    />
                    {isMobile ? (
                        <Button onClick={toggleDrawer} sx={{ textTransform: 'none' }}>
                            {openDrawer ? <FaTimes /> : <FaBars />}
                        </Button>
                    ) : (
                        <Button variant="contained" sx={{ mr: 1, height: '40px', py: '5px', backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f' } }} onClick={handleAddBusinessClick}>
                            <BusinessIcon sx={{ color: 'white', paddingRight: '10px' }} />
                            Add Your Business
                        </Button>
                    )}
                </Toolbar>
                <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
                    <Button variant="contained" sx={{ mr: 1, height: '40px', py: '5px' }} onClick={handleAddBusinessClick}>
                        <BusinessIcon sx={{ color: 'white' }} />
                        Add Your Business
                    </Button>
                </Drawer>
            </AppBar>
            <Grid container spacing={2} sx={{ marginTop: '65px', padding: '20px' }}>
                <Grid item xs={12} md={9}>
                    <Grid container spacing={2}>
                    {users.slice(startIndex, endIndex).map(user => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                            <Link to={`/profile/${user.id}`} style={{ textDecoration: 'none' }}>
                                <Card sx={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={user.avatar}
                                        alt="avatar"
                                    />
                                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Typography variant="body2" color="textSecondary" sx={{ fontWeight: 'bold' }}>
                                            {user.businessName}
                                        </Typography>
                                        <Button variant="contained" sx={{ height: '30px', py: '5px', justifyContent: 'end', backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f' } }}>
                                            <CallIcon sx={{ color: 'white' }} />
                                            Call
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
                    </Grid>
                    <Grid container justifyContent="center" sx={{ mt: '30px' }}>
                        <Stack spacing={2}>
                            <Pagination count={Math.ceil(users.length / itemsPerPage)} page={currentPage} onChange={handleChangePage} />
                        </Stack>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:"-15px" }}>
                        <ImageList sx={{ width: 340, height: 750 }} variant="quilted" cols={4} rowHeight={121}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                    <img src={item.img} alt={item.title} loading="lazy" />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default AllUsers;
