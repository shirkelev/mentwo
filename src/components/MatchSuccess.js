import React from 'react';
import {Avatar, Grid, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import TipBox from './small-components/TipBox';
import StageStepper from './StageStepper';
import Recommendations from '../pages/Recommendations';


export default function MatchSuccess({mentee}) {
    function handleClick() {
        window.history.pushState(null, "", "/home/process-completion");
        window.location.reload();
    }
    return( 
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem' }}>
            <StageStepper activeStage={3} style={{width:'100%'}} /> 
            <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '2rem', marginBottom: '5rem' }}>
            <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                    style={{width:'70%'}}>
                    <Typography><h1>It's a Match!</h1></Typography>
                    <Grid  container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={mentee.img}/></Grid>
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={mentee.currentMentor.img}/> </Grid>
                    </Grid>
                    <Button size='large' variant='outlined' onClick={handleClick}>Finish Proccess</Button>
                    <TipBox tipMessege={'Send resume via friend!'}></TipBox>
                </Stack>
                </div>
                <Recommendations user={mentee}></Recommendations>
            </div>
    );
}