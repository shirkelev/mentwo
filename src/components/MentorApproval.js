import React from 'react';
import {Avatar, Grid, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import TipBox from './small-components/TipBox';
import CircularDeterminate from './small-components/CircularDeterminate';
import StageStepper from './StageStepper';

export default function MentorApproval({mentee}) {
    function handleClick() {
        window.history.pushState(null, "", "/home/matchSuccessPage");
        window.location.reload();
    }
    return( 
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem' }}>
            <StageStepper activeStage={1} style={{width:'100%'}} /> 
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '3.5rem' }}>
            <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={8}
                    style={{width:'70%'}}>
                    <Grid  container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={mentee.img}/></Grid>
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={mentee.currentMentor.img}/> </Grid>
                    </Grid>
                    <Typography>
                        <h2 style={{ marginTop: '15px', textAlign: 'center' }}>Waiting for your mentor to approve your pending</h2>
                        <text style={{ marginTop: '12px', textAlign: 'center' }}>Your mentor has 24 hours to approve your request</text>
                    </Typography>
                    <CircularDeterminate></CircularDeterminate>
                    <button style={{backgroundColor: 'white', position: 'absolute', bottom: '16px', right: '16px'}} onClick={handleClick}>next</button>
                </Stack>
            </div>
            </div>
    );
}