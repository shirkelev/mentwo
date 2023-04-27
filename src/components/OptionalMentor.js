import { Avatar, Box } from '@mui/material';
import React from 'react';


export default function OptionalMentor() {
    return ( 
        <Box
        sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <div>
        <Avatar
         alt="Remy Sharp"
         src="/src/data/images/nitzan.jpg"
         sx={{ width: 100, height: 100}}
         
         ></Avatar>
         <h1>Nits</h1>
         <h2>Little Details</h2>
        </div>
        
        </Box>

    );
  }