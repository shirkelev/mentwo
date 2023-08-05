import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CustomButton from '../components/small-components/Button';
import BigContentBox from '../components/small-components/BigContentBox';
import TextBox from '../components/small-components/TextBox';
import * as Constants from '../Constants';
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import { DB } from '../data/firebase';


const RootContainer = styled(Container)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   paddingTop: theme.spacing(1),
   paddingBottom: theme.spacing(10),
   paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
}));

const FormContainer = styled('form')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'left',
   width: '100%',
   marginTop: theme.spacing(1.5),
   marginBottom: theme.spacing(1.5),
}));

const ButtonWrapper = styled(CustomButton)(({ theme }) => ({
   marginBottom: theme.spacing(2),
}));

const ButtonSection = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'center',
   gap: '20px',
   margin: theme.spacing(2),
}));

const Title = styled('h1')(({ theme }) => ({
    fontSize: 24,
//    marginBottom: theme.spacing(2),
//    marginTop: theme.spacing(-5),
   fontFamily: theme.typography.fontFamily,
   justifyContent: 'center',
   alignContent: 'center',
    textAlign: 'center',
}));

const FeedbackContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   width: '100%',
   marginBottom: theme.spacing(3),
}));

const Statement = styled('h3')(({ theme }) => ({
   marginBottom: theme.spacing(-1.5),
   fontSize: 14,
   fontStyle: 'italic',
   fontWeight: 'normal',
   fontFamily: theme.typography.fontFamily,
}));

const Question = styled('h3')(({ theme }) => ({
   marginBottom: theme.spacing(1),
   fontSize: 17,
   fontFamily: theme.typography.fontFamily,
}));

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

const ListContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // marginBottom: theme.spacing(3),
    // marginTop: theme.spacing(3),
}));

const SingleSkillContainer = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(0.5),
    gap: '30px',
    alignItems: 'center',
}));

const SkillNumber = styled('div')(({ theme }) => ({
    width: '20px', // Adjust this width as needed
    textAlign: 'center',
    fontWeight: 'bold',
}));

const TitleAndAvatar = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100px',
    marginBottom: theme.spacing(1),
    // marginTop: theme.spacing(3),
    alignItems: 'center',
    justifyContent: 'center',
    gap: '40px',
}));

