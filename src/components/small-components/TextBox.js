import React from 'react';
import TextField from '@mui/material/TextField';

const TextBox = ({ title, placeholder, onChange }) => {
  return (
    <TextField
      id="outlined-basic"
      label={title}
      variant="outlined"
      placeholder={placeholder}
      onChange = {onChange}
    />
  );
};

export default TextBox;
