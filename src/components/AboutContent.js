import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

function AboutContent() {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          height: '100vh', backgroundColor: '#ddd8f3', backgroundSize: 'cover',}}>
        <Box sx={{ p: 4, borderRadius: 4, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            pt: 3, // add top padding
            px: 3, // add horizontal padding
            maxHeight: '70%', margin: '10%', overflow: 'scroll' }}  >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3}}>
              <InfoIcon sx={{ px: 1, color: "#b1a5e3"}} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>About MenTwo</Typography>
            </Box>
          <Box sx={{overflow: 'scroll'}}>
          <Typography align='justify'>
          Mentwo is an app that connects mentors and mentees,
          to accompany the process of finding the first job of students or graduates in the high-tech world.
          <br />The application is non-profit, and is designed to facilitate the process of finding the first job and continue a circle of goodness by passing it on.
          <br /><span style={{ fontWeight: 'bold' }}>We invite you to join us!</span>
          <br />If you have already integrated into the labor market, you are welcome to be a mentor and help others in their process,
          and if you are looking for your first job, you are welcome to use a mentor that is right for you, and after you find a job, to continue as a mentor and help others.
          </Typography>
          </Box>
        </Box>
      </Box>
  </>
  );
}

export default AboutContent;
