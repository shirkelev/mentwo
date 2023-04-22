import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const StyledButton = styled(Button)(({ theme, color }) => ({
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const RoundButton = ({ text, color, href }) => {
  return (
    <StyledButton variant="contained" color={color} href={href}>
      {text}
    </StyledButton>
  );
};

export default RoundButton;
