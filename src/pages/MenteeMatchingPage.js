import React from 'react';
import {Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgressBar from '../components/small-components/CircularProgressBar';


const MenteeMatchingPage = ({mentee}) => {
    const containerStyles = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    return(
        <div style={containerStyles}>
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={20} maxWidth="100%" marginBottom={20}>
          <iframe src="https://giphy.com/embed/eYaHNLXTOo1hKJu9gu" frameBorder="0" class="giphy-embed" title='Searching'></iframe>
          {/* <CircularProgressBar /> */}
          <Typography variant="h4" component="h1" textAlign="center">
            Searching For The Best Interviewer For You!
          </Typography>
        </Stack>
      </div>
        );
};
export default MenteeMatchingPage;
