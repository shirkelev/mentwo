import React from 'react';
import TextField from '@mui/material/TextField';

const TextBox = ({ title, placeholder, onChange, onBlur=() => {}, isDisabled=false, isPassword=false}) => {

  return (
    isDisabled ? 
    <TextField
      id="outlined-basic"
      label={title}
      variant="filled"
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      disabled
      type={isPassword ? "password" : "text"}
    /> :
    <TextField
      id="outlined-basic"
      label={title}
      variant="outlined"
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      type={isPassword ? "password" : "text"}
    /> 
  );
};

export default TextBox;
