import React, { useEffect } from 'react';
import { Button as MuiButton } from '@mui/material';
import {Link} from 'react-router-dom';

const Button = ({ title, onClick, color='primary', variant, textColor='blue', to=''}) => {

  return (
    <Link to={to}>
      <MuiButton variant={variant} color={color} onClick={onClick} textColor={textColor}>
        { title }
      </MuiButton>
    </Link>
  );
};

export default Button;
