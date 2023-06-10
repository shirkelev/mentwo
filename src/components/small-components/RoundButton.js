import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import interviweeIm from '../../data/images/interviewer.png';
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

<<<<<<< HEAD
const RoundButton = ({ text, color, href='', onClick , to='', backgroundImage}) => {
  return (
    <div>
      <StyledButton variant="contained" color={color} href={href} onClick={onClick} style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '130px',
        height: '130px',
        }}>
      </StyledButton>
      {text}
      </div>
=======
const RoundButton = ({ text, color, href='', onClick , to='', img}) => {
  return (
      <>
      <img src={img} alt="icon" style={{width: '100%', height:'20%'}} onClick={onClick}/>
      <h3 onClick={onClick}> {text} </h3>
      </>
>>>>>>> shir
  );
};

export default RoundButton;
