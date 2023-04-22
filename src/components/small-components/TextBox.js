import React from 'react';
import TextField from '@mui/material/TextField';

const TextBox = ({ title, placeholder }) => {
  return (
    <TextField
      id="outlined-basic"
      label={title}
      variant="outlined"
      // variant="filled"
      placeholder={placeholder}
    />
  );
};

export default TextBox;
