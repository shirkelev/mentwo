import React from 'react';
import TextField from '@mui/material/TextField';

const BigContentBox = ({ placeholder }) => {
  return (
    <TextField
    id="filled-multiline-flexible"
    placeholder= {placeholder}
    multiline
    rows={4}
    variant="outlined"
  />

  );
};

export default BigContentBox;
