// import React, { useState } from 'react';
// import {
//   Avatar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Menu,
//   MenuItem,
//   BottomNavigation,
//   BottomNavigationAction,
// } from '@mui/material';

// const HomePageN = () => {
//   const [openMenu, setOpenMenu] = useState(false);

//   return (
//     <div>
//       <Toolbar>
//         <IconButton
//           color="primary"
//           onClick={() => setOpenMenu(true)}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6">Home Page</Typography>
//       </Toolbar>
//       <Menu open={openMenu} onClose={() => setOpenMenu(false)}>
//         <MenuItem onClick={() => setOpenMenu(false)}>
//           <Link to="/">Home</Link>
//         </MenuItem>
//         <MenuItem onClick={() => setOpenMenu(false)}>
//           <Link to="/about">About</Link>
//         </MenuItem>
//         <MenuItem onClick={() => setOpenMenu(false)}>
//           <Link to="/contact">Contact</Link>
//         </MenuItem>
//       </Menu>
//       <ContentSection />
//       <BottomNavigation>
//         <BottomNavigationAction icon={<AddIcon />} label="Add" />
//         <BottomNavigationAction icon={<SettingsIcon />} label="Settings" />
//       </BottomNavigation>
//     </div>
//   );
// };

// // const ContentSection = () => {
// //   return (
// //     <div>
// //       <Avatar />
// //       <InfoButton />
// //     </div>
// //   );
// // };

// // const InfoButton = () => {
// //   return (
// //     <IconButton color="primary">
// //       <InfoIcon />
// //     </IconButton>
// //   );
// // };

// export default HomePageN;
