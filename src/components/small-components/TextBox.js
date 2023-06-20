import React from 'react';
import TextField from '@mui/material/TextField';

const TextBox = ({ title, placeholder, onChange, onBlur=() => {}, isDisabled=false}) => {
  
  return (
    isDisabled? 
    <TextField
      id="outlined-basic"
      label={title}
      variant="filled"
      placeholder={placeholder}
      onChange = {onChange}
      onBlur = {onBlur}
      disabled
    /> :
    <TextField
      id="outlined-basic"
      label={title}
      variant="outlined"
      placeholder={placeholder}
      onChange = {onChange}
      onBlur = {onBlur}
    /> 
  );
};

export default TextBox;
