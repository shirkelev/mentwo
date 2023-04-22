import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ title, onClick, color='primary', href}) => {
  return (
    <MuiButton variant="contained" color={color} onClick={onClick} href={href}>
      {title}
    </MuiButton>
  );
};

export default Button;
