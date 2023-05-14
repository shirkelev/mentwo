import React from 'react';
import { Stack, Button } from '@mui/material';
import CardsCarousel from './CardsCarousel';
import { textAlign } from '@mui/system';
import Typography from '@mui/material/Typography';
import StageStepper from '../components/StageStepper';

export default function ChooseMentor({mentee}) {
    // function handleClickSecondButton() {
    //     window.history.pushState(null, "", "/home/mantorApprovalWaitPage");
    //     window.location.reload();
    // }
    const buttonText0 = {
        text: 'About',
        variant: 'text',
        color: '',
    }
    const buttonText2 = {
        text: 'Be My Mentor!',
        color: 'primary',
        variant: 'outlined',
    }
    const buttonText1 = {
        text: '',
        color: '',
        variant: '',
    }
    
    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem'}}>
            <StageStepper activeStage={1} style={{width:'100%'}} /> 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1rem'}}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center" 
                spacing = {5}
                style={{ width: '80%' }}>
                <Typography><h1 style={{ fontSize: '1.2rem', textAlign:'center' }} >Take a look on your optional mentors and choose your perfect match!</h1></Typography>
                <CardsCarousel 
                list = {mentee.optionalMentors} 
                buttonText0={buttonText0} 
                buttonText2 = {buttonText2}
                buttonText1={buttonText1}
                 isMatched = {false} />
                <Button variant="text">
                    <Typography style={{ fontSize: '1rem', textAlign:'center', fontWeight:'bold'
                ,fontStyle:''}} >
                        Not a great fit? <br /> update your preferences!
                    </Typography>
                </Button>
            </Stack>
        </div>
        </div>
    );   
};

