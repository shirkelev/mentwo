import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography } from '@mui/material';
import * as Constants from '../Constants';
import SimpleButton from '../components/small-components/Button';
import AboutContent from '../components/AboutContent';

const ButtonWrapper = styled(SimpleButton)(({ theme }) => {
  return ({
      margin: theme.spacing(2),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(3),
  });
});

function LandingPage() {
  return (
    <>
    <Box sx={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
            ,backgroundColor:'#f8f2ec'}}>
       <Box sx={{ display: 'flex', justifyContent: 'flex-end', justifyContent: 'center', 
            alignItems: 'center',  alignItems: 'center', py: 2 , mr:2, gap:1}}>
         {/* Login and Signup links */}
         <ButtonWrapper variant="contained" color="primary" title='Log In' to={Constants.SIGN_IN} />
         <Divider orientation="vertical" flexItem='true' />
         <ButtonWrapper variant="contained" color="primary" title='Sign Up' to={Constants.SIGN_UP} />
       </Box>
    </Box>
    <AboutContent/>
  </>
  );
}

export default LandingPage;
