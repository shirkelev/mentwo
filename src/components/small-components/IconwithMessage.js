import React from 'react';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { Box, Typography } from '@mui/material';
import Error from '@mui/icons-material/Error';

const IconWithMessage = ({ message, isVisible }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            {/* Display the Icon */}
            <Error fontSize="large" />

            {/* Display the Message */}
            <Typography variant="body1" component="div" marginTop={2}>
                {message}
            </Typography>
        </Box>
    );
};

export default IconWithMessage;