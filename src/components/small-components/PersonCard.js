import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Stack } from '@mui/material';
import { UserModalContext } from '../../context/UserModalContext';
import * as Constants from '../../Constants';
import { useNavigate } from 'react-router-dom';
import UserCardModal from '../UserCardModal';
import TagsCategory from './TagsCategory';


const maxLength = 70;

const FiledsList = ({list}) => {
  const itemList = list.join(",  "); 

  return (
    <div style={{ marginRight: 5, marginLeft: 5 }}>
      <Typography variant="body2" fontWeight="bold" color="text.secondary">
        {itemList}
      </Typography>
    </div>
  );
};


function trimDetail(details){
    return details.slice(0, maxLength) + (details.length > maxLength ? "..." : "");
}

export default function PersonCard({variant, mainUser, cardUser}) {

  const navigate = useNavigate();

  // const {openUserModal, setOpenUserModal, setModalType} = React.useContext(UserModalContext);
  const [openUserModal, setOpenUserModal] = React.useState(false);
  const [modalType, setModalType] = React.useState('contact');

  const handleClickViewMore = () => {
    setModalType('about');
    setOpenUserModal(!openUserModal);
    
  }

  const handleClickChooseMentor = () => {
    cardUser.changeStatus(2);
  }

  const handleClickContact = () => {
    setModalType('contact');
    setOpenUserModal(!openUserModal);
    
  }

  const handleClickDecline = () => {
    mainUser.addMentee(cardUser, 'declined');
    // todo: DB update
  }

  const handleClickFinish = () => {
    mainUser.addMentee(cardUser, 'finished');
    // todo: DB update
  }

  const handleClickFeedback = () => {
    navigate('../' + Constants.PROCESS_COMPLETION_FORM);
  }

  const HandleClickApprove = () => {
    mainUser.addMentee(cardUser, 'approved');
    // todo: DB update
  }

  const handleClickShare = () => { 
    return null;
    // todo: do something (modal?)
  }

  const MAIN_CTA = {
    variant: 'outlined',
    color: 'primary',
  };
  
  const SECONDARY_CTA = {
    variant: 'text',
    color: 'primary',
  }
  let ButtonSection;
  switch (variant) {
    case Constants.PENDINGS:
      ButtonSection = () => {
        
        return(
          <>
          <Button size="small" onClick={HandleClickApprove} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }}>Approve</Button>
          <Button size="small" onClick={handleClickDecline} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>Decline</Button> 
          <Button size="small" onClick={handleClickViewMore} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>About</Button> 
          </>
        )
      };
      break;
    case Constants.PROCESS:
      ButtonSection = () => {
        return(
          <>
          <Button size="small" onClick={handleClickContact} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }}>Contact</Button>
          <Button size="small" onClick={handleClickFinish} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>Finish</Button> 
          <Button size="small" onClick={handleClickViewMore} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>About</Button> 
          </>
        )
      };
      break;
    case Constants.FINISHED:
      ButtonSection = () => {
        return(
          <>
          <Button size="small" onClick={handleClickContact} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }}>Contact</Button>
          <div></div> 
          <Button size="small" onClick={handleClickShare} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>Share</Button> 
          </>
        )
      };
      break;
    default:
      ButtonSection = () => {
          <> </>
      };
    };
    
    const CardInsideContent = () => {
      return(
        <>
        
        {/* <TagsCategory category = {Constants.FIELDS}  num={cardUser.mutualTags.fields ? cardUser.mutualTags.fields.length : 0}/> */}
        <Stack direction="column"
                    justifyContent="left"
                    alignItems="left"
                    spacing={1}>
        <TagsCategory category = {Constants.TECHSKILLS} num={cardUser.mutualTags?.techSkills ? cardUser.mutualTags.techSkills.length : 0}/>
        <TagsCategory category = {Constants.SOFTSKILLS} num={cardUser.mutualTags?.softSkills ? cardUser.mutualTags.softSkills.length : 0}/>
        <TagsCategory category = {Constants.AGENDAS} num={cardUser.mutualTags?.agendas ? cardUser.mutualTags.agendas.length : 0}/>
        </Stack>
        </>
      )
    }
  
  return (
      <>
      <UserModalContext.Provider value={{openUserModal, setOpenUserModal, modalType, setModalType}}>
        <Card sx={{ boxShadow:2, margin:1, padding:1, width:280, borderRadius: 8}}>
          <Stack 
          direction="row"
          justifyContent="left"
          alignItems="center"

          >
            <Avatar  sx={{ width: 70, height: 70, border: 1, margin:2}} src={cardUser.img}  borderStyle='line'/>
            
            <Stack justifyContent="flex-start">
              <Typography variant="h6" fontWeight={'bold'}> {cardUser.name} {cardUser.lastName} </Typography>
            </ Stack>
          </Stack>
           <FiledsList list={cardUser.fields}/>
          <CardContent>
            <CardInsideContent />
          </CardContent>
          
          <CardActions sx={{justifyContent:'center', paddingBottom:2}}>
            <ButtonSection />
          </CardActions>
        </Card>
        <UserCardModal user={cardUser} variant={modalType} onClose={() => {setOpenUserModal(!openUserModal)}}/>
      </UserModalContext.Provider>
      </>
    
  );
}