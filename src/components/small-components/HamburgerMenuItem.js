import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export default function HamburgerMenuItem({ text, icon: Icon, path, onClick }) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <MenuItem>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{ textAlign: 'left', display: 'inline' }}
          onClick={onClick}
        />
      </MenuItem>
    </Link>
  );
}