import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
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
       <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'right', width: '100%' }}>
            <Box sx={{ flexGrow: 1 }} />
            <TopBarLogo />
            <Box sx={{ flexGrow: 1 }} />
          </Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <HamburgerMenuButton user={user} />
          </IconButton>
        </Toolbar>
      </AppBar>
      {showMenu && 
      <div style={containerStyle}>
        <HamburgerMenu user={user} />
      </div>}
    </>
  );
}