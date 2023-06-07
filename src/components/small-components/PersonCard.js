import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { UserModalContext } from '../../context/UserModalContext';
import { useTheme } from '@emotion/react';
import UserContentDetails from './UserContectDetails';
import {UserContentDetailsContext} from '../../context/UserContentDetailsContext';
import * as Constants from '../../Constants';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RestaurantMenu } from '@mui/icons-material';
import UserCardModal from '../UserCardModal';


const maxLength = 70;



function trimDetail(details){
    return details.slice(0, maxLength) + (details.length > maxLength ? "..." : "");
}

export default function PersonCard({variant, user}) {

  const navigate = useNavigate();

  // const {openUserModal, setOpenUserModal, setModalType} = React.useContext(UserModalContext);
  const [openUserModal, setOpenUserModal] = React.useState(false);

  const handleClickViewMore = () => {
    setOpenUserModal(!openUserModal);
  }

  const hadleClickChooseMentor = () => {
    user.changeStatus(2);
  }

  const handleClickContact = () => {
    setOpenUserModal(!openUserModal);
  }

  const handleClickDecline = () => {
    navigate('../' );
  }

  const handleClickFinish = () => {
    navigate('./' + Constants.PROCESS_COMPLETION_FORM);
  }

  const handleClickFeedback = () => {
    navigate('../' + Constants.PROCESS_COMPLETION_FORM);
  }

  const handleClickApprove = () => {
    navigate('../' + Constants.WAIT_MENTOR_APPROVAL_PAGE);
  }

  const handleClickShare = () => { 
    return null;
  }

  const MAIN_CTA = {
    variant: 'outlined',
    color: 'primary',
  };
  
  const SECONDARY_CTA = {
    variant: 'text',
    color: 'primary',
  }
  let modalType;
  let ButtonSection;
  switch (variant) {
    case Constants.PENDINGS:
      modalType = 'about';
      ButtonSection = () => {
        
        return(
          <>
          <Button size="small" onClick={handleClickApprove} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }}>Approve</Button>
          <Button size="small" onClick={handleClickDecline} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>Decline</Button> 
          <Button size="small" onClick={handleClickViewMore} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>About</Button> 
          </>
        )
      };
      break;
    case Constants.PROCESS:
      ButtonSection = () => {
        const modalType = 'contact';
        return(
          <>
          <Button size="small" onClick={handleClickContact} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }}>Contact</Button>
          <Button size="small" onClick={handleClickDecline} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>Decline</Button> 
          <Button size="small" onClick={handleClickViewMore} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}>About</Button> 
          </>
        )
      };
      break;
    case Constants.FINISHED:
      modalType = 'contact';
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
      modalType = 'about';
      ButtonSection = () => {
          <> </>
      };
    };
  
  return (
      <>
      <UserModalContext.Provider value={{openUserModal, setOpenUserModal, modalType}}>
        <Card sx={{ boxShadow:2, margin:1, padding:1, width:280, borderRadius: 8}}>
          <Stack 
          direction="row"
          justifyContent="left"
          alignItems="center"

          >
            <Avatar  sx={{ width: 70, height: 70, border: 1, margin:2}} src={user.img}  borderStyle='line'/>
            
            <Stack direction="column" justifyContent="left" alignItems="center">
              <Typography gutterBottom variant="h5" component="div" fontWeight={'bold'}> {user.name} {user.lastName} </Typography>
              <Typography variant="body2" color="text.secondary" fontWeight={'bold'}> {user.profession} </Typography>
            </ Stack>
          </Stack>
          
          <CardContent>
            
          </CardContent>

          <CardActions sx={{justifyContent:'center', paddingBottom:2}}>
            <ButtonSection />
          </CardActions>
        </Card>
        <UserCardModal user={user} variant={modalType} onClose={() => {setOpenUserModal(!openUserModal)}}/>
      </UserModalContext.Provider>
      </>
    
  );
}