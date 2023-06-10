import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Divider, Typography } from '@mui/material';
import * as Constants from '../Constants';
import SimpleButton from '../components/small-components/Button';
import AboutContent from '../components/AboutContent';
import logoW from '../data/images/new_logo.png'


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
            ,backgroundColor:'#FEFCFF'
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
    <img src={peopleImg} style={ {marginTop: '15px', height: '380px', width: '85%', display: 'block', margin: '0 auto' }}></img>
    <Box sx={{overflow: 'scroll',  marginTop: '20px', marginLeft: '20px', marginRight: '20px'} }>
          <Typography align='justify'>
          <span style={{ fontWeight: 'bold', color: '#64B5F6', fontSize: '18px' }}>InternView</span> is an application designed to connect experienced workers in the high-tech industry and candidates looking for their first job in the field,
          <br />for a <span style={{ fontWeight: 'bold', color: '#81C784', fontSize: '18px'}}>mock interview</span> in order to prepare the candidate for the process of finding his first job in the best way.
          <br /><span style={{ fontWeight: 'bold', color: '#4DB6AC', fontSize: '25px' }}>We invite you to join us!</span> </Typography>
          </Box>
    {/* <AboutContent/> */}
  </>
  );
}

export default LandingPage;
