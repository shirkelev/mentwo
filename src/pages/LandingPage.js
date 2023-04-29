import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import backgroung from '../data/images/bg_img.jpeg';
import Button from '../components/small-components/Button';
import * as Constants from '../Constants';

function LandingPage() {
  return (
    <>
    <Box sx={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            ,backgroundColor:'primary',
          }}>
      {/* Upper bar */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', py: 2 , mr:2, gap:1}}>
        {/* Login and Signup links */}
            <Button color="inherit" title='Log in' href={Constants.SIGN_IN}/>
            <Divider orientation="vertical" flexItem='true' />
            <Button color="inherit" title='Sign Up'  href={Constants.CHOOSE_ROLE_PAGE} />
      </Box>
      <Divider />
    </Box>
      {/* Divider */}
      

      {/* Text box */}
      
      <Box
        sx={{
          height: '100vh'
        }}
      >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundImage: `url(${backgroung})`,
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
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            pt: 6, // add top padding
            px: 10, // add horizontal padding
            maxHeight: '70%',
            margin: '10%',
            overflow: 'scroll'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 5}}>
            <InfoIcon sx={{ mr: 1 }} />
            <Typography variant="h3">About the app</Typography>
          </Box>
          <Box sx={{overflow: 'scroll'}}>
          <Typography variant="h5" align='justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum nibh.
            Vestibulum id bibendum neque, id tempus nisi. Duis auctor, leo nec laoreet volutpat, elit
            turpis bibendum odio, sed sollicitudin lacus quam a nunc. Etiam id semper mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum nibh.
            Vestibulum id bibendum neque, id tempus nisi. Duis auctor, leo nec laoreet volutpat, elit
            turpis bibendum odio, sed sollicitudin lacus quam a nunc. Etiam id semper mi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum nibh.
            Vestibulum id bibendum neque, id tempus nisi. Duis auctor, leo nec laoreet volutpat, elit
            turpis bibendum odio, sed sollicitudin lacus quam a nunc. Etiam id semper mi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget bibendum nibh.
            Vestibulum id bibendum neque, id tempus nisi. Duis auctor, leo nec laoreet volutpat, elit
            turpis bibendum odio, sed sollicitudin lacus quam a nunc. Etiam id semper mi.
          </Typography>
        </Box>
        </Box>
        
      </Box>
      </Box>
      </>
  );
}

export default LandingPage;
