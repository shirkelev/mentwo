import React from 'react';
import {Avatar, Grid, Stack, Button } from '@mui/material';
import TipBox from './small-components/TipBox';

export default function MentorApproval({mentee}) {
    return( 
         <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={8}
                style={{width:'70%'}}>
                <Grid  container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                    style={{width:'70%'}}>
                    <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={mentee.img}/></Grid>
                    <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={mentee.currentMentor.img}/> </Grid>
                </Grid>
                <h1>It's a Match!</h1>
                <TipBox tipMessege={'Send resume via friend!'}></TipBox>
            </Stack>
    );
}