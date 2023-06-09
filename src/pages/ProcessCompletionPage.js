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
import * as Constants from '../Constants';

const RootContainer = styled(Container)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   paddingTop: theme.spacing(10),
   paddingBottom: theme.spacing(10),
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
   marginBottom: theme.spacing(2),
   marginTop: theme.spacing(-5),
   fontFamily: theme.typography.fontFamily,
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

const ProcessCompletionPage = ({user, partner}) => {
      
    const navigate = useNavigate();

    const backTapped = () => {
        navigate(Constants.HOME_PAGE);
    };

    const [doneDialogOpen, setDoneDialogOpen] = React.useState(false);

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

    useEffect(() => {
        if (shareModalOpen) {
          const timer = setTimeout(shareModalClosed, 3000);
          return () => clearTimeout(timer); // Clear the timer if the modal is closed before the timeout
        }
      }, [shareModalOpen]);

      useEffect(() => {
        if (doneDialogOpen && user.type == 'mentor') {
          const timer = setTimeout(mentorDialogClosed, 3000);
          return () => clearTimeout(timer); // Clear the timer if the modal is closed before the timeout
        }
      }, [doneDialogOpen]);
      

    if(user.type === 'mentor') {
        return (
            <>
            <div style={{ backgroundColor: '#F8FFFF' }}>
            <RootContainer maxWidth="md">

            <Title>Tell us about the process</Title>

            <FormContainer>
                
                <FeedbackContainer>
                    <Question>Did you help your interviewee find a job?</Question>
                    <RadioGroup 
                        row
                        value={selectedRadioOption}
                        onChange={handleRadioOptionChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Question>Please rate your interviewee</Question>
                    <Rating size="large" defaultValue={0} precision={0.5} />
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> Feedback is a gift</Statement>
                    <Question>Please tell us what your interviewee was good at, and what he could improve on</Question>
                    <BigContentBox placeholder="Enter your feedback" />
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> Your experience can help others</Statement>
                    <Question>Do you have any tips to help future generations succeed?</Question>
                    <BigContentBox placeholder="Enter your Tips" />
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> We will be happy to improve </Statement>
                    <Question>Is there anything else you would like to tell us?</Question>
                    <BigContentBox placeholder="Tell us more" />
                </FeedbackContainer>

                <ButtonSection>
                <IconButton  onClick={shareTapped} size='small' style={{ color: selectedRadioOption !== 'yes' ? 'grey' : '#0A66C2' }} disabled={selectedRadioOption !== 'yes'} >
                    <Typography>Share this process</Typography>
                    <LinkedInIcon style={{ color: selectedRadioOption !== 'yes' ? 'grey' : '#0A66C2' }} fontSize="large" />
                </IconButton>
                </ButtonSection>

                <ButtonSection>
                    <ButtonWrapper variant="outlined" color="primary" onClick={backTapped} title='Back' />
                    <ButtonWrapper variant="contained" color="primary" onClick={doneTapped} title='Done' />
                </ButtonSection>
            </FormContainer>

            <Modal
                open={doneDialogOpen}
                onClose={mentorDialogClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalStyle>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thank you for your feedback!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        We appreciate your contribution to our community.
                    </Typography>
                </ModalStyle>
            </Modal>

            <Modal
                open={shareModalOpen}
                onClose={shareModalClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalStyle>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Sharing is caring!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your process has been successfully published.
                    </Typography>
                </ModalStyle>
            </Modal>

        </RootContainer>
        </div>
        </>
        );
    } else {
        return (
            <>
            <div style={{ backgroundColor: '#F8FFFF' }}>
            <RootContainer maxWidth="md">

            <Title>Tell us about the process</Title>
        
            <FormContainer>
                
                <FeedbackContainer>
                    <Question>Did the app help you find a job?</Question>
                    <RadioGroup 
                        row
                        value={selectedRadioOption}
                        onChange={handleRadioOptionChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FeedbackContainer>
        
                <FeedbackContainer>
                    <Question>Please rate your interviewer</Question>
                    <Rating size="large" defaultValue={0} precision={0.5} />
                </FeedbackContainer>
        
                <FeedbackContainer>
                <Statement> Feedback is a gift</Statement>
                    <Question>Please tell us what your interviewer was good at, and what he could improve on</Question>
                    <BigContentBox placeholder="Enter your feedback" />
                </FeedbackContainer>
        
                <FeedbackContainer>
                    <Statement> Your experience can help others</Statement>
                    <Question>Do you have any tips to help future generations succeed?</Question>
                    <BigContentBox placeholder="Enter your Tips" />
                </FeedbackContainer>
        
                <FeedbackContainer>
                    <Statement> We will be happy to improve </Statement>
                    <Question>Is there anything else you would like to tell us?</Question>
                    <BigContentBox placeholder="Tell us more" />
                </FeedbackContainer>

                <ButtonSection>
                <IconButton  onClick={shareTapped} size='small' style={{ color: selectedRadioOption !== 'yes' ? 'grey' : '#0A66C2' }} disabled={selectedRadioOption !== 'yes'} >
                    <Typography>Share this process</Typography>
                    <LinkedInIcon style={{ color: selectedRadioOption !== 'yes' ? 'grey' : '#0A66C2' }} fontSize="large" />
                </IconButton>
                </ButtonSection>
                
                <ButtonSection>
                    <ButtonWrapper variant="outlined" color="primary" onClick={backTapped} title='Back' />
                    <ButtonWrapper variant="contained" color="primary" onClick={doneTapped} title='Done' />
                </ButtonSection>
        
            </FormContainer>

            <Dialog
                open={doneDialogOpen}
                onClose={menteeDialogClosedWithNo}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Want to be a mentor yourself?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you have found a job, you can help others and accompany them in their job-finding process.
                    </DialogContentText>
                </DialogContent>
                <DialogActions >

                    <Button variant='outlined' onClick={menteeDialogClosedWithNo}>
                        <Typography variant="body1" fontWeight="bold">
                            No
                        </Typography>
                    </Button>
                    <Button variant='contained' onClick={menteeDialogClosedWithYes} autoFocus>
                        <Typography variant="body1" fontWeight="bold">
                            Yes
                        </Typography>
                    </Button>
                </DialogActions>
            </Dialog>

            <Modal
                open={shareModalOpen}
                onClose={shareModalClosed}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <ModalStyle>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Sharing is caring!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Your process has been successfully published.
                    </Typography>
                </ModalStyle>
            </Modal>
        
        </RootContainer>
        </div>
        </>
        );
    }  
};

export default ProcessCompletionPage;