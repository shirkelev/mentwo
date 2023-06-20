import React from 'react';
import HamburgerMenuItem from './small-components/HamburgerMenuItem';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

import * as Constants from '../Constants';
import { HamburgerMenuContext } from '../context/HamburgerMenuContexts';

export default function HamburgerMenu({user}) {
  const {showMenu, setShowMenu} = React.useContext(HamburgerMenuContext);

  function handleClick() {
    setShowMenu(false);
  }
      return (
          <Paper sx={{ width: '230px' }}>
              <MenuList dense>
              <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon}
              path="./" onClick={handleClick}/>
              <HamburgerMenuItem text="About InternView" icon = {InfoIcon}
              path = {"./" + Constants.ABOUT_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="Log Out" icon = {LogoutIcon}
              path = {'../' + Constants.SIGN_IN} onClick={handleClick}/>
              </MenuList>
          </Paper>
      );
  }

