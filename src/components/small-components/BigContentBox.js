import React from 'react';
import TextField from '@mui/material/TextField';

const BigContentBox = ({ 
    placeholder
    , onClick=() => {}
    ,onBlur=() => {}
    ,onChange=() => {}
    ,variant="outlined"
    ,defaultValue=null
  }) => {
  return (
    <TextField
    id="filled-multiline-flexible"
    placeholder= {placeholder}
    multiline
    rows={4}
    variant={variant}
    onClick={onClick}
    onBlur={onBlur}
    onChange={onChange}
    defaultValue={defaultValue}
  />

  );
};

export default BigContentBox;
