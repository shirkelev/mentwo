import React, { useContext, useState } from 'react';
import { Button, Modal, Box, Typography, Avatar } from '@mui/material';
import { UserModalContext } from '../context/UserModalContext';
import { Stack, margin } from '@mui/system';
import styled from '@emotion/styled';
import Tag from './small-components/Tag';
import * as Constants from '../Constants';
import TagsCategory from './small-components/TagsCategory';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Chip from '@mui/material/Chip';
import DescriptionIcon from '@mui/icons-material/Description';

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
  width: '80%',
  maxHeight: '92%',
  overflowY: 'auto',
  borderRadius: theme.shape.borderRadius, // Use the theme's border radius for consistency
}));

const TagsContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
}));

const TagsWithHeadlineContainer = ({category, list}) => {
  const attList = list ? list : [];
  if(attList.length === 0){
    return null;
  }
  // console.log(category, attList)
  return (
    <>
    <div style={{ display: 'flex'
        , flexDirection:'column'
        , overflowX: 'auto'
        , marginTop: 16
        , gap: 12 }}>
    <TagsCategory category={category}  />
        <Box display="flex" flexWrap="wrap" gap={1}>
          {attList.map((badge, index) =>
          <Tag text={badge} category={category} clickAble={false} isPressed={category === Constants.AGENDAS}/>
          )}
        </Box>
    </div>
    </>
  )
}

const UserCardModal = ({user, onClose}) => {

    const { openUserModal, setOpenUserModal, modalType, setModalType } = useContext(UserModalContext);
    const userWhatsapp = user.phone?.startsWith('0') ? '+972' + user.phone.substr(1) : user.phone;
    const whatsappLink = `https://wa.me/'${userWhatsapp}'?text=Hi%20${user.name}%20${user.lastName}!%20Im%20%20From%20InterView!`;
    const whatsappProps = {
      color: user.phone ? 'success' : 'default',
      onClick : user.phone ?
      () => {
        try{window.open(whatsappLink, "_blank")}
        catch(e){
          console.log(e)
          window.open('https://www.whatsapp.com/', "_blank")
        }
      } 
      : () => {},
    }

    function ModalContent({modalType}){
      if(modalType === 'about'){
        return(
        <>
        <Typography textAlign='left'><text style={h2Styles}><br></br>{user.description}</text></Typography>
        </>
        )
      }
      else{
        return(
          <>
          <Typography variant="body1" sx={{ mb: 1 }}>Email: {user.email}</Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>Phone: {user.phone}</Typography>
          <Chip
            label="Caht On Whatsapp"
            onClick={whatsappProps.onClick}
            onDelete={() => {}}
            size='small'
            icon={<WhatsAppIcon />}
            deleteIcon={<></>}
            variant="outlined"
            color={whatsappProps.color}
            
          />
          </>
          
        )
      }
    }

    const ChipSection = () => {

      const hasLinkedin = user.linkedin ? true : false;
      if(hasLinkedin){
        let linkedin = user.linkedin;
        if(!linkedin.startsWith('http')){
          if(!linkedin.includes('www.linkedin.com/')){
            linkedin = 'www.linkedin.com/' + linkedin;
          };
          linkedin = 'https://' + linkedin;
        }
        user.linkedin = linkedin
        
      }
      const linkedinProps = {
        color: hasLinkedin ? 'success' : 'default',
        onClick : hasLinkedin ?  
          () => {
            try{window.open(user.linkedin, "_blank")}
            catch(e){
              console.log(e)
              window.open('https://www.linkedin.com/', "_blank")
            }
             } : () => {},
      }
      
      const hasCV = user.cv ? true : false;
      const cvProps = {
        color: hasCV ? 'success' : 'default',
        onClick : hasCV ?
          () => {window.open(user.cv, "_blank")} : () => {},
      }
      return(
        <Stack spacing={1} direction="row">
          <Chip
            label="Linkedin"
            onClick={linkedinProps.onClick}
            onDelete={() => {}}
            size='small'
            icon={<LinkedInIcon />}
            deleteIcon={<></>}
            variant="outlined"
            color={linkedinProps.color}
            
          />
          {user.type === 'mentee' ?
          <Chip
            label="CV"
            onClick={cvProps.onClick}
            onDelete={() => {}}
            size='small'
            icon={<DescriptionIcon />}
            deleteIcon={<></>}
            variant="outlined"
            color={cvProps.color}
          />
          : null}
      </Stack>
      )
    }
  
    return (
      
      <Modal
          open={openUserModal}
          onClose={onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  }}
          >
      <ModalStyle > 
        <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2} marginBottom={3}>
          <Avatar src={user.img} sx={{ width: 50, height: 50, border: 1}} borderStyle="line"  />
          <Stack spacing={1} direction="column">
            <Stack spacing={1} direction="row">
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>{user.name} {user.lastName}</Typography>
            </Stack>
            <ChipSection/>
          </Stack>
        </Stack>
        {modalType === 'about' ? 
          <>
          {/* <TagsContainer> */}
            <TagsWithHeadlineContainer category = {Constants.FIELDS}  list={user.mutualTags.fields ? user.mutualTags.fields : []}/>
            <TagsWithHeadlineContainer category = {Constants.AGENDAS} list={user.mutualTags.agendas ? user.mutualTags.agendas : []}/>
            <TagsWithHeadlineContainer category = {Constants.TECHSKILLS} list={user.mutualTags.techSkills ? user.mutualTags.techSkills : []}/>
            <TagsWithHeadlineContainer category = {Constants.SOFTSKILLS} list={user.mutualTags.softSkills ? user.mutualTags.softSkills : []}/>
          {/* </TagsContainer> */}
          </>
              : null}
                
        <ModalContent modalType={modalType}/>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
          <Button variant="outlined" color='success' onClick={onClose} size="small">Close</Button>
        </div>
      </ModalStyle>
      </Modal>
    );
  };
  
  export default UserCardModal;
  
  
  
  
  
  
  
  