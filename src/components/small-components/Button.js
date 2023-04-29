import React, { useEffect } from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ title, onClick, color='primary', href, variant, textColor='blue'}) => {
  // function doIt(){ alert('BlaBla')}
  return (
    <MuiButton variant={variant} color={color} onClick={onClick} href={href} textColor={textColor}>
      { title }
    </MuiButton>
  );
};

export default Button;
