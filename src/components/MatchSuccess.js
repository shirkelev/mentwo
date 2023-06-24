import React from 'react';
import {Avatar, Grid, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TipBox from './small-components/TipBox';
import Recommendations from '../pages/Recommendations';
import PersonCard from './small-components/PersonCard';
import * as Constants from '../Constants';

export default function MatchSuccess({mentee}) {
    function handleClick() {
        window.history.pushState(null, "", "/home/process-completion");
        window.location.reload();
    }
    return( 
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem' }}>
            {/* <StageStepper activeStage={2} style={{width:'100%'}} />  */}
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '1rem', marginBottom: '5rem' }}>
            <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                    style={{width:'70%'}}>
                    <Typography sx={{ marginBottom: '-30px' }}><h1>It's a Match!</h1></Typography>
                    <Grid  container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item><Avatar  sx={{ width: 100, height: 100, border:1}} src={mentee.img ? mentee.img : null} /></Grid>
                        <Grid item><Avatar  sx={{ width: 100, height: 100, border:1 }} src={mentee.currentMentorData.img ? mentee.currentMentorData.img : null}/> </Grid>
                    </Grid>
                    {console.log(mentee)}
                    <PersonCard mainUser={mentee} cardUser={mentee.currentMentorData} variant={Constants.PROCESS}/>
                    {/* <Typography><text>{mentee.currentMentorData.phone} , {mentee.currentMentorData.email}</text></Typography> */}
                    <Divider style={{ width: '100%', marginTop: '32px', marginBottom: '16px' }} />
                    <TipBox tipMessege={'Send resume via friend! It will help the HR team see it sooner!'}></TipBox>
                    {/* <Button size='large' variant='outlined' onClick={handleClick}>I Found a Job!</Button> */}
                </Stack>
                </div>
                {/* <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />
                <Recommendations user={mentee}></Recommendations> */}
            </div>
    );
}