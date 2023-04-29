import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import { Grid, Stack, Avatar, Button } from '@mui/material';
import MenteeProcessTimeline from '../components/MenteeProcessTimeline';
import TipBox from '../components/small-components/TipBox';

const MenteeStatusPage = ({picturePath}) => {
    return(
    <div style={{ width:'100%', height:'100%'}}>
        <NavigationBar/>
        <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}>
                <MenteeProcessTimeline style={{width:'30%'}}></MenteeProcessTimeline>
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
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={picturePath}/></Grid>
                        <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={picturePath}/> </Grid>
                    </Grid>
                    <Button size='large' variant='outlined'>Finish Proccess</Button>
                    <TipBox tipMessege={'Send resume via friend!'}></TipBox>
                </Stack>
            </Stack>
    </div>
    );
};
export default MenteeStatusPage;
