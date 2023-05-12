import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography, Avatar } from '@mui/material';
import { UserModalContext } from '../context/UserModalContext';
import { Stack } from '@mui/system';

const h2Styles = {
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'normal',
  wordWrap: 'break-word' 
};

const UserCardModal = ({ name, email, phone, description, imageSrc,open, detailes }) => {
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
            <Stack 
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}>
              <Avatar src={imageSrc}/>
              <h1>{name}Name</h1>
            </Stack>
            <h2 style={h2Styles}>{detailes} some detailes some detailes hahahah</h2>
{ /*
            <Typography variant="body1" sx={{ mb: 1 }}>Email: {email}</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>Phone: {phone}</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>{description}</Typography> */}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" onClick={handleCloseModal}>Close</Button>
            </Box>
          </Box>
        </Modal>
    );
  };
  
  export default UserCardModal;
  
  
 
  
  
  
  
  
  
  