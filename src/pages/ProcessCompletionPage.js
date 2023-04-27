import React from 'react';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Button from '../components/small-components/Button'
import BigContentBox from '../components/small-components/BigContentBox'
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import MuiButton from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router-dom';
import { useState, Icon } from "react";
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const ButtonWrapper = styled(Button)(({ theme }) => ({
    marginBottom: theme.spacing(2),
}));

const ButtonSection = styled('div')(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    margin: theme.spacing(3),
}));

const Title = styled('h1')(({ theme }) => ({
    marginBottom: theme.spacing(3),
}));

const FeedbackContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: theme.spacing(2),
}));

const Statement = styled('h3')(({ theme }) => ({
    marginBottom: theme.spacing(-1.5),
    fontSize: 16
  }));

const Question = styled('h3')(({ theme }) => ({
    marginBottom: theme.spacing(1),
    fontSize: 20
}));

const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
};

const ProcessCompletionPage = ({user}) => {
      
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const alertHandleCloseWithNo = () => {
        setOpen('/home-page');
        navigate('/home-page');
      };

      const alertHandleCloseWithYes = () => {
        setOpen(false);
        navigate('/choose-role');
      };

    const modalHandleClose = () => {
      setOpen(false);
      navigate('/home-page');
    };
    const [message, setMessage] = useState("");

    const handleShare = (event) => {
        // Share on LinkedIn
      };

    const [selectedOption, setSelectedOption] = useState('');
    
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    if(user.type === 'mentor') {
        return (
            <>
            <RootContainer maxWidth="md">

            <Title>Tell us about the process</Title>

            <FormContainer>
                
                <FeedbackContainer>
                    <Question>Have you helped your mentee find a job?</Question>
                    <RadioGroup row>
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Question>Please rate your mentee</Question>
                    <Rating size="large" defaultValue={0} precision={0.5} />
                </FeedbackContainer>

                <FeedbackContainer>
                    <Question>Please tell us about the process with your mentee</Question>
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
                <IconButton  onClick={handleShare} size='small'  color='primary' disabled={selectedOption !== 'yes'} >
                    Share this process     
                    <LinkedInIcon fontSize='large' />
                </IconButton>
                    <ButtonWrapper variant="contained" color="primary" onClick={handleOpen} title='Done' />
                </ButtonSection>

            </FormContainer>

            <Modal
                open={open}
                onClose={modalHandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ModalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Thank you for your feedback!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        We appreciate your contribution to our community.
                    </Typography>
                </Box>
         </Modal>

        </RootContainer>
        </>
        );
    } else {
        return (
            <>
            <RootContainer maxWidth="md">

            <Title>Tell us about the process</Title>
        
            <FormContainer>
                
                <FeedbackContainer>
                    <Question>Did the app help you find a job?</Question>
                    <RadioGroup 
                        row
                        aria-label='share-options'
                        name='share-options'
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FeedbackContainer>
        
                <FeedbackContainer>
                    <Question>Please rate your mentor</Question>
                    <Rating size="large" defaultValue={0} precision={0.5} />
                </FeedbackContainer>
        
                <FeedbackContainer>
                    <Question>Please tell us about the process with your mentor</Question>
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
                <IconButton  onClick={handleShare} size='small'  color='primary' disabled={selectedOption !== 'yes'} >
                    Share this process     
                    <LinkedInIcon fontSize='large' />
                </IconButton>
                    <ButtonWrapper variant="contained" color="primary" onClick={handleOpen} title='Done' />
                </ButtonSection>
        
            </FormContainer>

            <Dialog
                open={open}
                onClose={alertHandleCloseWithNo}
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
                    <MuiButton onClick={alertHandleCloseWithNo}>NO</MuiButton>
                    <MuiButton onClick={alertHandleCloseWithYes} autoFocus>Yes</MuiButton>
                </DialogActions>
            </Dialog>
        
        </RootContainer>
        </>
        );
    }  
};

export default ProcessCompletionPage;