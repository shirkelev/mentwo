import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function HamburgerMenuItem({ text, icon: Icon}) {
  return (
    <MenuItem>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText
        primary={text}
        style={{ display: 'inline' }}
      />
    </MenuItem>
  );
}