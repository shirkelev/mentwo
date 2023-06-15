import React from 'react';
import {Avatar, Grid, Stack, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TipBox from './small-components/TipBox';
import Recommendations from '../pages/Recommendations';


export default function ProfilePage({user}) {
    return( 
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' , marginTop: '2rem' }}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop: '1rem', marginBottom: '5rem' }}>
            <Stack direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={5}
                    style={{width:'70%'}}>
                    <Grid  container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        >
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={mentee.img}/></Grid>
                    </Grid>
                    <Typography><text>Hello {mentee.name}</text></Typography>
                    <text>User name: {mentee.userName}</text>
                    <TipBox tipMessege={'Send resume via friend! It will help the HR team see it sooner!'}></TipBox>
                    <Button size='large' variant='outlined' onClick={handleClick}>I Found a Job!</Button>
                </Stack>
                </div>
                <Divider style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }} />
                <Recommendations user={mentee}></Recommendations>
            </div>
    );
}