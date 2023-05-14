import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography } from '@mui/material';
import * as Constants from '../Constants';
import SimpleButton from '../components/small-components/Button';
import AboutContent from '../components/AboutContent';
import logoW from '../data/images/logo-removebg-preview.png'

const ButtonWrapper = styled(SimpleButton)(({ theme }) => {
  return ({
      margin: theme.spacing(10),
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(3),
  });
});

function LandingPage() {
  return (
    <>
    <Box sx={{
            boxShadow: '3'
            ,backgroundColor:'#f8f2ec'
            ,justifyItems:'center'
            ,maxHeight:'10vh'
            , display: 'flex', justifyContent: 'flex-end',
            paddingRight: '5vw', paddingLeft: '5vw', paddingTop: '5vh', paddingBottom: '1vh',
            alignItems: 'center' , gap:1}}>
         {/* Login and Signup links */}
         <img alt='logo' src={logoW} style={{height:'4vh', width:'30vw'}} />
         <div style={{flexGrow:1}}></div>
         <ButtonWrapper variant="text" color="primary" title='Log In' to={Constants.SIGN_IN} />
         <Divider orientation="vertical" flexItem='true' />
         <ButtonWrapper variant="text" color="primary" title='Sign Up' to={Constants.SIGN_UP} />
    </Box>
    <AboutContent/>
  </>
  );
}

export default LandingPage;
