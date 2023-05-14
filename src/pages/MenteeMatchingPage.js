import React from 'react';
import {Stack} from '@mui/material';
import StageStepper from '../components/StageStepper';
import CircularProgressBar from '../components/small-components/CircularProgressBar';


const MenteeMatchingPage = ({mentee}) => {
    const containerStyles = {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    function handleClick() {
        window.history.pushState(null, "", "/home/chooseMentorPage");
        window.location.reload();
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem' }}>
            <StageStepper activeStage={0} style={{width:'100%'}} /> 
            <div style={{ marginTop: '4rem' }}>
                <Stack  direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={8}
                style={{ maxWidth: '100%', marginTop: '2rem' }}
                >
                    <CircularProgressBar />
                    <h1 style={{ marginTop: '24px', textAlign: 'center' }}>Searching for the best mentors for you!</h1>   
                    <button  style={{backgroundColor: 'white', position: 'absolute', bottom: '16px', right: '16px'}} onClick={handleClick}>next</button>
                </Stack>
            </div>
        </div>
        );
};
export default MenteeMatchingPage;
