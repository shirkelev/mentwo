import React from 'react';
import HamburgerMenuItem from './small-components/HamburgerMenuItem';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Check from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import * as Constants from '../Constants';
import { HamburgerMenuContext } from '../context/HamburgerMenuContexts';

export default function HamburgerMenu({user}) {
  const {showMenu, setShowMenu} = React.useContext(HamburgerMenuContext);

  function handleClick() {
    setShowMenu(false);
  }
  if (!user || user.type === 'mentor') { // todo: change when we have global var of user!
      return (
          <Paper sx={{ width: '270px' }}>
              <MenuList dense>
              {/* <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon}
              path="./" onClick={handleClick}/> */}
              <HamburgerMenuItem text="Interviewees Suggestions" icon = {GroupIcon}
              path = {'./'} onClick={handleClick}/>
              <HamburgerMenuItem text="Approved Interviewees" icon = {HowToRegIcon}
              path = {'./' + Constants.MENTOR_IN_PROCESS_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="Finished Interviews" icon = {Check}
              path = {'./' + Constants.MENTOR_FINISHED_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="Mock Interviews Tips" icon = {NextWeekIcon}
              path = {"./" + Constants.RECOMMENDATINS_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="About InternView" icon = {InfoIcon}
              path = {"./" + Constants.ABOUT_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="Log Out" icon = {LogoutIcon}
              path = {'../' + Constants.SIGN_IN} onClick={handleClick}/>
              </MenuList>
          </Paper>
      );
  }
  else {
      return (
          <Paper sx={{ width: 320 }}>
            <MenuList dense>
              {/* <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon}
              path="/"  onClick={handleClick}/> */}
              <HamburgerMenuItem text="Current Status" icon = {AutorenewIcon}
              path = {'./' + Constants.MENTEE_STATUS} onClick={handleClick}/>
              <HamburgerMenuItem text="Mock Interviews Tips" icon = {NextWeekIcon}
              path = {"./" + Constants.RECOMMENDATINS_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="About InternView" icon = {InfoIcon}
              path = {"./" + Constants.ABOUT_PAGE} onClick={handleClick}/>
              <HamburgerMenuItem text="Log Out" icon = {LogoutIcon}
              path = {'../' + Constants.SIGN_IN} onClick={handleClick}/>
            </MenuList>
          </Paper>
        );
  }
}
