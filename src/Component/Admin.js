import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Avatar from '@mui/material/Avatar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DvrIcon from '@mui/icons-material/Dvr';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',

    boxSizing: 'border-box',

    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Admin = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate(); // Get the navigate function

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/home');
  };

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{ backgroundColor: '#1D1F21', borderBottom: '1px solid #929292', paddingBottom:'2px' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                color: 'black', // Set the color of the icon to black
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: 'white' }}>Business</Typography>
            {/* Add login button */}
            <Link to='/profile'>
              <Avatar alt="Profile" src="/path/to/profile-image.jpg" />
            </Link>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          open={open}
          sx={{
            borderRight: '1px solid white',
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            borderRight: 'white',
            backgroundColor: '#1D1F21',
            ...(open && { width: drawerWidth }),
            '& .MuiDrawer-paper': {
              backgroundColor: '#1D1F21',
            },
          }}
        >
          <DrawerHeader  sx={{   borderRight: '1px solid #929292'}}>
            <h4 style={{ color: 'white', marginLeft: '15px' }}>Xcitech Technology</h4>
            <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider sx={{ backgroundColor: '#929292' }} />

          {/* List */}
          <List sx={{   borderRight: '1px solid #929292'}}>

            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <DvrIcon sx={{ color: '#ffffa1', backgroundColor:'#ff983f',marginLeft: '8px', fontSize: 32 }} />
                </ListItemIcon>
                <Link to="/dashboard" style={{ textDecoration: 'none', color: 'white', marginLeft: '10px' }}>
                  <ListItemText primary="Dashboard" sx={{ opacity: open ? 1 : 0, }} />
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{marginTop:'15px'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <InboxIcon sx={{ color: '#ffffa1', backgroundColor:'#ff983f', marginLeft: '8px', fontSize: 32 }} />
                </ListItemIcon>
                <Link to="/project" style={{ textDecoration: 'none', color: 'white', marginLeft: '10px' }}>
                  <ListItemText primary="Project" sx={{ opacity: open ? 1 : 0, }} />
                </Link>
              </ListItemButton>
            </ListItem>

            {/* Add logout button */}
            <List>
              <ListItem disablePadding sx={{marginTop:'455px'}}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                  onClick={handleLogout} // Add onClick event for logout
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <IconButton color="inherit">
                      <ExitToAppIcon sx={{ color: '#ffffa1', backgroundColor:'#ff983f', fontSize: 32 }} />
                    </IconButton>
                  </ListItemIcon>
                  <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0, color: 'white' }} />
                </ListItemButton>
              </ListItem>
            </List>
          </List>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 , }}>
          <DrawerHeader />
        </Box>
      </Box>
    </div>
  );
};

export default Admin;
