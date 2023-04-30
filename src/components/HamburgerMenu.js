import React from 'react';
import HamburgerMenuItem from './small-components/HamburgerMenuItem';

import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Check from '@mui/icons-material/Check';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LogoutIcon from '@mui/icons-material/Logout';

export default function HamburgerMenu({user}) {
    if (user.type === 'mentor') {
        return (
            <Paper sx={{ width: '75vw' }}>
                <MenuList dense>
                <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon} />
                <HamburgerMenuItem text="Pendings & Running Processes" icon = {GroupIcon} />
                <HamburgerMenuItem text="Finished Processes" icon = {Check} />
                <HamburgerMenuItem text="Log Out" icon = {LogoutIcon} />
                </MenuList>
            </Paper>
        );
    }
    else {
        return (
            <Paper sx={{ width: 320 }}>
              <MenuList dense>
                <HamburgerMenuItem text="My Profile" icon = {AccountCircleIcon} />
                <HamburgerMenuItem text="Current Status" icon = {AutorenewIcon} />
                <HamburgerMenuItem text="Log Out" icon = {LogoutIcon} />
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
