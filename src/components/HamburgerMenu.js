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
import * as Constants from '../Constants';
import { useState } from 'react';

export default function HamburgerMenu({user}) {
  if (!user || user.type === 'mentor') { // todo: change when we have global var of user!
      return (
          <Paper sx={{ width: '270px' }}>
              <MenuList dense>
              <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon}
              path="/" />
              <HamburgerMenuItem text="Pendings & Running Processes" icon = {GroupIcon}
              path = {'../' + Constants.MENTOR_PENDINGS_AND_RUNNING_PAGE} />
              <HamburgerMenuItem text="Finished Processes" icon = {Check}
              path = {'../' + Constants.MENTOR_FINISHED_PAGE} />
              <HamburgerMenuItem text="About" icon = {InfoIcon}
              path = {"/"} />
              <HamburgerMenuItem text="Log Out" icon = {LogoutIcon}
              path = {'../' + Constants.SIGN_IN} />
              </MenuList>
          </Paper>
      );
  }
  else {
      return (
          <Paper sx={{ width: 320 }}>
            <MenuList dense>
              <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon}
              path="/" />
              <HamburgerMenuItem text="Current Status" icon = {AutorenewIcon}
              path = {'../' + Constants.MENTEE_STATUS} />
              <HamburgerMenuItem text="About" icon = {InfoIcon}
              path = {"/"} />
              <HamburgerMenuItem text="Log Out" icon = {LogoutIcon}
              path = {'../' + Constants.SIGN_IN} />
            </MenuList>
          </Paper>
        );
  }
}

// const HamburgerMenu = ({ isOpen, handleClose }) => {
//   return (
//     <div className={isOpen ? 'open' : 'closed'}>
//         <div className="hamburger-menu">    
//             <div className="hamburger-header">
//                 <div className="logo">
//                     Your Logo Here
//                 </div>
//                 <div className="close-icon" onClick={handleClose}>
//                     X
//                 </div>
//             </div>
//             <div className="hamburger-body">
//                 <HamburgerMenuItem text="Item 1" />
//                 <HamburgerMenuItem text="Item 2" />
//                 <HamburgerMenuItem text="Item 3" />
//                 <HamburgerMenuItem text="Item 4" />
//                 <HamburgerMenuItem text="Item 5" />
//             </div>
//         </div>
//     </div>
//   );
// };

// export default HamburgerMenu;
