import React from 'react';
import { Box, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import * as Constants from '../Constants';
import { useTheme } from '@mui/material/styles';

function AboutContent() {
  const theme = useTheme();
  
  return (
    <>
      {/* {console.log(theme.appBackground)} */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
          height: '90vh', backgroundSize: 'cover',}}>
        <Box sx={{ p: 4, borderRadius: 4, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
            pt: 3, // add top padding
            px: 3, // add horizontal padding
            maxHeight: '70%', margin: '10%', overflow: 'scroll' }}  >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3}}>
              <InfoIcon sx={{ px: 1, color: "#91D8E4"}} />
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>About&nbsp;&nbsp;InternView</Typography>
            </Box>
          <Box sx={{overflow: 'scroll'}}>
          <Typography align='justify'>
          <span style={{ fontWeight: 'bold' }}>InternView</span> is an application designed to connect experienced workers in the high-tech industry and candidates looking for their first job in the field,
          <br />for a <span style={{ fontWeight: 'bold' }}>mock interview</span> in order to prepare the candidate for the process of finding his first job in the best way.
          <br /><span style={{ fontWeight: 'bold' }}>We invite you to join us!</span>
          {/* Mentwo is an app that connects mentors and mentees,
          to accompany the process of finding the first job of students or graduates in the high-tech world.
          <br />The application is non-profit, and is designed to facilitate the process of finding the first job and continue a circle of goodness by passing it on.
          <br /><span style={{ fontWeight: 'bold' }}>We invite you to join us!</span>
          <br />If you have already integrated into the labor market, you are welcome to be a mentor and help others in their process,
          and if you are looking for your first job, you are welcome to use a mentor that is right for you, and after you find a job, to continue as a mentor and help others. */}
          </Typography>
          </Box>
        </Box>
      </Box>
  </>
  );
}

export default AboutContent;
