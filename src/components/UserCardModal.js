import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import { UserModalContext } from '../context/UserModalContext';

const UserCardModal = ({ name, email, phone, description, imageSrc,open }) => {
    const {openUserModal, setOpenUserModal} = useContext(UserModalContext);
    // const {modalDetails, setModalDetails} = useContext(UserModalContext);
    
    const handleOpenModal = () => {
      setOpenUserModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenUserModal(false);
    };
  
    return (

        <Modal open={openUserModal} onClose={handleCloseModal}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', 
                transform: 'translate(-50%, -50%)', maxWidth:'70%', maxHeight:'70%', bgcolor: 'background.paper', boxShadow: 24, p: 4 
                ,margin:2}}>
            <Typography variant="h6" sx={{ mb: 2 }}>{name}</Typography>
            <img src={imageSrc} alt={name} sx={{ maxWidth: '100%', mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 1 }}>Email: {email}</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>Phone: {phone}</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>{description}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" onClick={handleCloseModal}>Close</Button>
            </Box>
          </Box>
        </Modal>
    );
  };
  
  export default UserCardModal;
  
  
 
  
  
  
  
  
  
  