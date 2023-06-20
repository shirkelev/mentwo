import AboutContent from '../components/AboutContent';
import peopleImg from '../data/images/pepole.png' ;
import { Box, Divider, Typography } from '@mui/material';

function AboutPage() {
  return (
    <>
    <img src={peopleImg} style={ {marginTop: '15px', height: '380px', width: '90%', display: 'block', margin: '0 auto', marginTop: '15px' }}></img>
    <Box sx={{overflow: 'scroll',  marginTop: '20px', marginLeft: '20px', marginRight: '20px'} }>
          <Typography align='justify'>
          <span style={{ fontWeight: 'bold', color: '#64B5F6', fontSize: '18px' }}>InternView</span> is an application designed to connect experienced workers in the high-tech industry and candidates looking for their first job in the field,
          <br />for a <span style={{ fontWeight: 'bold', color: '#81C784', fontSize: '18px'}}>mock interview</span> in order to prepare the candidate for the process of finding his first job in the best way.
          <br /><span style={{ fontWeight: 'bold', color: '#4DB6AC', fontSize: '25px' }}>We invite you to join us!</span> </Typography>
          </Box>
    </>
  );
}

export default AboutPage;
