import React from 'react';
import HamburgerMenuItem from './small-components/HamburgerMenuItem';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import { UserAuth } from '../context/AuthContext'

import * as Constants from '../Constants';
import { HamburgerMenuContext } from '../context/HamburgerMenuContexts';

export default function HamburgerMenu({user}) {
  const {showMenu, setShowMenu} = React.useContext(HamburgerMenuContext);
  const {logOut} = UserAuth();

  function handleClick() {
    setShowMenu(false);
  }

  function handelSignOut(){
    logOut();
    setShowMenu(false);
  }

      return (
          <Paper sx={{ width: '230px' }}>
              <MenuList dense>
              <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon}
              path={"./" + Constants.PROFILE_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="About InternView" icon = {InfoIcon}
              path = {"./" + Constants.ABOUT_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="Log Out" icon = {LogoutIcon}
              path = {'../'} onClick={handelSignOut}/>
              </MenuList>
          </Paper>
      );
  }

