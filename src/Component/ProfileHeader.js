import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, Button, useMediaQuery, useTheme, Drawer, List, ListItem, ListItemText, IconButton, InputAdornment, TextField, ListItemAvatar, Avatar } from '@mui/material';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../Component/API/jsonapi';
import { useDispatch, useSelector } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addTocart } from '../Redux/Action/Action/profileAction'; // Assuming this is correctly defined

// Define a CheckoutForm component
function CheckoutForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", marginBottom: '15px', margin:'10px' }}>
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}

        margin="normal"
        required
      />
      <TextField
        name="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}

        margin="normal"
        required
      />
      <TextField
        name="address"
        label="Address"
        value={formData.address}
        onChange={handleChange}

        margin="normal"
        required
      />
      <TextField
        name="PhoneNumber"
        label="Phone Number"
        value={formData.phonenumber}
        onChange={handleChange}

        margin="normal"
        required
      />

      <TextField
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}

        margin="normal"
        multiline
        rows={2}
      />
      <Button
      variant="contained"
      sx={{
        backgroundColor: 'orange',
        color: 'white',
        width: '80%',
        marginLeft: '30px',
        '&:hover': {
          backgroundColor: 'orange',
        },
        '&:active': {
          backgroundColor: 'orange',
        },
      }}
     // onClick={handleCheckoutClick}
    >
     Buy now
    </Button>
    </form>
  );
}

function ProfileHeader() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const headerHeight = 62;
  const [formData, setFormData] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [checkoutButtonText, setCheckoutButtonText] = useState("Check out");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false); // Track if checkout form should be displayed

  const sectionRefs = useRef({});

  const cartItems = useSelector(state => state.addtocart.cartItems);
  console.log('item added', cartItems)
  const cartCount = useSelector(state => state.addtocart.cartCount);

  useEffect(() => {
    // Populate sectionRefs with references to all sections
    const sections = ['businessDetails', 'products', 'ownerDetails', 'service', 'gallery'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        sectionRefs.current[sectionId] = section;
      }
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/users/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset = section.offsetTop - headerHeight;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleButtonClick = (link) => {
    scrollToSection(link.sectionId);
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

  const handleAddToCartClick = () => {
    if (formData && formData.products) {
      dispatch(addTocart(formData.products));
      setOpenDrawer(true);
    }
  };

  const handleCheckoutClick = () => {
    // Update button text
    setCheckoutButtonText("Buy now");
    // Show checkout form
    setShowCheckoutForm(true);
  };

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    // Handle form submission here, e.g., submit data to server
    console.log(formData);
  };

  const navLinks = [
    { title: "Business Details", sectionId: 'businessDetails' },
    formData && formData.products && { title: "Products", sectionId: 'products' },
    { title: "Owner Details", sectionId: 'ownerDetails' },
    { title: "Services", sectionId: 'service' },
    { title: "Gallery", sectionId: 'gallery' },
  ].filter(Boolean);

  return (
    <AppBar position="fixed" color="inherit" sx={{ backgroundColor: '#444648' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
          Business Profile
        </Typography>
        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
          <List>
            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <ListItem key={index}>
                  <ListItemAvatar>
                    <img src={item.images} style={{ width: '50px', height: '50px' }} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.title}
                    secondary={`Price:  $${item.price}`}
                    secondaryTypographyProps={{ color: 'textPrimary' }}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Cart is empty" />
              </ListItem>
            )}
          </List>

          {showCheckoutForm ? (
            <CheckoutForm onSubmit={handleFormSubmit} />
          ) : (
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'orange',
                color: 'white',
                width: '80%',
                marginLeft: '30px',
                '&:hover': {
                  backgroundColor: 'orange',
                },
                '&:active': {
                  backgroundColor: 'orange',
                },
              }}
              onClick={handleCheckoutClick}
            >
              {checkoutButtonText}
            </Button>
          )}
        </Drawer>

        <TextField
          placeholder="Search…"
          variant="outlined"
          size="small"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
          sx={{ marginRight: isMobile ? '5px' : '10px', width: isMobile ? '60%' : '50%', backgroundColor: "white" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleSearchIconClick}>
                  <FaSearch />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <div style={{ display: 'flex', alignItems: 'center', marginRight: "10px", marginLeft: "10px" }}>
          {formData && formData.products && (
            <>
              <AddShoppingCartIcon sx={{ color: "white" }} onClick={handleAddToCartClick} />
              <div style={{ color: "white", marginBottom: "15px" }}>{cartCount}</div>
            </>
          )}
        </div>
        {isMobile ? (
          <Button onClick={toggleDrawer} sx={{ textTransform: 'none' }}>
            {openDrawer ? <FaTimes /> : <FaBars />}
          </Button>
        ) : (
          <div>
            {navLinks.map((link, index) => (
              <Button
                key={index}
                color="inherit"
                onClick={() => handleButtonClick(link)}
                sx={{
                  textTransform: 'none',
                  fontWeight: activeButton === link.title ? 'bold' : 'normal',
                  color: 'white',
                }}
              >
                {link.title}
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default ProfileHeader;