const DialogBox = ({title, content, open, onApproveFunc, onDecline, setDialogState}) => {
    // Our dialog box, for decline approve and finise
    
    return (
      <Dialog
            open={open}
            keepMounted
            onClose={() => setDialogState(false)}
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


const ProcessCompletionPage = ({user, partner, formId=null}) => {

    if(!partner) {
        partner = user;
    }

    const [feedbackForm, setFeedbackForm] = useState(
        partner?.feedbackForm ? partner.feedbackForm : {
            toKeepList: [],
            toImproveList: [],
            toKeepText: null,
            toImproveText: null,
            freeText: null,
            isDone: false,
        }
    );
    
    // TODO remove and change to the real user!

    const navigate = useNavigate();

    const backTapped = () => {
        setSaveDialogOpen(true);
    };

    const [doneDialogOpen, setDoneDialogOpen] = React.useState(false);
    const [saveDialogOpen, setSaveDialogOpen] = React.useState(false);

    const doneTapped = () => {
        setDoneDialogOpen(true);
    };

    const menteeDialogClosedWithNo = () => {
        setDoneDialogOpen(false);
        navigate('../');
    };

    const menteeDialogClosedWithYes = () => {
        setDoneDialogOpen(false);
        navigate('/' + Constants.SIGN_UP_FLOW, { replace: true });
    };

    const mentorDialogClosed = () => {
        setDoneDialogOpen(false);
        navigate('../');
    };

    const [shareModalOpen, setShareModalOpen] = React.useState(false);

    const shareTapped = (event) => {
        setShareModalOpen(true);
        // Share on LinkedIn
    };
    
    const shareModalClosed = () => {
        setShareModalOpen(false);
    };

    const [selectedRadioOption, setSelectedRadioOption] = useState('');
    
    const handleRadioOptionChange = (event) => {
        setSelectedRadioOption(event.target.value);
    };

    function SkillInput({ placeholder, index=1, isDisabled=false, keepOrImprove="keep" }) {
    
        const handleSkillChange = (event) => {
            if(event.target.value === "") {
                return;
            }
            if(keepOrImprove === "keep"){
                let newList = [...feedbackForm.toKeepList];
                newList[parseInt(index) - 1] = event.target.value;
                setFeedbackForm({
                    ...feedbackForm,
                    toKeepList: newList
                });
            } else {
                let newList = [...feedbackForm.toImproveList];
                newList[parseInt(index) - 1] = event.target.value;
                setFeedbackForm({
                    ...feedbackForm,
                    toImproveList: newList
                });
            }
        };
    
        return( 
            <SingleSkillContainer>
                <SkillNumber>{index}</SkillNumber>
                {/* <Typography variant="h6" gutterBottom component="div"> {index} </Typography> */}
                
                <TextBox
                        id="outlined-basic"
                        label={placeholder}
                        variant="filled"
                        placeholder={placeholder}
                        onBlur={(e) => handleSkillChange(e)}
                        isDisabled={isDisabled}
                        type={"text"}
                    />;
            </SingleSkillContainer>
        );
    }

    const onChangeFreeText = (event, type) => {
        if(type === "keep") {
            setFeedbackForm({
                ...feedbackForm,
                toKeepText: event.target.value
            });
        }
        else if(type === "improve") {
            setFeedbackForm({
                ...feedbackForm,
                toImproveText: event.target.value
            });
        }
        else if(type === "free") {
            setFeedbackForm({
                ...feedbackForm,
                freeText: event.target.value
            });
        }
    }


    const fabStyle = {
        position: 'sticky',
        top: '83vh',
        bottom: '85vh',
        left: '85vw',
      };
    
    const fixFeedbackForm = () => {
        let newForm = {...feedbackForm};
        // go over all attributes, if null fill with empty string
        for (const [key, value] of Object.entries(newForm)) {
            if(value === null || value === undefined) {
                newForm[key] = "";
            }
        }
        for(let i=0; i<newForm.toKeepList.length; i++) {
            if(newForm.toKeepList[i] === null || newForm.toKeepList[i] === undefined) {
                newForm.toKeepList[i] = "Skill " + (i+1);
            }
        }
        for(let i=0; i<newForm.toImproveList.length; i++) {
            if(newForm.toImproveList[i] === null || newForm.toImproveList[i] === undefined) {
                newForm.toImproveList[i] = "Skill " + (i+1);
            }
        }
        return newForm;
        }

    const onClickSave = async () => {
        // Save the feedback form
        let finalForm = fixFeedbackForm()
        finalForm = {...finalForm, isDone: false};
        console.log(finalForm);
        await DB.addNewFeedbackForm(user.id, partner.id, finalForm);
        setSaveDialogOpen(false);
        navigate('../');
    };

    const onClickDone = async () => {
        let finalForm = fixFeedbackForm()
        finalForm = {...finalForm, isDone: true};
        console.log(finalForm);
        await DB.addNewFeedbackForm(user.id, partner.id, finalForm);
        setDoneDialogOpen(false);
        navigate('../');
    }

    useEffect(() => {
        if (shareModalOpen) {
          const timer = setTimeout(shareModalClosed, 3000);
          return () => clearTimeout(timer); // Clear the timer if the modal is closed before the timeout
        }
      }, [shareModalOpen]);

      useEffect(() => {
        if (doneDialogOpen && user.type === 'mentor') {
          const timer = setTimeout(mentorDialogClosed, 3000);
          return () => clearTimeout(timer); // Clear the timer if the modal is closed before the timeout
        }
      }, [doneDialogOpen]);
      

    if(!partner) {
        return(
            <RootContainer maxWidth="md">
            <Title> Theres no interviewee, so we could not present this page please go back</Title>
            </RootContainer>
        );
    }
    else {
        return (
        <>
        
        <Fab color="primary" aria-label="add" size="small" sx={fabStyle} onClick={() => setSaveDialogOpen(true)}>
                <ArrowBackIcon />
        </ Fab>
        <div style={{ backgroundColor: '#F8FFFF' }}>
        <RootContainer maxWidth="md">
            
            <TitleAndAvatar>
                
                <div>
                    <Avatar alt="Remy Sharp" src={partner.img}  sx={{ width: 70, height: 70, border: 1}} borderStyle="line" size="large"/>
                </div>
                <Title>Give {partner.name} Feedback </Title>
            </TitleAndAvatar>

            
            
            <Typography variant="h6" gutterBottom component="div"> 
                Tell {partner.name + ' ' + partner.lastName} what s/he was good at, and what can be improved
            </ Typography>

            <FormContainer>
        
                <FeedbackContainer>
                    <Statement> Top 3 Keepers</Statement>
                    <Question>Top 3 skills that {partner.name} sholud keep</Question>
                    <ListContainer>
                        {/* <ol> */}
                            <SkillInput placeholder={feedbackForm.toKeepList.length >= 1 ?
                                                        feedbackForm.toKeepList[0] :  "Skill 1"} index='1' 
                                                        isDisabled={false}/>
                            <SkillInput placeholder={feedbackForm.toKeepList.length >= 2 ?
                                                        feedbackForm.toKeepList[1] :  "Skill 2"}  index='2'
                                                        isDisabled={false}/>
                            <SkillInput placeholder={feedbackForm.toKeepList.length >= 3 ?
                                                        feedbackForm.toKeepList[2] :  "Skill 3"} index='3'
                                                        isDisabled={false}/>
                        {/* </ol> */}
                    </ ListContainer>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> Keepers - Free Text</Statement>
                    <Question>Please tell {partner.name} what s/he was good at!</Question>
                    <BigContentBox placeholder={ feedbackForm.toKeepText ? feedbackForm.toKeepText :
                        "Tell " + partner.name + 'what was great!'
                        } 
                        onBlur={(e) => onChangeFreeText(e, "keep")}/>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> Top 3 To Improve</Statement>
                    <Question>Top 3 skills that {partner.name} sholud improve</Question>
                    <ListContainer>
                        {/* <ol> */}
                            <SkillInput placeholder={feedbackForm.toImproveList.length >= 1? 
                                                    feedbackForm.toImproveList[0] : "Skill 1"} 
                                                    index='1' 
                                                    isDisabled={false}
                                                    keepOrImprove="improve"
                                                    />
                            <SkillInput placeholder={feedbackForm.toImproveList.length >= 2? 
                                                    feedbackForm.toImproveList[1] : "Skill 2"} 
                                                    index='2' 
                                                    isDisabled={false}
                                                    keepOrImprove="improve"
                                                    />
                            <SkillInput placeholder={feedbackForm.toImproveList.length >= 3? 
                                                    feedbackForm.toImproveList[2] : "Skill 3"} 
                                                    index='3' 
                                                    isDisabled={false}
                                                    keepOrImprove="improve"
                                                    />
                        {/* </ol> */}
                    </ ListContainer>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> To Improve - Free Text</Statement>
                    <Question>Please tell {partner.name} what s/he should improve!</Question>
                    <BigContentBox placeholder={ feedbackForm.toImproveText ? feedbackForm.toImproveText : 
                                "Tell " + partner.name + ' what can be better!'} 
                                onBlur={(e) => onChangeFreeText(e, "improve")}/>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> Your experience can help others</Statement>
                    <Question>Anything else you would like to add ? </Question>
                    <BigContentBox 
                        placeholder={
                        feedbackForm.freeText ? feedbackForm.freeText :  
                        "Enter your Tips, general impression, etc" 
                        } 
                        
                        onBlur={(e) => onChangeFreeText(e, "free")}/>
                </FeedbackContainer>

                {/* <FeedbackContainer>
                    <Statement> We will be happy to improve </Statement>
                    <Question>Is there anything else you would like to tell us?</Question>
                    <BigContentBox placeholder="Tell us more" />
                </FeedbackContainer> */}

                {/* <ButtonSection>
                <IconButton  onClick={shareTapped} size='small' style={{ color: selectedRadioOption !== 'yes' ? 'grey' : '#0A66C2' }} disabled={selectedRadioOption !== 'yes'} >
                    <Typography>Share this process</Typography>
                    <LinkedInIcon style={{ color: selectedRadioOption !== 'yes' ? 'grey' : '#0A66C2' }} fontSize="large" />
                </IconButton>
                </ButtonSection> */}

                <ButtonSection>
                    <ButtonWrapper variant="outlined" color="success" onClick={backTapped} title='Save' />
                    <ButtonWrapper variant="contained" color="primary" onClick={doneTapped} title='Done' />
                </ButtonSection>
            </FormContainer>
            
            <DialogBox 
                open={doneDialogOpen} 
                setDialogState={setDoneDialogOpen} 
                title='Thank you for your feedback!'
                content='We appreciate your contribution to our community. 
                are you sure you are done with your feedback?'
                button1='No'
                button2='Yes'
                onApproveFunc={onClickDone}
                onDecline={() => setDoneDialogOpen(false)}
                >
            </DialogBox>

            <DialogBox 
                open={saveDialogOpen} 
                setDialogState={setSaveDialogOpen} 
                title='It seems like you didnt finish...'
                content='Do you want to save the feedback you already gave and return late?'
                button1='No'
                button2='Yes'
                onApproveFunc={onClickSave}
                onDecline={() => {
                    setSaveDialogOpen(false)
                    navigate('../')
                }}
                >
            </DialogBox>
            

        </RootContainer>
        </div>
        </>
        );
    }
};

export default ProcessCompletionPage;