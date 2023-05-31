import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography, Avatar } from '@mui/material';
import { UserModalContext } from '../context/UserModalContext';
import { Stack, margin } from '@mui/system';
import styled from '@emotion/styled';
import Chip from '@mui/material/Chip';

const h2Styles = {
  maxWidth: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'normal',
  wordWrap: 'break-word' 
};

const ModalStyle = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFFFFF', // Set the background color to white
  border: `2px solid ${theme.palette.primary.main}`, // Use the theme's primary color for the border
  boxShadow: theme.shadows[6], // Adjust the shadow to your preference
  padding: theme.spacing(4),
  textAlign: 'center',
  width: 250, // Increase the width to accommodate more space around the text
  maxWidth: '90%', // Optional: Set a maximum width for the modal
  borderRadius: theme.shape.borderRadius, // Use the theme's border radius for consistency
}));

const UserCardModal = ({user, variant}) => {

    const {openUserModal, setOpenUserModal} = useContext(UserModalContext);
    // const {modalDetails, setModalDetails} = useContext(UserModalContext);
    
    const handleOpenModal = () => {
      setOpenUserModal(true);
    };
  
    const handleCloseModal = () => {
      setOpenUserModal(false);
    };

    function ModalContent(){
      if(variant === 'about'){
        return(
        <>
        <Typography><text style={h2Styles}><br></br>{user.description}</text></Typography>
        </>
        )
      }
      else{
        return(
          <>
          <Typography variant="body1" sx={{ mb: 1 }}>Email: {user.email}</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>Phone: {user.phone}</Typography>
          {/* <Typography variant="body2" sx={{ mb: 2 }}>{user.description}</Typography> */}
          
          </>
          
        )
      }
    }
  
    return (

      // <Modal
      //   open={openUserModal}
      //   onClose={handleCloseModal}
      //   aria-labelledby="modal-modal-title"
      //   aria-describedby="modal-modal-description">
      //     <ModalStyle>
      //         <Stack 
      //           direction="row"
      //           justifyContent="flex-start"
      //           alignItems="center"
      //           spacing={2}
      //           marginBottom={2}
      //               >
      //           <Avatar src={user.img} sx={{ width: 56, height: 56 }} borderStyle='line'/>
      //           <Typography variant="h5" style={{ fontWeight: 'bold' }}>{user.name} {user.lastName}</Typography>
      //         </Stack>
      //         <ModalContent/>
              
      //         <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop:30}}>
      //           <Button variant="outlined" onClick={handleCloseModal} size='small'>Close</Button>
      //         </div>
      //     </ModalStyle>
      //   </Modal>

      <Modal
          open={openUserModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
              >
      <ModalStyle>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} marginBottom={2}>
          <Avatar src={user.img} sx={{ width: 56, height: 56 }} borderStyle="line" />
          <Stack spacing={1}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>{user.name} {user.lastName}</Typography>
            <Typography variant="subtitle1">{user.profession}</Typography>
            <Stack direction="row" spacing={1}>
              {/* {user.badges.map((badge, index) => (
                <Chip key={index} label={badge} /> */}
                {['A', 'B', 'C'].map((badge, index) => {return <Chip key={index} label={badge} />})}
            </Stack>
          </Stack>
        </Stack>
        <div>{user.description}</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 30 }}>
          <Button variant="outlined" onClick={handleCloseModal} size="small">Close</Button>
        </div>
      </ModalStyle>
    </Modal>


        
    );
  };
  
  export default UserCardModal;
  
  
  
  
  
  
  
  