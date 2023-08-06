import React from 'react';
import {Stack} from '@mui/material';
import Typography from '@mui/material/Typography';
import CircularProgressBar from '../components/small-components/CircularProgressBar';


const MenteeMatchingPage = ({mentee}) => {
    const containerStyles = {
        // height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    };

    return(
        <div style={containerStyles}>
        <Stack direction="column" justifyContent="center" alignItems="center" 
          spacing={5} maxWidth='100%' maxHeight='100%' marginTop='40px' paddingLeft={5} paddingRight={5}>
            <Typography variant="h5" component="h1" textAlign="center">
              Searching For The Best Interviewer For You!
            </Typography>
            <iframe src="https://giphy.com/embed/eYaHNLXTOo1hKJu9gu" frameBorder="0" class="giphy-embed" title='Searching'></iframe>
            {/* <CircularProgressBar /> */}
            <Typography variant="h6" component="h1" textAlign="center" textStyle='italic'>
              We first need an interviewer to approve you, dont waste you time now, we will ping you when the right match is found!
            </Typography>
        </Stack>
      </div>
        );
};
export default MenteeMatchingPage;
