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
import { UserContext } from '../../context/UserContext';
import { DB } from '../../data/firebase';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Badge from '@mui/material/Badge';


const maxLength = 70;

const FiledsList = ({list}) => {
  const itemList = list?.length > 0 ? list.join(",  ") : null; 

  return (
    <div style={{ marginRight: 5, marginLeft: 5 }}>
      <Typography variant="body2" fontWeight="bold" color="text.secondary">
        {itemList}
      </Typography>
    </div>
  );
};



export default function PersonCard({variant, mainUser, cardUser}) {

  const {feedData, setFeedData} = React.useContext(UserContext);
  const defaultDialogState = {title: ''
  ,content: ''
  ,open: false
  ,onApproveFunc: () => {}
  }
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dialogState, setDialogState] = React.useState(defaultDialogState);
  const {setFeedBackFormPartner} = React.useContext(UserContext);

  
  const DialogBox = ({title, content, open, onApproveFunc, onDeclineFunc= () => null }) => {
    // Our dialog box, for decline approve and finise
    const onDecline = () => {
      onDeclineFunc();
      setDialogState(defaultDialogState);
    }
    
    return (
      <Dialog
            open={open}
            keepMounted
            onClose={() => setDialogState(defaultDialogState)}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {content}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={onDecline} color='success' variant='outlined'>No</Button>
              <Button onClick={onApproveFunc} variant="contained">Yes</Button>
            </DialogActions>
          </Dialog>
    )
  }

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

  function moveSpecificId(id, idsFrom, objectsFrom, idsTo, objectsTo) {
    // console.log("Moving id", id, "from", idsFrom, "to", idsTo, "objects", objectsFrom, objectsTo)
    const index = idsFrom.indexOf(id);
    if (index !== -1) {
      // Remove the id and object from the 'From' arrays
      const id = idsFrom.splice(index, 1)[0];
      const object = objectsFrom.splice(index, 1)[0];
  
      // Add the id and object to the 'To' arrays
      idsTo.push(id);
      if(objectsTo){
        objectsTo.push(object);
      }

    }
    return [idsFrom, objectsFrom, idsTo, objectsTo];
    
  }

  const handleClickDecline = () => {
    function removePending(){
      const [pendingIds, pendingObjects, declinedIds, declinedObjects] = moveSpecificId(cardUser.id, 
        feedData?.pendingMentees ? feedData.pendingMentees : [],  
        feedData?.pendingMenteesData ? feedData.pendingMenteesData : [], 
        feedData?.declinedMentees ? feedData.declinedMentees : [], 
        feedData?.declinedMenteesData ? feedData.declinedMenteesData : []);
    
      console.log("Removing from pending and adding to declined",  cardUser.id);
      
      DB.UpdateDeclinedMentees(mainUser.id, declinedIds);
      DB.UpdatePendingMentees(mainUser.id, pendingIds);
      
      setFeedData({...feedData, 
        pendingMentees: pendingIds, 
        pendingMenteesData: pendingObjects, 
        declinedMentees: declinedIds, 
        });
      console.log("Decline");
      setDialogState(defaultDialogState);
    }
    setDialogState({title: 'Decline Interviewee'
      ,content: 'Are you sure you want to decline this interviewee?'
      ,open:true
      ,onApproveFunc: removePending
    });
    
  }

  const handleClickFinish = () => {
    
    function moveToFinish(mentorData, menteeData){
      const [processIds, processObjects, finishedIds, finishedObjects] = 
      moveSpecificId(
        menteeData.id, 
        mentorData?.approvedMentess ? mentorData.approvedMentess : [], 
        mentorData?.approvedMentessData? mentorData.approvedMentessData: [],
        mentorData?.finishedMentees ? mentorData.finishedMentees : [], 
        mentorData?.finishedMenteesData ? mentorData.finishedMenteesData : []
        );
    
      // console.log("Moving From In Process To Finish",  cardUser.id);
      
      DB.UpdateFinishedMentees(mentorData.id, finishedIds);
      DB.UpdateInProcessMentees(mentorData.id, processIds);
      let newFinishedMentors = menteeData.finishedMentors ? menteeData.finishedMentors : [];
      newFinishedMentors.push(mentorData.id);
      DB.removeCurrentMentor(menteeData.id, newFinishedMentors);
      return [processIds, processObjects, finishedIds, finishedObjects];
      
    }
    function onApprove(){
      const [processIds, processObjects, finisheddIds, finishedObjects] = moveToFinish(feedData, cardUser);
      switch (mainUser.type){ 
        case 'mentor':
          setDialogState(
            {
            title: 'Give ' + cardUser.name + ' Your Feedback!'
            ,content: cardUser.name + 'Would really like to hear your feedback on the process!'
            ,open:true
            ,onApproveFunc: () => {
              setFeedBackFormPartner(cardUser);
              navigate('../' + Constants.PROCESS_COMPLETION_FORM + 'id=' + cardUser.id);
              }
            ,onDeclineFunc: () => {
              console.log("Decline Pressed");
              setFeedData({...feedData, 
                approvedMentess: processIds, 
                approvedMenteesData: processObjects, 
                finishedMentees: finisheddIds, 
                finishedMenteesData: finishedObjects
              })
              setModalType('contact');
            }
            });
            setModalType('contact');
          
          
          console.log("Finished Mentor Process Update");
          
          break;

        case 'mentee':
          const newFinishedMentors = feedData.finishedMentors ? feedData.finishedMentors : [];
          const newFinishedMntorsData = feedData.finishedMentorsData ? feedData.finishedMentorsData : [];
          newFinishedMentors.push(feedData.currentMentor);
          newFinishedMntorsData.push(feedData.currentMentorData);
          setModalType('contact');
          setFeedData({...feedData, 
            currentMentor: null,
            currentMentorData: null,
            isMatched: false,
            finishedMentors: newFinishedMentors,
            finishedMentorsData: newFinishedMntorsData
          });
          navigate('../')
          moveToFinish(feedData.currentMentorData, mainUser);
          console.log("Finished Mentor Process Update");
          setDialogState(defaultDialogState);
          break;

        default:
          break;
      }
    }
  setDialogState(
    {
    title: 'Finish Process'
    ,content: 'Have you finished this process?'
    ,open:true
    ,onApproveFunc: onApprove
    });
  
  }

  const handleClickFeedback = () => {
    // console.log(cardUser.feedbackForm);
    switch (mainUser.type){
      case 'mentor':
        if(!cardUser.feedbackForm || !cardUser.feedbackForm.isDone){
          setFeedBackFormPartner(cardUser);
          navigate('../' + Constants.PROCESS_COMPLETION_FORM + 'id=' + cardUser.id);
        } 
        else if(cardUser.feedbackForm.isDone){
          setFeedBackFormPartner(cardUser);
          navigate('../' + Constants.FEEDBACK_FORM_PRESENT_PAGE + 'id=' + cardUser.id);
        }
        break;
      case 'mentee':
        if(!cardUser.feedbackForm || !cardUser.feedbackForm.isDone){
          console.log("Feedback not given");
          return;
        }
        else if(cardUser.feedbackForm.isDone){
          setFeedBackFormPartner(cardUser);
          navigate('../' + Constants.FEEDBACK_FORM_PRESENT_PAGE + 'id=' + cardUser.id);
        }
        break;
      default:
        break;
    }
  }

  const handleClickApprove = () => {
    function approveInterviewee(){
      const [pendingIds, pendingObjects, approvedIds, approvedObjects] = moveSpecificId(cardUser.id, 
        feedData?.pendingMentees ? feedData.pendingMentees : [],  
        feedData?.pendingMenteesData ? feedData.pendingMenteesData : [], 
        feedData?.approvedMentess ? feedData.approvedMentess : [], 
        feedData?.approvedMentessData ? feedData.approvedMentessData : []);
    
      console.log("Removing from pending and adding to declined",  cardUser.id);
      
      DB.UpdateInProcessMentees(mainUser.id, approvedIds);
      DB.UpdatePendingMentees(mainUser.id, pendingIds);
      DB.addNewMentor(cardUser.id, mainUser.id)
      
      setFeedData({...feedData, 
        pendingMentees: pendingIds, 
        pendingMenteesData: pendingObjects, 
        approvedMentess: approvedIds,
        approvedMenteesData: approvedObjects 
        });
      console.log("Approved");
      setDialogState(defaultDialogState);
    }
    setDialogState({title: 'Approve Interviewee'
      ,content: 'Yeah! you are going to make this interviewee happy!'
      ,open:true
      ,onApproveFunc: approveInterviewee
    });
  }

  const handleClickShare = async () => {

      if (navigator.share) {
        try {
          await navigator.share({
            title: 'I helped someone today!',
            text: 'Using the woderfull app Internview, I helped ' + cardUser.name + ' '
                  + cardUser.lastName + ' by conducting a mock interview. You can help someone too!',
            url: 'https://internview-af2ef.web.app',
            
          });
          console.log('Shared successfully');
        } catch (error) {
          console.error('Error sharing:', error);
        }
      } else {
        // Fallback for browsers that don't support Web Share API
        console.log('Web Share API not supported');
        // You can provide an alternative sharing option here
      };
  }

  const FeedbackButton = () => {
    if(mainUser.type === 'mentor' && (!cardUser.feedbackForm || !cardUser.feedbackForm.isDone)){
      return (
        <Badge badgeContent={'+'} color="error" anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
            }} size='small'>
          <Button size="small" onClick={handleClickFeedback} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}
                color='error'>
                  Feedback
          </Button>
        </Badge> 
      );
    }
    else{
      return (
        <Button size="small" onClick={handleClickFeedback} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}
                color={cardUser.feedbackForm && cardUser.feedbackForm.isDone ? 'success' : 'secondary'}>
                  Feedback
          </Button>
      );
      }
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
          <Button size="small" onClick={handleClickApprove} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }} color='success'>Approve</Button>
          <Button size="small" onClick={handleClickDecline} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }} color='warning'>Decline</Button> 
          <Button size="small" onClick={handleClickViewMore} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }} color='success'>About</Button> 
          </>
        )
      };
      break;
    case Constants.PROCESS:
      ButtonSection = () => {
        return(
          <>
          <Button size="small" onClick={handleClickContact} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }} color='success'>Contact</Button>
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
          <Button size="small" onClick={handleClickContact} variant={MAIN_CTA.variant} style={{ fontWeight: 'bold' }} color='success'>Contact</Button>
          <Button size="small" onClick={handleClickShare} variant={SECONDARY_CTA.variant} style={{ fontWeight: 'bold' }}
            color='success'>Share</Button> 
          <FeedbackButton />
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
          <TagsCategory category = {Constants.AGENDAS} num={cardUser.mutualTags?.agendas ? cardUser.mutualTags.agendas.length : 0}/>                      
          <TagsCategory category = {Constants.TECHSKILLS} num={cardUser.mutualTags?.techSkills ? cardUser.mutualTags.techSkills.length : 0}/>
          <TagsCategory category = {Constants.SOFTSKILLS} num={cardUser.mutualTags?.softSkills ? cardUser.mutualTags.softSkills.length : 0}/>
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
          alignItems="center">
            <Avatar  sx={{ width: 70, height: 70, border: 1, margin:2}} src={cardUser.img}  borderStyle='line'/>
            
            <Stack justifyContent="flex-start">
              <Typography variant="h6" fontWeight={'bold'}> {cardUser.name} {cardUser.lastName} </Typography>
            </ Stack>
          </Stack>
           <FiledsList list={cardUser.fields}/>
          {variant !==  Constants.FINISHED ?
          <CardContent>
            <CardInsideContent />
          </CardContent>
          : null}
          
          <CardActions sx={{justifyContent:'center', paddingBottom:2}}>
            <ButtonSection />
          </CardActions>
        </Card>
        <UserCardModal user={cardUser} variant={modalType} onClose={() => {setOpenUserModal(!openUserModal)}}/>
        <DialogBox open={dialogState.open} 
          title={dialogState.title} 
          content={dialogState.content} 
          onApproveFunc={dialogState.onApproveFunc}
          onDeclineFunc={dialogState.onDeclineFunc ? dialogState.onDeclineFunc : () => null } />
      </UserModalContext.Provider>
      
      </>
    
  );
}