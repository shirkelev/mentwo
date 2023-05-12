// import React from 'react';
// // import {  } from '../../context/UserContentDetailsContext';
// import { Button, Modal, Box, Typography } from '@mui/material';
// import {UserContentDetailsContext} from '../../context/UserContentDetailsContext';

// export default function UserContentDetails({name, email, phone}) {
//   const { showDetails, setShowDetails } = React.useContext(UserContentDetailsContext);

//   const handleOpenDetails = () => {
//     setShowDetails(true);
//   };

//   const handleCloseDetails = () => {
//     setShowDetails(false);
//   };

//   return (
//     <Modal open={handleOpenDetails} onClose={handleCloseDetails}>
//       <Box sx={{ position: 'absolute', top: '50%', left: '50%', 
//             transform: 'translate(-50%, -50%)', maxWidth:'70%', maxHeight:'70%', bgcolor: 'background.paper', boxShadow: 24, p: 4 
//             ,margin:2}}>
//         <Typography variant="body1" sx={{ mb: 1 }}> {name}</Typography>
//         <Typography variant="body1" sx={{ mb: 1 }}>Email: {email}</Typography>
//         <Typography variant="body1" sx={{ mb: 1 }}>Phone: {phone}</Typography>
//         <Typography variant="body1" sx={{ mb: 1 }}>Whatsapp: {phone}</Typography>
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//           <Button variant="contained" onClick={handleCloseDetails}>Close</Button>
//         </Box>
//       </Box>
//     </Modal>
// );

// }
