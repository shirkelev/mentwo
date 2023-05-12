import React from 'react';
import { Stack, Button } from '@mui/material';
import CardsCarousel from './CardsCarousel';
import { textAlign } from '@mui/system';

export default function ChooseMentor({mentee}) {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center" 
                spacing = {12}>
                <h1 style={{ fontSize: '1.5rem', margin: '1rem', textAlign:'center' }} >Take a look on your optional Mentors and choose one</h1>
                <CardsCarousel list = {mentee.optionalMentors} buttonText2 = {'Be My Mentor!'} isMatched = {false} />
                <Button variant="contained">Change Profile Settings</Button>
            </Stack>
        </div>
    );   
};

