import React from 'react';
import NavigationBar from '../components/NavigationBar';
import HomeContent from '../components/HomeContent';
import { Grid, Stack, Avatar, Button, Stepper } from '@mui/material';
import StageStepper from '../components/StageStepper';
import TipBox from '../components/small-components/TipBox';
import CircularProgressBar from '../components/small-components/CircularProgressBar'
import { width } from '@mui/system';
import Matching from '../components/Matching';

const MenteeStatusPage = ({picturePath, status}) => {
    return(
        <Stack  direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={{ width: '100%'}}
        >
            <NavigationBar style={{ width: '100%'}} />
            <StageStepper activeStage={status} style={{width:'100%'}} />  

            {status === 0 && (
                <Matching></Matching>
                
            )}    
        </Stack>
        );
    // else {
    // return(
    // <div style={{ width:'100%', height:'100%'}}>
    //     
    //     <Stack
    //             direction="row"
    //             justifyContent="center"
    //             alignItems="center"
    //             spacing={1}>
                
    //             <Stack direction="column"
    //                 justifyContent="center"
    //                 alignItems="center"
    //                 spacing={8}
    //                 style={{width:'70%'}}>
    //                 <Grid  container
    //                     direction="row"
    //                     justifyContent="center"
    //                     alignItems="center"
    //                     spacing={1}
    //                     style={{width:'70%'}}>
    //                     <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={picturePath}/></Grid>
    //                     <Grid item><Avatar  sx={{ width: 100, height: 100 }} src={picturePath}/> </Grid>
    //                 </Grid>
    //                 <Button size='large' variant='outlined'>Finish Proccess</Button>
    //                 <TipBox tipMessege={'Send resume via friend!'}></TipBox>
    //             </Stack>
    //         </Stack>
    // </div>
    // );
};
export default MenteeStatusPage;
