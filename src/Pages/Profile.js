import React, { useState, useEffect } from 'react';
import { Container, TextField, Grid, Card, CardContent, CardMedia, Typography, InputAdornment, Button, List, ListItemIcon, ListItemText, Divider, Box, Chip, Icon, } from '@mui/material';
import { GitHub, Twitter, Instagram, Facebook, Language } from '@mui/icons-material';
import { Phone, Email } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import DvrIcon from '@mui/icons-material/Dvr';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useParams } from 'react-router-dom';
import { ListItemButton } from '@mui/material';
import image from '../assets/card1.jpg';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BadgeIcon from '@mui/icons-material/Badge';
import { useTheme } from '@mui/material/styles';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import WeekendIcon from '@mui/icons-material/Weekend';
import CategoryIcon from '@mui/icons-material/Category';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProfileHeader from '../Component/ProfileHeader';
import LanguageIcon from '@mui/icons-material/Language';
import InquiryForm from '../Component/InquiryForm';
import ShareIcon from '@mui/icons-material/Share';
import ShareDialog from '../Component/ShareDialog';
import CallIcon from '@mui/icons-material/Call';
import InfoIcon from '@mui/icons-material/Info';
import SendIcon from '@mui/icons-material/Send';
import { useMediaQuery } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDataRequest , addTocart} from '../Redux/Action/Action/profileAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Profile = () => {

  // Extract userId from route parameters
  const { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.allusers.users);
  console.log(users, "from profile page");

  const [formData, setFormData] = useState([]);

  const [openDialog, setOpenDialog] = useState(false);
  const [open2Dialog, setOpen2Dialog] = useState(false);
  const [review, setReview] = useState('');
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const handle2OpenDialog = () => {
    setOpen2Dialog(true);
  };

  const handleClose2Dialog = () => {
    setOpen2Dialog(false);
  };


  useEffect(() => {

    dispatch(fetchUserDataRequest(id)); // Dispatch the action
  }, [dispatch, id]);

  useEffect(() => {
    if (users) {
      setFormData(users); // Update formData only if users data is available
    }
  }, [users]);

  const handleAddToCart = (product) => {
    console.log('Product added to cart:', product);
    dispatch(addTocart(product)); // Pass the product data to the dispatch function
    toast.success('Item added successfully!');
  };
  

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
  }


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

  const handleSubmit = () => {

    // Retrieve the value of the review from the TextField
    const review = document.getElementById('reviewInput').value;

    // Show alert message with the review content
    alert("Review submitted successfully!\n\nReview: " + review);
  };





  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Container sx={{ py: 2, }} style={{ marginRight: '400px' }}>

        <Grid container spacing={isMobile ? 2 : 4}>

          <Grid container spacing={isMobile ? 2 : 4}>
            <Grid item  lg={12} xs={9}>
              <CardMedia
                component="img"
                src={image}
                alt="avatar"
                style={{
                  width: '129%', // Set width to 100% to ensure responsiveness
                  maxHeight: '50vh', // Adjust the maximum height as needed for your design
                  objectFit: 'cover',
                }}
              />
            </Grid>
          </Grid>


          {/* 1st column for user info*/}
          <Grid item lg={isMobile ? 12 : 4} xs={12}>

            {formData ? ( // Check if formData exists
              <Card key={formData.id} sx={{ mb: 2, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius:'15px' }}> {/* Render a Card for the formData */}
                <CardContent>


                  <CardMedia
                    component="img"
                    height="200" // Set height to auto to maintain aspect ratio
                    width="100%" // Set width to cover the whole card width
                    image={formData.avatar}
                    alt="avatar"
                    sx={{ borderRadius: '0%', mx: 'auto' }}
                  />

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1,}}>
                    <DvrIcon sx={{ fontSize: 'small', }} />{formData.fullName}
                  </Typography>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1, }}>
                    <LocationOnIcon sx={{ fontSize: 'small', }} /> {formData.businessAddress}
                  </Typography>

                  <Box sx={{ display: 'flex', mt: 2 }}>
                    <Button variant="contained" sx={{
                      mr: 1, height: '40px', py: '5px', backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f', 
                      }
                    }}>
                      <CallIcon sx={{ color: 'white' }} />
                      Call
                    </Button>

                    <Button variant="contained" onClick={handleOpenDialog} sx={{
                      height: '40px', py: '5px', backgroundColor: '#ff983f', '&:hover': {backgroundColor: '#ff983f', 
                      }
                    }}>
                      <InfoIcon sx={{ color: 'white', marginBottom: '1px', }} />
                      Inquiry
                    </Button>

                    <Button variant="contained" onClick={handle2OpenDialog} sx={{
                      height: '40px', marginLeft: '8px', py: '5px', backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f', 
                      }
                    }}>
                      <ShareIcon sx={{ fontSize: '20px', width: '30%' }} />
                      Share
                    </Button>
                  </Box>

                </CardContent>
              </Card>
            ) : ( // If formData is null or undefined, render a loading message
              <Typography variant="body1">Loading...</Typography>
            )}

            {/* Dialog box */}
            <InquiryForm open={openDialog} handleCloseDialog={handleCloseDialog} />
            <ShareDialog open={open2Dialog} handleClose={handleClose2Dialog} />


            <Grid item lg={12} >
              <Card sx={{ mb: 2, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius:'15px' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Business Hours</Typography>
                  <Divider />
                  {formData ? (
                    <Box>
                      {/* Opening Hour with Icon */}
                      <Box display="flex" alignItems="center">
                        <Icon sx={{ fontSize: 27, marginRight: 1 }}><AccessAlarmsIcon /></Icon> {/* Icon */}
                        <Typography variant="body1"><strong> Opening Hour :</strong> {formData.openingHour}</Typography>
                      </Box>
                      {/* Closing Hour with Icon */}



                      <Box display="flex" alignItems="center" marginTop='10px'>
                        <Icon sx={{ fontSize: 27, marginRight: 1, marginBottom: '3px' }}><AccessAlarmsIcon /></Icon> {/* Icon */}
                        <Typography variant="body1"><strong > Closing  Hour : </strong> {formData.closingHour}</Typography>
                      </Box>
                      <Divider />
                      <Box display="flex" alignItems="center" marginTop='10px'>
                        <Icon sx={{ fontSize: 25, marginRight: 1, marginBottom: '8px' }}><WeekendIcon /></Icon>
                        <Typography variant="body1" gutterBottom>Week Day Off</Typography>
                      </Box>
                      <Divider />
                      <Chip label={formData.weekDayOff} sx={{ backgroundColor: '#ff983f', color: 'white' }} />
                      {/* Add more business hour details here */}
                    </Box>
                  ) : (
                    <Typography variant="body1">Loading...</Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>



            {formData?.website || formData?.socialMedia?.GitHub || formData?.socialMedia?.Twitter || formData?.socialMedia?.Instagram || formData?.socialMedia?.Facebook ? (
              <Card sx={{ mb: 2, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius:'15px' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Useful Links</Typography>
                  <Divider />
                  <List sx={{ borderRadius: 2 }}>

                    {formData?.socialMedia?.GitHub && (
                      <ListItemButton disablePadding onClick={() => window.open(`https://github.com/${formData.socialMedia.GitHub}`, '_blank')}>
                        <ListItemIcon>
                          <GitHub style={{ color: '#333333' }} />
                        </ListItemIcon>
                        <ListItemText primary={formData.socialMedia.GitHub} sx={{ whiteSpace: 'nowrap', width: '160px' }} />
                      </ListItemButton>
                    )}
                    {formData?.socialMedia?.Twitter && (
                      <ListItemButton disablePadding onClick={() => window.open(`https://twitter.com/${formData.socialMedia.Twitter}`, '_blank')}>
                        <ListItemIcon>
                          <Twitter style={{ color: '#55acee' }} />
                        </ListItemIcon>
                        <ListItemText primary={formData.socialMedia.Twitter} sx={{ whiteSpace: 'nowrap' }} />
                      </ListItemButton>
                    )}
                    {formData?.socialMedia?.Instagram && (
                      <ListItemButton disablePadding onClick={() => window.open(`https://instagram.com/${formData.socialMedia.Instagram}`, '_blank')}>
                        <ListItemIcon>
                          <Instagram style={{ color: '#ac2bac' }} />
                        </ListItemIcon>
                        <ListItemText primary={formData.socialMedia.Instagram} sx={{ whiteSpace: 'nowrap' }} />
                      </ListItemButton>
                    )}
                    {formData?.socialMedia?.Facebook && (
                      <ListItemButton disablePadding onClick={() => window.open(`https://facebook.com/${formData.socialMedia.Facebook}`, '_blank')}>
                        <ListItemIcon>
                          <Facebook style={{ color: '#3b5998' }} />
                        </ListItemIcon>
                        <ListItemText primary={formData.socialMedia.Facebook} sx={{ whiteSpace: 'nowrap' }} />
                      </ListItemButton>
                    )}


                  </List>
                </CardContent>
              </Card>
            ) : null}




            <Card sx={{borderRadius:'15px'}}>
              <iframe
                src={formData ? formData.mapEmbedUrl : ''} // Check if formData exists before accessing mapEmbedUrl
                width="800"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>

          </Grid>

          {/*2nd columns for Details */}
          <Grid item lg={isMobile ? 12 : 4} xs={12}>

            <Grid item lg={6} style={{ marginLeft: '3px' }}>


              <Grid lg={12} xs={1}>
                {/* ProfileHeader component */}
                <ProfileHeader />
              </Grid>


              <Grid item lg={12} xs={3}id="businessDetails">
                {formData ? ( // Check if formData exists
                  <Card key={formData.id} sx={{ mb: 2, width: '390%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' , borderRadius:'15px' }}>
                    {/* Render a single Card for the formData */}
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{fontFamily: 'Roboto, sans-serif' }}>Business Details</Typography>
                      <Divider />
                      {/* Card content */}
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <PersonIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Business Name</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.businessName}</Typography>


                      <Divider />

                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <LanguageIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Website</Typography>
                      </Box>


                      {formData?.website ? (
                        <ListItemButton disablePadding onClick={() => window.open(formData.website, '_blank')}>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '40px', cursor: 'pointer' }}>{formData.website}</Typography>
                        </ListItemButton>
                      ) : (
                        <Button variant="contained" color="primary" sx={{ marginLeft: '50px', marginTop: '10px', marginBottom: '10px',
                        backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f', 
                      }
                      
                      }}>
                          Add Website
                        </Button>
                      )}


                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <CategoryIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Business Category</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.businessCategory}</Typography>
                      {/* Add other details similarly */}
                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <BusinessIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Business Address</Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px', cursor: 'pointer' }}>{formData.businessAddress}</Typography>


                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <PeopleIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">No. Of Employees</Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.numberOfEmployees}</Typography>


                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <BadgeIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Tax ID</Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.taxID}</Typography>


                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <CalendarMonthIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Business Establishment Date</Typography>
                      </Box>

                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.establishmentDate}</Typography>


                    </CardContent>
                  </Card>
                ) : ( // If formData is null or undefined, render a loading message
                  <Typography variant="body1">Loading...</Typography>
                )}



              </Grid>






              <Grid item lg={12}   xs={3} id="products">
                {formData && formData.products && formData.products.length > 0 && (

                  <Card sx={{ mb: 2, width: '390%', height: '150%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius:'15px' }}>
                    <Card >
                      <Typography variant="h6" gutterBottom sx={{ marginLeft: '15px' }}>Our Products</Typography>
                      <Divider />

                      <CardContent sx={{ width: '95%', minHeight: 200, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>

                        {formData && formData.products && formData.products.map((product) => (
                          <div key={product.id} style={{ position: 'relative', border: '1px solid #ccc', paddingBottom: '70px' }}>

                            <img
                              src={product.images && product.images.length > 0 ? product.images[0] : ''}
                              alt={product.title}
                              loading="lazy"
                              style={{ width: '100%', height: '85%', objectFit: 'cover', borderBottom: '1px solid #ccc' }}
                            />
                            {/* Add to Cart button */}
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px', marginBottom: '15px' }}>
                              <Typography variant="subtitle1" style={{ fontSize: '12px', marginBottom: '8px' }}>{product.title}</Typography>
                              <Typography variant="subtitle1" style={{ fontSize: '12px', marginBottom: '8px', fontWeight: 'bold' }}>${product.price}</Typography>

                              <Button variant="contained" onClick={() => handleAddToCart(product)} sx={{ width: '100%', py: '8px', fontSize: '10px',
                              backgroundColor: '#ff983f', '&:hover': { backgroundColor: '#ff983f', 
                            }
                            
                            }}>
                                <AddShoppingCartIcon sx={{ fontSize: '20px', marginRight: '8px' }} />
                                Add To Cart
                                <ToastContainer position="bottom-left"  />
                              </Button>
                            </div>


                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </Card>
                )}
              </Grid>







              <Grid item lg={12}  xs={3} id="ownerDetails">

                {formData ? ( // Check if formData exists
                  <Card key={formData.id} sx={{ mb: 2, width: '390%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius:'15px' }}>
                    {/* Render a single Card for the formData */}
                    <CardContent>
                      <Typography variant="h6" gutterBottom>Owner's Details</Typography>
                      <Divider />
                      {/* Card content */}
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <PersonIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Full Name</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.fullName}</Typography>
                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <Email sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Email</Typography>
                      </Box>
                      <ListItemButton disablePadding onClick={() => window.open(`mailto:${formData.email}`, '_blank')}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '40px', cursor: 'pointer' }}>{formData.email}</Typography>
                      </ListItemButton>
                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <Phone sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Phone</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.phone}</Typography>
                      {/* Add other details similarly */}
                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <LocationOnIcon sx={{ marginRight: 4 }} />
                        <Typography variant="body1">Address</Typography>
                      </Box>
                      <ListItemButton disablePadding onClick={() => window.open(`mailto:${formData.address}`, '_blank')}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '40px', cursor: 'pointer' }}>{formData.address}</Typography>
                      </ListItemButton>

                    </CardContent>
                  </Card>
                ) : ( // If formData is null or undefined, render a loading message
                  <Typography variant="body1">Loading...</Typography>
                )}
              </Grid>


              <Grid item lg={12}  xs={3} id="service">
                {formData ? ( // Check if formData exists
                  <Card key={formData.id} sx={{ mb: 2, width: '390%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' , borderRadius:'15px'}}>
                    {/* Render a single Card for the formData */}
                    <CardContent>
                      <Typography variant="h6" gutterBottom>Service Information</Typography>

                      <Divider />
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <CategoryIcon sx={{ marginRight: 4 }} /> {/* Icon for service type */}
                        <Typography variant="body1">Type of Service</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.servicesOffered}</Typography>

                      {/* Add other service details similarly */}
                      <Divider />
                      {/* Card content */}
                      <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                        <DescriptionIcon sx={{ marginRight: 4 }} /> {/* Icon for description */}
                        <Typography variant="body1">Service Description</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 1, ml: '55px' }}>{formData.serviceDescription}</Typography>


                    </CardContent>
                  </Card>
                ) : ( // If formData is null or undefined, render a loading message
                  <Typography variant="body1">Loading...</Typography>
                )}
              </Grid>


              <Grid item lg={12}  xs={3} id="gallery" >
                <Card sx={{ mb: 2, width: '390%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' , borderRadius:'15px'}}>
                  {/* Render a single Card for the formData */}
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Gallery</Typography>

                    <Divider />
                    <ImageList
                      sx={{ width: 700, height: 450 }}
                      variant="quilted"
                      cols={4}
                      rowHeight={121}
                    >

                      {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>

                          <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item lg={12}  xs={3} sx={{ position: 'sticky', bottom: 0 }}>


                <TextField
                  label="Your Review"
                  multiline
                  rows={1}
                  id="reviewInput"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  InputProps={{
                    sx: {
                      backgroundColor: '#e0e0e0',
                      borderRadius: '5px',
                      width: '390%'
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button variant="contained" onClick={handleSubmit} sx={{ borderRadius: '8px', color: 'white', 
                        backgroundColor: '#ff983f', '&:hover': {backgroundColor: '#ff983f', 
                      }
                      
                      }}>
                          <SendIcon />
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                  focused={false} // Disable focus state
                />

              </Grid>

            </Grid>
          </Grid>

          {/* 3rd column for ads */}
          <Grid item lg={isMobile ? 12 : 4} xs={12}>
            <Card sx={{ mb: 2, display: 'flex', marginLeft: '350px', paddingRight: '335px', height: '100%', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius:'15px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <Grid item lg={12}>

                  <ImageList
                    sx={{ width: 340, height: 450 }}
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                  >
                    {itemData.map((item) => (
                      <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                          {...srcset(item.img, 121, item.rows, item.cols)}
                          alt={item.title}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}

                  </ImageList>

                </Grid>




              </Box>

            </Card>





          </Grid>



        </Grid>
      </Container>
    </section>
  );
};

export default Profile;
