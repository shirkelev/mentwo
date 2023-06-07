import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography, Avatar } from '@mui/material';
import { UserModalContext } from '../context/UserModalContext';
import { Stack, margin } from '@mui/system';
import styled from '@emotion/styled';
import Tag from './small-components/Tag';
import * as Constants from '../Constants';
import TagsCategory from './small-components/TagsCategory';

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
  border: `px solid ${theme.palette.primary.main}`, // Use the theme's primary color for the border
  boxShadow: theme.shadows[6], // Adjust the shadow to your preference
  padding: theme.spacing(2),
  textAlign: 'center',
  width: 250, // Increase the width to accommodate more space around the text
  maxWidth: '90%', // Optional: Set a maximum width for the modal
  borderRadius: theme.shape.borderRadius, // Use the theme's border radius for consistency
}));

const TagsWithHeadlineContainer = ({headlineCategory, tagsCategory}) => {
  return (
    <div style={{ display: 'flex', overflowX: 'auto', marginTop: 12 }}>
      {/* <Stack spacing={1}>
        <span style={{ display: 'inline-block', textAlign: 'left' }}>
          <TagsCategory category={headlineCategory} num={3} />
        </span>
        <Box display="flex" flexWrap="wrap" gap={1}>
          {['A', 'B', 'C', 'A', 'B', 'C'].map((badge, index) =>
          <Tag text={'CPP'} category={tagsCategory}/>
          )}
        </Box>
      </Stack> */}
        <Box display="flex" flexWrap="wrap" gap={1}>
          <TagsCategory category={headlineCategory} num={3} />
          {['A', 'B', 'C', 'A'].map((badge, index) =>
          <Tag text={'CPP'} category={tagsCategory}/>
          )}
        </Box>
    </div>
  )
}

const UserCardModal = ({user, onClose}) => {

    const { openUserModal, setOpenUserModal, modalType, setModalType } = useContext(UserModalContext);

    function ModalContent({modalType}){
      if(modalType === 'about'){
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
          </>
          
        )
      }
    }
  
    return (

      <Modal
          open={openUserModal}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
              >
      <ModalStyle>
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} marginBottom={2}>
          <Avatar src={user.img} sx={{ width: 56, height: 56 }} borderStyle="line" />
          <Stack spacing={1}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>{user.name} {user.lastName}</Typography>
            <Typography variant="subtitle1">{user.profession}</Typography>
          </Stack>
        </Stack>
        {modalType === 'about' ? 
        <>
            <TagsWithHeadlineContainer headlineCategory = {Constants.FIELDS} tagsCategory = {Constants.FIELD}/>
            <TagsWithHeadlineContainer headlineCategory = {Constants.TECHSKILLS} tagsCategory = {Constants.TECHSKILL}/>
            <TagsWithHeadlineContainer headlineCategory = {Constants.SOFTSKILLS} tagsCategory = {Constants.SOFTSKILL}/>
            <TagsWithHeadlineContainer headlineCategory = {Constants.AGENDAS} tagsCategory = {Constants.AGENDA}/>
        </>
                : null}
                
        <ModalContent modalType={modalType}/>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
          <Button variant="outlined" onClick={onClose} size="small">Close</Button>
        </div>
      </ModalStyle>
      </Modal>
    );
  };
  
  export default UserCardModal;
  
  
  
  
  
  
  
  