import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function HamburgerMenuItem({ text, icon: Icon, path, onClick }) {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <MenuItem>
        <ListItemIcon>
          <Icon/>
        </ListItemIcon>
        <ListItemText
          primary={<Typography style={{ fontWeight: 'bold', fontSize: '14.5px'}}>{text}</Typography>}
          sx={{ textAlign: 'left', display: 'inline', color: '#91D8E4' }}
          onClick={onClick}
        />
      </MenuItem>
    </Link>
  );
}