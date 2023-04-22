import React from 'react';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const InfoButton = (props) => {
  const { onClick } = props;
  return (
    <IconButton onClick={onClick}>
      <InfoIcon />
    </IconButton>
  );
}

export default InfoButton;
