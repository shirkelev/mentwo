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
            pt: 6, // add top padding
            px: 5, // add horizontal padding
            maxHeight: '70%', margin: '10%', overflow: 'scroll' }}  >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 5}}>
              <InfoIcon sx={{ px: 1, color: "#b1a5e3"}} />
              <Typography variant="h5">About MenTwo</Typography>
            </Box>
          <Box sx={{overflow: 'scroll'}}>
          <Typography variant="h7" align='justify'>
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
  </>
  );
}

export default AboutContent;
