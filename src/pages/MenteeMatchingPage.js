import React from 'react';
import {Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgressBar from '../components/small-components/CircularProgressBar';


const MenteeMatchingPage = ({mentee}) => {
    const containerStyles = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return(
        <div style={containerStyles}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={20} maxWidth="100%" marginBottom={20}>
          <CircularProgressBar></CircularProgressBar>
          <Typography variant="h4" component="h1" textAlign="center">
            Searching For The Best Interviewer For You!
          </Typography>
        </Stack>
      </div>
        );
};
export default MenteeMatchingPage;
