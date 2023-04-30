import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export default function HamburgerMenuItem({ text, icon: Icon, path }) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <MenuItem>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText
          primary={text}
          style={{ display: 'inline' }}
        />
      </MenuItem>
    </Link>
  );
}