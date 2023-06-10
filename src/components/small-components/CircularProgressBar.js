import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularProgressBar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={100} strokeWidth={8} animationDuration={2000} />
    </Box>
  );
}