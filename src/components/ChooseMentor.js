import React from 'react';
import { Stack } from '@mui/material';
import MenteeProcessTimeline from '../components/StageStepper'
import NavigationBar from '../components/NavigationBar';
import CardsCarousel from './CardsCarousel';

export default function ChooseMentor({Mentee}) {
    return(
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"> 
             <CardsCarousel list = {Mentee.optionalMentors} buttonText1 = {'About'} buttonText2 = {'Be My Mentor!'} isMatched = {false} />
            <button>Change Profile Settings</button>
        </Stack>
    );   
};

