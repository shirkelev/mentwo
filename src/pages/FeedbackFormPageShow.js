import React, { useState, useEffect } from 'react';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import { DB } from '../data/firebase';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import * as Constants from '../Constants';


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


const FreeTextBox = ({ text }) => {
    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: '10px', 
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
                textAlign: 'center',
                padding: '40px', 
                marginTop: '20px',
                marginBottom: '20px',
            }}
            >
            <Typography variant="h6" gutterBottom component="div"> {text} </Typography>
        </Box>
    );
};




const FeedbackFormPageShown = ({user, partner}) => {

    // if(!partner) {
    //     partner = user;
    // }
    
    // TODO remove and change to the real user!

    const feedbackForm = partner.feedbackForm ? partner.feedbackForm : null;

    const navigate = useNavigate();

    const backTapped = () => {
        navigate(-1);
    };

    const onEditTapped = () => {
        navigate('../' + Constants.PROCESS_COMPLETION_FORM + 'id=' + partner.id);
    };

    function SkillInput({ index=1, keepOrImprove="keep", text="" }) {
    
        return( 
            <SingleSkillContainer>
                <SkillNumber> {index + 1} </SkillNumber>
                {/* <Typography variant="h6" gutterBottom component="div"> {index} </Typography> */}
                <Typography variant='h6' > {text} </Typography>
            </SingleSkillContainer>
        );
    }

    const fabStyle = {
        position: 'sticky',
        top: '88vh',
        bottom: '85vh',
        left: '85vw',
      };
    
    const editFabStyle = {
        position: 'sticky',
        top: '80vh',
        bottom: '85vh',
        left: '85vw',
        };
      
    const mainTitle = user.type === 'mentor' ? 'Your Feedback to ' + partner.name :
                    partner.name + ' Feedback';
    
    const description = user.type === 'mentor' ? 
    'This is the feedback you gave ' + partner.name :
    partner.name + ' gave you the following feedback, so you can become better!';
                    
    const keepListTitle = user.type === 'mentor' ? 'Which skills you think ' + partner.name + ' should keep' : 
                'Which skills ' + partner.name + ' thinks you should keep';
    
    const toImproveListTitle = user.type === 'mentor' ? 'Which skills you think ' + partner.name + ' should improve' :
                'Which skills ' + partner.name + ' thinks you should improve';
    
      
    if(!feedbackForm) {
        return(
            <RootContainer maxWidth="md">
            <Title> Theres no feedback form to present</Title>
            </RootContainer>
        );
    }

    else{

        return (
        <>
        {user.type === 'mentor' ? 
         <Fab color="primary" aria-label="add" size="small" sx={editFabStyle} onClick={onEditTapped}>
            <EditIcon />
        </ Fab>
         
         : null}
        <Fab color="primary" aria-label="add" size="small" sx={fabStyle} onClick={backTapped}>
                <ArrowBackIcon />
        </ Fab>
        <div style={{ backgroundColor: '#F8FFFF' }}>
        <RootContainer maxWidth="md">
            
            <TitleAndAvatar>
                
                <div>
                    <Avatar alt="Remy Sharp" src={partner.img}  sx={{ width: 70, height: 70, border: 1}} borderStyle="line" size="large"/>
                </div>
                <Title> {mainTitle} </Title>
            </TitleAndAvatar>

            
            
            <Typography variant="h6" gutterBottom component="div"> 
                {description}
            </ Typography>

            <FormContainer>
        
                <FeedbackContainer>
                    <Statement> Top 3 to Keep </Statement>
                    <Question> {keepListTitle} </Question>
                    <ListContainer>
                        {feedbackForm.toKeepList.map((skill, index) => (
                            <SkillInput index={index} keepOrImprove='keep' text={skill}/>
                        ))}
                    </ ListContainer>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> Keepers - Free Text</Statement>
                    <FreeTextBox text={feedbackForm.toKeepText} />
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> Top 3 To Improve</Statement>
                    <Question> {toImproveListTitle} </Question>
                    <ListContainer>
                        {feedbackForm.toImproveList.map((skill, index) => (
                            <SkillInput index={index} keepOrImprove='improve' text={skill} />
                        ))}
                    </ ListContainer>
                </FeedbackContainer>

                <FeedbackContainer>
                    <Statement> To Improve - Free Text</Statement>
                    <FreeTextBox  text={feedbackForm.toImproveText} />
                </FeedbackContainer>
                
            </FormContainer>
            

        </RootContainer>
        </div>
        </>
        );
    }
};

export default FeedbackFormPageShown;