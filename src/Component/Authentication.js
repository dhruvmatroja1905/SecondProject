import React from 'react'
import Admin from './Admin'
import { Box } from '@mui/material';


const Authentication = () => {
  return (
    <div>
    <Box sx={{ display: 'flex' }}>
      <Admin />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        {/* Additional content specific to Project */}
        <Box sx={{ display: 'flex', gap: 3 , marginTop:'90px' }}>


       Authentication

       </Box>


      </Box>
    </Box>
  </div>
  )
}

export default Authentication
