import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import Photo from '../data/images/photo.jpeg';

function LandingPage() {
  return (
    <div>
      {/* Upper bar */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', py: 2 }}>
        {/* Login and Signup links */}
        <Box sx={{ mr: 2 }}>
          <Button color="inherit">Log in</Button>
          <Button color="inherit">Sign up</Button>
        </Box>
      </Box>

      {/* Divider */}
      <Divider />

      {/* Text box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 64px)',
          backgroundImage: `url(${Photo})`,
          backgroundSize: 'cover',
        }}
      >
        <Box
          sx={{
            p: 4,
            borderRadius: 4,
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            pt: 10, // add top padding
            px: 10, // add horizontal padding
            margin: '10%'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <InfoIcon sx={{ mr: 1 }} />
            <Typography variant="h4">About the app</Typography>
          </Box>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum nibh.
            Vestibulum id bibendum neque, id tempus nisi. Duis auctor, leo nec laoreet volutpat, elit
            turpis bibendum odio, sed sollicitudin lacus quam a nunc. Etiam id semper mi.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default LandingPage;
