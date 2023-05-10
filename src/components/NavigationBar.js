import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MySettingsIcon from './small-components/MySettingsIcon';
import HamburgerMenuButton from './small-components/HaburgerMenuButton';
import TopBarLogo from './small-components/TopBarLogo';
import HamburgerMenu from './HamburgerMenu';
import { HamburgerMenuContext } from '../context/HamburgerMenuContexts';

export default function NavigationBar({user}) {

  const containerStyle = {
    position: "absolute",
    padding: "1px",
    zIndex: 999,
    
  };

  const {showMenu, setShowMenu} = React.useContext(HamburgerMenuContext)
  return (
      <>
      <Box sx={{ flex: 1, style:"position: fixed;" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start" 
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <HamburgerMenuButton />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <TopBarLogo/>
            </Typography>
            <MySettingsIcon />
          </Toolbar>
        </AppBar>
      </Box>
      {showMenu && 
      <div style={containerStyle}>
        <HamburgerMenu user={user} />
      </div>}
    </>
  );
}