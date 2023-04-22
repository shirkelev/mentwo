import React from 'react';
import Avatar from '@mui/material/Avatar';

const MyAvatar = (props) => {
  return (
    <Avatar alt="User Avatar" src={props.img} />
  );
};

export default MyAvatar;
