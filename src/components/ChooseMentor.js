import React from 'react';
import { Stack, Button } from '@mui/material';
import CardsCarousel from './CardsCarousel';
import { textAlign } from '@mui/system';
import StageStepper from '../components/StageStepper';

export default function ChooseMentor({mentee}) {
    function handleClickSecondButton() {
        window.history.pushState(null, "", "/home/mantorApprovalWaitPage");
        window.location.reload();
    }
    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem' }}>
            <StageStepper activeStage={1} style={{width:'100%'}} /> 
            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center" 
                spacing = {12}
                style={{ width: '80%' }}>
                <h1 style={{ fontSize: '1.5rem', margin: '1rem', textAlign:'center' }} >Take a look on your optional Mentors and choose one</h1>
                <CardsCarousel list = {mentee.optionalMentors} buttonText2 = {'Be My Mentor!'} button2onClickFunc={handleClickSecondButton} isMatched = {false} />
                <Button variant="contained">Change Profile Settings</Button>
            </Stack>
        </div>
        </div>
    );   
};

