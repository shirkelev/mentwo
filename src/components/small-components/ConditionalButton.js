import React, { useEffect } from 'react';
import { Button as MuiButton } from '@mui/material';
import ConditionalLink from './ConditionalLink';

const ConditionalButton = ({ title, onClick, color='primary', variant, textColor='blue', to='', conditon=true}) => {

  return (
    <ConditionalLink condition={conditon} to={to}>
      <MuiButton variant={variant} color={color} onClick={onClick} textColor={textColor}>
        { title }
      </MuiButton>
    </ ConditionalLink>
  );
};

export default ConditionalButton;
