import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { GitHub, Twitter, Instagram, Facebook,WhatsApp, Telegram, LinkedIn } from '@mui/icons-material'; // Import social media icons
import { Button, Box, Grid } from '@mui/material'; // Import Box and Grid for layout

function ShareDialog({ open, handleClose }) {
  const handleCloseDialog = () => {
    handleClose();
  };

  return (
    <Dialog onClose={handleCloseDialog} aria-labelledby="customized-dialog-title" open={open}>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Share Content
          <IconButton aria-label="close" onClick={handleCloseDialog}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <IconButton aria-label="GitHub">
            <GitHub style={{ color: '#333333', fontSize:'40px' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="Twitter">
            <Twitter style={{ color: '#55acee', fontSize:'40px' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="Instagram">
            <Instagram style={{ color: '#ac2bac', fontSize:'40px' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="Facebook">
            <Facebook style={{ color: '#3b5998', fontSize:'40px' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="WhatsApp">
              <WhatsApp style={{ color: '#25D366', fontSize:'40px' }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="Telegram">
              <Telegram style={{ color: '#0088cc', fontSize:'40px' }}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="LinkedIn">
              <LinkedIn style={{ color: '#0077b5', fontSize:'40px' }} />
            </IconButton>
          </Grid>
          
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCloseDialog} variant="contained" color="primary">
          Share
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ShareDialog;
