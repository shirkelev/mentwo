import React from 'react';
import Avatar from '@mui/material/Avatar';

const MyAvatar = (props) => {
  return (
    <>
      <Avatar alt={props.name} src={props.src} sx={{border:1}}/>
    </>
  );
};

export default MyAvatar;
