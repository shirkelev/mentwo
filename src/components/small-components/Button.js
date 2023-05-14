import React, { useEffect } from 'react';
import { Button as MuiButton } from '@mui/material';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';

const Button = ({ title, onClick, color='primary', variant, textColor='blue', to=''}) => {

  return (
    <Link to={to}>
      <MuiButton variant={variant} color={color} onClick={onClick} textColor={textColor}>
        <Typography variant="body1" fontWeight="bold">
          { title }
          </Typography>
      </MuiButton>
    </Link>
  );
};

export default Button;
